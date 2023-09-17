import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';

const SingleDonationItem = ({uri, badgeTitle, donationTitle, price}) => {
  return (
    <View>
      <Badge title={badgeTitle} />
      <Image source={{uri}} style={styles.image} />
      <Header title={donationTitle} type={3} color="#0A043C" />
      <Header title={'$' + price.toFixed(2)} type={3} color="#156CF7" />
    </View>
  );
};

export default SingleDonationItem;
