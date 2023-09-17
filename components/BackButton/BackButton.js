import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Pressable} from 'react-native';
import styles from './styles';

const BackButton = ({onPress}) => {
  return (
    <Pressable onPress={() => onPress()} style={styles.container}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  );
};

export default BackButton;
