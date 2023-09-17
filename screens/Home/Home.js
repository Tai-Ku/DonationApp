import React, {useEffect, useState} from 'react';
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

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  console.log(categoryList.length);
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
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) {
                return;
              }
              console.log(
                'User has reached the end and we are getting more data for page number ',
                categoryPage,
              );
              setIsLoadingCategories(true);
              let newData = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize,
              );
              if (newData.length > 0) {
                setCategoryList(prevState => [...prevState, ...newData]);
                setCategoryPage(prevState => prevState + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
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
