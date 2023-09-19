import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './styles';

const Input = ({
  label,
  placeholder,
  onChangeText,
  keyboardType,
  secureTextEntry = false,
}) => {
  const [value, setValue] = useState('');
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder ? placeholder : null}
        style={styles.input}
        keyboardType={keyboardType ? keyboardType : 'default'}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={value => {
          setValue(value);
          onChangeText(value);
        }}
      />
    </View>
  );
};

export default Input;
