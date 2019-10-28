import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, AsyncStorage, Image, StyleSheet } from 'react-native';

import logo from '../assets/logo.png';

export default function List() {
  const [techs, setTechs] = useState('');
useEffect(() => {
  AsyncStorage.getItem('techs').then(storageTechs => {
    const techsArray = storageTechs.split(',').map(tech => tech.trim());

    setTechs(techsArray);
  })
}, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo}></Image>
      <Text>{techs}</Text>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    height: 37,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10
  }
})