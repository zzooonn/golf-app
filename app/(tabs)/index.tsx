import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import React, { useState } from 'react';
import { Alert } from 'react-native';

export default function HomeScreen() {

  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>안녕!</Text>
      
      <Text style={styles.counterText}>{number}</Text>

      <TouchableOpacity style={styles.button} onPress={() => setNumber(number + 1)}>
        <Text style={styles.buttonText}>증가</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {
        if(number > 0){
          setNumber(number - 1);
        }
        else{
          Alert.alert(
          '경고',         // <-- 여기! 제목
          '0 이하로는 내려갈 수 없습니다.', // 메시지
          [{ text: 'OK' }]
        );
        }
      }}>
        <Text style={styles.buttonText}>감소</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // 흰색 배경
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 20,
    color: '#222222',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333333',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#007aff', // 아이폰 파란색
    backgroundColor: Platform.OS === 'ios' ? '#ffffff' : '#007aff',
  },
  buttonText: {
    fontSize: 18,
    color: Platform.OS === 'ios' ? '#007aff' : '#ffffff',
    fontWeight: '500',
  },
});



