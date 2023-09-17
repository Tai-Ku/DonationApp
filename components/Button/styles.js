const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    height: 55,
    justifyContent: 'center',
    borderRadius: 50,
  },
  disabled: {
    opacity: 0.5,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default styles;
