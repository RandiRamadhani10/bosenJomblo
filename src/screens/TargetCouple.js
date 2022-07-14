import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import Bookmark from '../components/Bookmark';
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Targetcouple = ({navigation}) => {
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('theme');
      setLight(JSON.parse(jsonValue).theme);
    } catch (e) {
      // error reading value
    }
  };
  getData();
  const title = 'Target Gebetan';
  const [light, setLight] = useState([]);
  const screen = Dimensions.get('screen');
  const [show, setShow] = useState(false);
  const Activity = () => {
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
  const loading = bool => {
    setShow(bool);
  };
  return (
    <>
      <SafeAreaView
        style={{flex: 1, backgroundColor: light ? 'white' : '#0d0c0f'}}>
        <Header navigation={navigation} title={title} />
        {show ? <Activity /> : <></>}
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <View>
            <Bookmark loading={loading} navigation={navigation} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Targetcouple;
