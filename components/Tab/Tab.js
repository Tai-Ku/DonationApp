import React, {useRef, useState} from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

const Tab = ({title, onPress, isInactive, tabId}) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: paddingHorizontal * 2 + width,
  };

  return (
    <Pressable
      style={[styles.tab, tabWidth, isInactive && styles.isActiveTab]}
      onPress={() => onPress(tabId)}>
      <Text
        onTextLayout={e => setWidth(e.nativeEvent.lines[0].width)}
        ref={textRef}
        style={[styles.title, isInactive && styles.isActiveTitle]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Tab;
