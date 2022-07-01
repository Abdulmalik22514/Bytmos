import {FlatList, Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import {BackArrow} from '../../assets/svgs/svg';
import ChooseTerms, {TermsHeaders} from './chooseTerms';
import CustomButton from '../../components/CustomButton';
import Terms from './terms';
import {TermsPrivacyStyles as styles} from './styles';
import {SIZES} from '../../constants/theme';
import Container from '../../components/Container';

const TermsAndPrivacy = ({navigation}) => {
  const [active, setActive] = useState('Terms');
  const [accepted, setAccepted] = useState(false);

  return (
    <Container>
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
            data={[...Array(8)]}
            renderItem={Terms}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={styles.separator} />
        <View style={styles.bottomBox}>
          <Pressable
            style={styles.acceptanceBox}
            onPress={() => setAccepted(!accepted)}>
            <View style={styles.acceptedView}>
              {accepted ? <View style={styles.accepted} /> : null}
            </View>
            <Text style={styles.title}>
              I accept the{' '}
              <Text style={{fontWeight: 'bold'}}>Terms of service</Text> and{' '}
              {'\n'}
              <Text style={{fontWeight: 'bold'}}>Privacy policy</Text>
            </Text>
          </Pressable>

          <CustomButton
            disabled={!accepted}
            title={'Continue'}
            onPress={() => navigation.navigate('SignUp')}
            style={{marginTop: SIZES.font10 * 1.5}}
          />
        </View>
      </View>
    </Container>
  );
};

export default TermsAndPrivacy;
