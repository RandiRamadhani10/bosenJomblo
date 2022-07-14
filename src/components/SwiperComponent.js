import React from 'react';
import Swiper from 'react-native-swiper';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Data from '../data/data';
import Icon from 'react-native-vector-icons/dist/Ionicons';
const SwiperComponent = () => {
  const screen = Dimensions.get('screen');
  const datas = [];
  Data.map(data => {
    if (data.likes >= 70) {
      datas.push(data);
    }
  });

  return (
    <Swiper showsButtons={true}>
      {datas.map(data => {
        return (
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{borderRadius: 30, overflow: 'hidden'}}>
              <ImageBackground
                source={{uri: `${data.image}`}}
                style={{
                  height: screen.width * 0.86,
                  width: screen.width * 0.8,
                  borderRadius: 30,
                  position: 'relative',
                }}>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'black',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}
                  opacity={0.6}></View>
                <View
                  style={{
                    padding: 10,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                    }}>
                    {data.first_name}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon name="heart" size={20} color="#fe3e61" />
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 15,
                        alignSelf: 'center',
                        marginHorizontal: 5,
                      }}>
                      {data.likes}
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
        );
      })}
    </Swiper>
  );
};

export default SwiperComponent;
