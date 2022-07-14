import React, {useEffect} from 'react';
import {
  View,
  StatusBar,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Data from '../data/data';
const Splash = ({navigation}) => {
  const storeData = async value => {
    try {
      const values = {theme: value};
      const jsonValue = JSON.stringify(values);
      await AsyncStorage.setItem('theme', jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('theme');
      return jsonValue != null ? JSON.parse(jsonValue) : storeData(true);
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getData();
    setTimeout(() => {
      navigation.replace('Main');
    }, 2000);
  }, [navigation]);
  const screen = Dimensions.get('screen');
  const styles = StyleSheet.create({
    Heading: {
      fontSize: 24,
      color: 'white',
      fontWeight: 'bold',
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerParent: {
      flex: 1,
      backgroundColor: '#fe3e61',
      height: screen.height,
      justifyContent: 'center',
      alignItems: 'center',
    },

    image: {
      width: 200,
      height: 200,
    },
  });
  return (
    <>
      <StatusBar backgroundColor="#fe3e61"></StatusBar>
      <View style={[styles.containerParent]}>
        <View style={[styles.container]}>
          <Image
            source={require('../assets/BosenJombloWhite.png')}
            style={[styles.image]}
          />
          <Text style={styles.Heading}>Bosen Jomblo</Text>
        </View>
      </View>
    </>
  );
};

export default Splash;
