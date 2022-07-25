// import {ScrollView, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import Header from '../../components/Header';
// import NotchResponsive from '../../components/NotchResponsive';
// import {COLORS, FONTS, SIZES} from '../../constants/theme';
// import AppIntroSlider from 'react-native-app-intro-slider';
// import Basic from './PackageTypes/Basic';
// import Standard from './PackageTypes/Standard';
// import Premium from './PackageTypes/Premium';

// const slides = [1, 2, 3];

// const PackageScreen = () => {
//   const getActiveSlide = key => {
//     switch (key) {
//       case 1:
//         return <Basic />;
//       case 2:
//         return <Standard />;
//       case 3:
//         return <Premium />;
//       default:
//         return null;
//     }
//   };

//   const _renderItem = ({item}) => {
//     return getActiveSlide(item);
//   };

//   const _renderDoneButton = () => {
//     return (
//       <TouchableOpacity>
//         <View style={styles.doneButtonStyle}>
//           <Text style={styles.getStartedText}>Get Started</Text>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <NotchResponsive />
//       <Header screenName="Package" isNotHome />
//       <ScrollView contentContainerStyle={styles.packageView}>
//         <Text style={styles.serviceText}>Service Creation Packages</Text>
//         <View style={styles.packages}>
//           <AppIntroSlider
//             renderItem={_renderItem}
//             data={slides}
//             dotStyle={styles.dotStyle}
//             activeDotStyle={[styles.dotStyle, {backgroundColor: COLORS.blue}]}
//             // onDone={() => navigation.navigate('TermsPrivacy')}
//             renderDoneButton={_renderDoneButton}
//             showNextButton={false}
//           />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default PackageScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.white,
//   },
//   packageView: {
//     alignItems: 'center',
//     padding: SIZES.font5,
//   },
//   packages: {
//     alignItems: 'center',
//     paddingVertical: SIZES.font5,
//     borderRadius: 25,
//     borderColor: COLORS.border,
//     borderWidth: 1,
//     width: '100%',
//     marginTop: SIZES.font5,
//   },
//   serviceText: {
//     ...FONTS.h8,
//   },
//   dotStyle: {
//     borderColor: COLORS.blue,
//     width: SIZES.font10,
//     height: SIZES.font10,
//     borderRadius: 10,
//     borderWidth: 1,
//     marginRight: SIZES.font5,
//     marginBottom: SIZES.font1,
//   },
//   doneButtonStyle: {
//     width: SIZES.font1 * 5.2,
//     height: SIZES.font1 * 1.5,
//     backgroundColor: COLORS.blue,
//     alignItems: 'center',
//     marginTop: SIZES.font2,
//     borderRadius: 15,
//     justifyContent: 'center',
//     marginRight: SIZES.font10 * 0.01,
//   },
//   getStartedText: {
//     ...FONTS.h10,
//     color: COLORS.white,
//   },
// });

import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {COLORS} from '../../constants/theme';
import {GetStartedArrow} from '../../assets/svgs/svg';
// import Slide1 from './slide1';
// import Slide2 from './slide2';
// import Slide3 from './slide3';
// import {Onboa as styles} from './styles';
import {onboardUser} from '../../services/authServices';
import NotchResponsive from '../../components/NotchResponsive';
import Slide1 from '../Onboarding/slide1';
import Slide2 from '../Onboarding/slide2';
import Slide3 from '../Onboarding/slide3';
import {OnboardingStyles as styles} from '../Onboarding/styles';
import Basic from './PackageTypes/Basic';
import Premium from './PackageTypes/Premium';
import Standard from './PackageTypes/Standard';

const slides = [1, 2, 3];

const getActiveSlide = key => {
  switch (key) {
    case 1:
      return <Basic />;
    case 2:
      return <Standard />;
    case 3:
      return <Premium />;
    default:
      return null;
  }
};

export default function PackageScreen({navigation}) {
  const handleGetstarted = () => {
    onboardUser();

    /* after onboarding goto terms */
    navigation.navigate('TermsPrivacy');
  };

  const _renderItem = ({item}) => {
    return <View>{getActiveSlide(item)}</View>;
  };

  const _renderDoneButton = () => {
    return (
      <TouchableOpacity onPress={handleGetstarted}>
        <View style={styles.doneButtonStyle}>
          <Text style={styles.getStartedText}>Get Started</Text>
          <GetStartedArrow />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <NotchResponsive />
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        dotStyle={styles.dotStyle}
        activeDotStyle={[styles.dotStyle, {backgroundColor: COLORS.blue}]}
        // onDone={() => navigation.navigate('TermsPrivacy')}
        renderDoneButton={_renderDoneButton}
        showNextButton={false}
      />
    </View>
  );
}
