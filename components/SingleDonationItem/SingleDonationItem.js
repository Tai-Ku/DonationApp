import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';

const SingleDonationItem = ({uri, badgeTitle, donationTitle, price}) => {
  return (
    <View>
      <View>
        <View style={styles.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image source={{uri}} style={styles.image} />
      </View>
      <View style={styles.donationInfo}>
        <Header
          title={donationTitle}
          type={3}
          color="#0A043C"
          numberOfLines={1}
        />
        <View style={styles.price}>
          <Header title={'$' + price.toFixed(2)} type={3} color="#156CF7" />
        </View>
      </View>
    </View>
  );
};

export default SingleDonationItem;
