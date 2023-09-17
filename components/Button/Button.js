import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

const Button = ({title, isDisable = false, onPress}) => {
  return (
    <Pressable
      disabled={isDisable}
      style={[styles.button, isDisable && styles.disabled]}
      onPress={() => onPress()}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;
