import {FlatList, Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import {BackArrow} from '../../assets/svgs/svg';
import ChooseTerms, {TermsHeaders} from './chooseTerms';
import Acceptance, {AcceptanceItems} from './acceptance';
import CustomButton from '../../components/CustomButton';
import Terms from './terms';
import {TermsPrivacyStyles as styles} from './styles';

const TermsAndPrivacy = ({navigation}) => {
  const [active, setActive] = useState('Terms');
  const [accept, setAccepted] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <BackArrow />
        </Pressable>
        <Text style={styles.headerTitle}> Terms & Privacy</Text>
        <View />
      </View>
      <View style={styles.separator} />
      <View style={styles.scrollView}>
        <View style={styles.termsBox}>
          {TermsHeaders.map((item, index) => {
            return (
              <ChooseTerms
                key={index}
                title={item.title}
                onPress={() => setActive(item.title)}
                isActive={item.title === active}
              />
            );
          })}
        </View>
        <Text style={styles.termsCondition}>Bytmos Terms & Conditions</Text>
        <FlatList
          data={[...Array(8).keys()]}
          renderItem={Terms}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.bottomBox}>
        {AcceptanceItems.map((item, index) => {
          return (
            <Acceptance
              key={index}
              title={item.title}
              onPress={() => setAccepted(item.title)}
              isAccepted={item.title === accept}
            />
          );
        })}
        <CustomButton title={'Continue'} />
      </View>
    </View>
  );
};

export default TermsAndPrivacy;
