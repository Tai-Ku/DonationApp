import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import globalStyles from '../../assets/styles/globalstyles';
import Header from '../../components/Header/Header';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
const Home = () => {
  const onPress = () => console.log('onPress');
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <Header title={'Azzahri A.'} type={1} />
      <View style={{width: 130}}>
        <Tab title={'asdasdasd'} />
        <Badge title="asadasd" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
