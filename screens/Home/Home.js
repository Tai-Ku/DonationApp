import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import globalStyles from '../../assets/styles/globalstyles';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const Home = () => {
  const onPress = () => console.log('onPress');
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <Header title={'Azzahri A.'} type={1} />
      <Button title={'Donate'} onPress={onPress} />
      <Button title={'Donate'} isDisable={true} onPress={onPress} />
    </SafeAreaView>
  );
};

export default Home;
