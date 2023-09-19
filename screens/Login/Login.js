import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import globalStyles from '../../assets/styles/globalstyles';
import Input from '../../components/Input/Input';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <Input
          keyboardType={'email-address'}
          label={'Email'}
          placeholder={'Enter your email...'}
          onChangeText={val => setEmail(val)}
        />
        <Input
          keyboardType={'email-address'}
          label={'Password'}
          placeholder={'Enter your password...'}
          secureTextEntry={true}
          onChangeText={val => setPassword(val)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
