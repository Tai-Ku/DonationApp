const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIntroText: {
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '400',
    color: '#636776',
  },
  username: {
    marginTop: 5,
  },
  profileImage: {
    height: 50,
    width: 50,
  },
  searchBox: {
    marginHorizontal: 24,
    marginTop: 20,
  },
  highlightImageContainer: {
    marginHorizontal: 24,
    marginVertical: 20,
  },
  highlightImage: {
    width: '100%',
    height: 160,
  },
  categoriesHeader: {
    marginHorizontal: 24,
    marginBottom: 16,
  },
  categories: {
    marginLeft: 24,
  },
  categoriesItem: {
    marginRight: 10,
  },
});

export default styles;
