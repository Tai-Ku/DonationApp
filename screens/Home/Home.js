import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateFirstName} from '../../redux/reducers/User';

import globalStyles from '../../assets/styles/globalstyles';
import styles from './styles';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';

const Home = () => {
  const {firstName, lastName, proFileImage} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerIntroText}>Hello</Text>
            <View style={styles.username}>
              <Header title={firstName + ' ' + lastName[0] + '.👋'} />
            </View>
          </View>
          <Image
            source={{uri: proFileImage}}
            style={styles.profileImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.searchBox}>
          <Search placeholder={'search'} />
        </View>
        <Pressable style={styles.highlightImageContainer}>
          <Image
            style={styles.highlightImage}
            source={require('../../assets/images/highlighted_image.png')}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
