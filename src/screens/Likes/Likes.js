import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import { FONTS, SIZES } from '../../constants/theme';
import SearchBar from '../../components/SearchBar';
import TribalsComponent, {
  TRIBE_FRIENDS,
} from '../../components/TribalsComponent';

const Likes = ({ route }) => {
  const { user } = route.params;
  return (
    <Container>
      <Header isNotHome screenName={user} />
      <View
        style={{
          paddingHorizontal: SIZES.font10,
        }}>
        <View style={{ marginBottom: SIZES.font1 }}>
          <FlatList
            data={TRIBE_FRIENDS}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
              <View style={{ marginBottom: SIZES.font1 * 2 }} />
            }
            ListHeaderComponent={() => {
              return (
                <>
                  <Text style={[FONTS.h8, { marginTop: SIZES.font5 }]}>
                    1k Likes
                  </Text>
                  <SearchBar />
                </>
              );
            }}
            renderItem={({ item }) => {
              return (
                <TribalsComponent
                  icon={item.icon}
                  tribe_name={item.tribe_name}
                  business_name={item.business_name}
                />
              );
            }}
          />
        </View>
      </View>
    </Container>
  );
};

export default Likes;

const styles = StyleSheet.create({});
