import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateFirstName} from '../../redux/reducers/User';

import globalStyles from '../../assets/styles/globalstyles';
import styles from './styles';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import {updateCategories} from '../../redux/reducers/Categories';

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
        <View style={styles.categoriesHeader}>
          <Header title={'Selected Category'} type={2} />
        </View>
        <View style={styles.categories}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories.categories}
            renderItem={({item}) => (
              <View style={styles.categoriesItem} key={item.categoryId}>
                <Tab
                  onPress={value => dispatch(updateCategories(value))}
                  title={item.name}
                  tabId={item.categoryId}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
