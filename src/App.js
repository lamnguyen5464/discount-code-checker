import React from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './styles';

const WRONG = 'WRONG';
const RIGHT = 'RIGHT';

const checkCode = code => {
  if (code.length !== 5) {
    return false;
  }
  const num = parseInt(code, 10);
  if (num) {
    return num % 5 === 0;
  }
  return false;
};

const App = () => {
  const [text, setText] = React.useState('');
  const [result, setResult] = React.useState(WRONG);

  React.useEffect(() => {
    setResult(checkCode(text) ? RIGHT : WRONG);
  }, [text]);

  return (
    <View style={styles.container}>
      <View style={[styles.center, styles.shadow]}>
        {/* <Text style={styles.headerTxt}>Discount code checker!</Text> */}
        <TextInput
          style={[styles.shadow, styles.input]}
          onChangeText={setText}
          value={text}
          autoCapitalize={false}
          maxLength={5}
        />
        <Text style={styles.resultTxt}>{result}!</Text>
      </View>
    </View>
  );
};

export default App;
