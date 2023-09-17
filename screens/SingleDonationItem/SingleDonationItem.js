import React from 'react';
import {SafeAreaView, View, Image, ScrollView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import globalStyles from '../../assets/styles/globalstyles';
import BackButton from '../../components/BackButton/BackButton';
import styles from './styles';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const SingleDonationItem = ({navigation, route}) => {
  const donationItemInfomation = useSelector(
    state => state.donation.selectedDonationInfomation,
  );
  console.log(donationItemInfomation);
  const categoryInfomation = route.params.categoryInfomation;
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{uri: donationItemInfomation.image}}
          style={styles.image}
        />
        <View style={styles.badge}>
          <Badge title={categoryInfomation} />
        </View>
        <Header title={donationItemInfomation.name} />
        <Text style={styles.description}>
          {donationItemInfomation.description}
          {donationItemInfomation.description}
          {donationItemInfomation.description}
          {donationItemInfomation.description}
          {donationItemInfomation.description}
          {donationItemInfomation.description}
          {donationItemInfomation.description}
          {donationItemInfomation.description}
          {donationItemInfomation.description}
          {donationItemInfomation.description}
          {donationItemInfomation.description}
          {donationItemInfomation.description}
          {donationItemInfomation.description}
          {donationItemInfomation.description}
          {donationItemInfomation.description}
        </Text>
      </ScrollView>
      <View style={styles.button}>
        <Button title={'Donate'} />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
