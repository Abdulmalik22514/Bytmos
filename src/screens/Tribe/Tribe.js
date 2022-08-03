import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import icons from '../../constants/icons';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

const Categories = [
  {
    icon: icons.AllCategory,
    title: 'All',
  },
  {
    icon: icons.TechCategory,
    title: 'Tech',
  },
  {
    icon: icons.BeautyCategory,
    title: 'Beauty & F..',
  },
  {
    icon: icons.EventCategory,
    title: 'Event',
  },
];

const CatagoriesCard = ({title, icon, onPress, isActive}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{alignItems: 'center', marginRight: SIZES.font5}}>
      <Image source={icon} style={styles.catImage} resizeMode="cover" />
      <Text style={[FONTS.body4, isActive && styles.activeText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const Tribe = () => {
  const [active, setActive] = useState('All');
  return (
    <Container>
      <Header />
      <ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginVertical: SIZES.font8}}>
          {Categories.map((item, index) => (
            <CatagoriesCard
              key={index}
              icon={item.icon}
              title={item.title}
              onPress={() => setActive(item.title)}
              isActive={item.title === active}
            />
          ))}
        </ScrollView>
        <View style={styles.separator} />
        <Text>Tribe</Text>
      </ScrollView>
    </Container>
  );
};

export default Tribe;

const styles = StyleSheet.create({
  catImage: {
    width: SIZES.font1 * 3.4,
    height: SIZES.font1 * 2.2,
    marginBottom: SIZES.font10,
    borderColor: COLORS.blue,
    borderWidth: 2,
    borderRadius: 20,
  },
  activeText: {
    color: COLORS.blue,
    fontWeight: '600',
  },
  separator: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: COLORS.separator,
  },
});
