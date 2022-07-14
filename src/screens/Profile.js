import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
const Profile = ({navigation}) => {
  const [light, setLight] = useState([]);
  const screen = Dimensions.get('screen');
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('theme');
      setLight(JSON.parse(jsonValue).theme);
    } catch (e) {
      // error reading value
    }
  };
  getData();
  const title = 'Profile';
  return (
    <>
      <View style={{flex: 1, backgroundColor: light ? 'white' : '#0d0c0f'}}>
        <Header navigation={navigation} title={title} />
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              padding: 15,
              backgroundColor: light ? '#ebebeb' : '#1b1a1f',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 20,
              borderRadius: 20,
            }}>
            <View
              style={{
                marginTop: 25,
                borderRadius: 300,
                overflow: 'hidden',
                width: 150,
                height: 150,
              }}>
              <Image
                source={require('../assets/user.png')}
                style={{width: 150, height: 150}}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 30,
                  color: light ? 'black' : 'white',
                  margin: 10,
                }}>
                Jonathan Pasaribu
              </Text>
              <Text style={{fontSize: 20, color: light ? 'black' : 'white'}}>
                00000027718
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              width: screen.width * 0.7,
              alignItems: 'center',
              backgroundColor: '#2374e1',
              borderRadius: 30,
              padding: 10,
              margin: 10,
            }}>
            <Text style={{fontSize: 20, color: light ? 'black' : 'white'}}>
              Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: screen.width * 0.7,
              alignItems: 'center',
              backgroundColor: '#ff414f',
              borderRadius: 30,
              padding: 10,
              margin: 10,
            }}>
            <Text style={{fontSize: 20, color: light ? 'black' : 'white'}}>
              Instagram
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Profile;
