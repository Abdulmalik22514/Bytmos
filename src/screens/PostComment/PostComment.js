import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import TribeComponent from '../../components/TribeComponent';
import { SIZES } from '../../constants/theme';

const PostComment = () => {
  return (
    <>
      <Container>
        <Header isNotHome />
        <ScrollView showsVerticalScrollIndicator={false}>
          <TribeComponent isComment style={{ marginBottom: SIZES.font1 * 2 }} />
        </ScrollView>
      </Container>
    </>
  );
};

export default PostComment;

const styles = StyleSheet.create({});
