import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import globalStyles from '../../assets/styles/globalstyles';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <View style={globalStyles.marginBottom24}>
          <Header title={'Welcome Back'} />
        </View>

        <View style={globalStyles.marginBottom24}>
          <Input
            keyboardType={'email-address'}
            label={'Email'}
            placeholder={'Enter your email...'}
            onChangeText={val => setEmail(val)}
          />
        </View>

        <View style={globalStyles.marginBottom24}>
          <Input
            keyboardType={'email-address'}
            label={'Password'}
            placeholder={'********'}
            secureTextEntry={true}
            onChangeText={val => setPassword(val)}
          />
        </View>

        <View style={globalStyles.marginBottom24}>
          <Button onPress={() => console.log('login')} title={'Login'} />
        </View>

        <Pressable style={styles.registrationButton}>
          <Header color="#156CF7" type={3} title={'Don’t have an account?'} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
