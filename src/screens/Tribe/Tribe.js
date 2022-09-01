import { FlatList, View } from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import { SIZES } from '../../constants/theme';
import TribeCategories, { CATEGORIES } from '../../components/TribeCategories';
import {
  TribeBottomSheet,
  TRIBE_BOTTOMSHEET_ACTIONS,
} from '../../components/LikeActions';
import { TribeStyles as styles } from './styles';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import TribeComponent from '../../components/TribeComponent';

const Tribe = () => {
  const [active, setActive] = useState('All');

  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['1%', '32%'], []);

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={1}
        opacity={0.5}
      />
    ),
    [],
  );

  return (
    <>
      <Container>
        <Header />
        <View>
          <View
            style={{
              marginVertical: SIZES.font10,
            }}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={CATEGORIES}
              renderItem={({ item }) => {
                return (
                  <TribeCategories
                    title={item.title}
                    icon={item.icon}
                    onPress={() => setActive(item.title)}
                    isActive={item.title === active}
                  />
                );
              }}
            />
          </View>

          <View style={styles.separator} />
          <View>
            <FlatList
              data={[...Array(5).keys()]}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={<View />}
              ListFooterComponentStyle={{ marginBottom: SIZES.font1 * 11 }}
              ItemSeparatorComponent={() => (
                <View style={styles.itemSeparator} />
              )}
              renderItem={() => {
                return (
                  <TribeComponent
                    onPressBottomSheet={() =>
                      bottomSheetRef?.current?.snapToIndex(1)
                    }
                  />
                );
              }}
            />
          </View>
        </View>
      </Container>
      <BottomSheet
        enablePanDownToClose
        ref={bottomSheetRef}
        backdropComponent={renderBackdrop}
        index={-1}
        snapPoints={snapPoints}
        handleIndicatorStyle={styles.sheetHandleStyle}>
        <View style={{ paddingLeft: SIZES.font5, marginTop: SIZES.font10 }}>
          {TRIBE_BOTTOMSHEET_ACTIONS.map((item, index) => {
            return (
              <TribeBottomSheet
                key={index}
                icon={item.icon}
                title={item.title}
              />
            );
          })}
        </View>
      </BottomSheet>
    </>
  );
};

export default Tribe;
