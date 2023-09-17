import React from 'react';
import {Text, View, SafeAreaView, Pressable} from 'react-native';
import globalStyles from '../../assets/styles/globalstyles';
import Header from '../../components/Header/Header';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {updateFirstName} from '../../redux/reducers/User';
const Home = () => {
  const {firstName, lastName} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(updateFirstName({firstName: 'Tai'}));
  };

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <Header title={firstName + ' ' + lastName} />
      <Pressable onPress={onPress}>
        <Text>Click</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
