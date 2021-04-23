import React from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './styles';
import listCodes from './sh/codes';

const WRONG = 'WRONG';
const RIGHT = 'RIGHT';

const WRONG_COLOR = '#f5222d';
const RIGHT_COLOR = '#52c41a';

const checkCode = code => {
  if (code.length !== 5) {
    return false;
  }
  const num = parseInt(code, 10);
  if (num) {
    return listCodes.includes(num);
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
        <Text
          style={[
            styles.resultTxt,
            {color: result === WRONG ? WRONG_COLOR : RIGHT_COLOR},
          ]}>
          {result}!
        </Text>
      </View>
    </View>
  );
};

export default App;
