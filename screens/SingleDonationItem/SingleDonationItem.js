import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';
import globalStyles from '../../assets/styles/globalstyles';
import {ScrollView} from 'react-native-gesture-handler';
import BackButton from '../../components/BackButton/BackButton';
import styles from './styles';

const SingleDonationItem = ({navigation}) => {
  const donationItemInfomation = useSelector(
    state => state.donation.selectedDonationInfomation,
  );
  // console.log(donationItemInfomation);
  console.log(navigation);
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <BackButton onPress={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
