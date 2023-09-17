import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

const SingleDonationItem = () => {
  const donationItemInfomation = useSelector(
    state => state.donation.selectedDonationInfomation,
  );
  console.log(donationItemInfomation);
  return <View></View>;
};

export default SingleDonationItem;
