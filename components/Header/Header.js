import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Header = ({title, type}) => {
  const styleToApply = () => {
    switch (type) {
      case 1:
        return styles.title1;
      case 2:
        return styles.title2;
      case 3:
        return styles.title3;
      default:
        return styles.title1;
    }
  };
  return (
    <View>
      <Text style={styleToApply()}>{title}</Text>
    </View>
  );
};

export default Header;
