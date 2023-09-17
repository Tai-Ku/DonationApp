import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import globalStyles from '../../assets/styles/globalstyles';
import Header from '../../components/Header/Header';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <Header title={'Azzahri A.'} type={1} />
    </SafeAreaView>
  );
};

export default Home;
