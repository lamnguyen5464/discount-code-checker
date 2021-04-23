import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#18191a',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    elevation: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.2,
    backgroundColor: '#ffa940',
    width: width * 0.5,
    height: height * 0.5,
    borderRadius: 5,
  },
  input: {
    backgroundColor: '#fff',
    padding: 8,
    width: 100,
  },
  headerTxt: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  resultTxt: {
    marginTop: 16,
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: '#fff',
  },
});

export default styles;
