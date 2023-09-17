import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import globalStyles from '../../assets/styles/globalstyles';
import Header from '../../components/Header/Header';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import styles from './styles';
import {useSelector} from 'react-redux';
const Home = () => {
  const {firstName, lastName} = useSelector(state => state.user);
  const onPress = () => console.log('onPress');

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <Header title={firstName + ' ' + lastName} />
    </SafeAreaView>
  );
};

export default Home;
