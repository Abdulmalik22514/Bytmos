import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import {FONTS, SIZES} from '../../constants/theme';
import SearchBar from '../../components/SearchBar';
import TribalsComponent, {
  TRIBE_FRIENDS,
} from '../../components/TribalsComponent';

const Tribals = ({route}) => {
  const {user} = route.params;
  return (
    <Container>
      <Header isNotHome screenName={user} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: SIZES.font10,
          paddingVertical: SIZES.font5,
        }}>
        <Text style={FONTS.h8}>1k Likes</Text>
        <SearchBar />
        <View style={{marginBottom: SIZES.font1}}>
          {TRIBE_FRIENDS.map((item, index) => {
            return (
              <TribalsComponent
                key={index}
                icon={item.icon}
                tribe_name={item.tribe_name}
                business_name={item.business_name}
              />
            );
          })}
        </View>
      </ScrollView>
    </Container>
  );
};

export default Tribals;

const styles = StyleSheet.create({});
