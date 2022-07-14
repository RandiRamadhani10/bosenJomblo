import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import SwiperComponent from '../components/SwiperComponent';
import Header from '../components/Header';
import ListUser from '../components/ListUser';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Home = ({navigation}) => {
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('theme');
      setLight(JSON.parse(jsonValue).theme);
    } catch (e) {
      // error reading value
    }
  };
  getData();

  const [light, setLight] = useState([]);
  const screen = Dimensions.get('screen');
  const [show, setShow] = useState(true);
  const loading = bool => {
    setShow(bool);
  };
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1500);
  }, [setShow]);
  const title = 'Bosen Jomblo';
  const Activity = () => {
    const screen = Dimensions.get('screen');
    return (
      <View
        style={{
          position: 'absolute',
          zIndex: 99,
          width: screen.width,
          height: screen.height,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: light ? '#0d0c0f90' : '#ffffff40',
        }}>
        <ActivityIndicator size={50} color="#fe3e61" />
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: light ? 'white' : '#0d0c0f'}}>
      <Header navigation={navigation} title={title} />
      {show ? <Activity /> : <></>}
      <ScrollView>
        <View
          style={{
            marginTop: 30,
            width: '100%',
            height: screen.width * 0.9,
            padding: 10,
          }}>
          <SwiperComponent />
        </View>
        <View>
          <ListUser loading={loading} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
