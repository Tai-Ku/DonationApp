const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    height: 55,
    justifyContent: 'center',
    borderRadius: 50,
  },
  isActiveTab: {
    backgroundColor: '#f3f5f9',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17,
    color: '#ffffff',
    textAlign: 'center',
  },
  isActiveTitle: {
    color: '#79869f',
  },
});

export default styles;
