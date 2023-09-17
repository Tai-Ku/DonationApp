const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    marginLeft: 6,
    height: '100%',
    fontFamily: 'Inter',
    lineHeight: 14,
    fontSize: 14,
    color: '#686C7A',
  },
  searchInputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    backgroundColor: '#f3f5f9',
    alignItems: 'center',
    borderRadius: 15,
    height: 50,
  },
});

export default styles;
