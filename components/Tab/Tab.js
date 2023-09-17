import React, {useRef, useState} from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

const Tab = ({title, onPress, isActive = false}) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: paddingHorizontal * 2 + width,
  };
  console.log(tabWidth);

  return (
    <Pressable
      disabled={isActive}
      style={[styles.tab, isActive && styles.isActiveTab, tabWidth]}
      onPress={() => onPress()}>
      <Text
        onTextLayout={e => setWidth(e.nativeEvent.lines[0].width)}
        ref={textRef}
        style={[styles.title, isActive && styles.isActiveTitle]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Tab;
