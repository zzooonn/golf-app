import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

export default function HomeScreen() {

  const [number, setNumber] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>안녕!</Text>
      <View style={{ marginTop: 20 }}>
        <Button title='증가' onPress={() => setNumber(number + 1)} />
      </View>
    </View>
  );
}
