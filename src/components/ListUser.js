import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Data from '../data/data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Models from '../data/models';
import DataLocal from '../data/temp';
const bookmark = [];

Data.forEach(data => {
  bookmark.push(data);
});
const ListUser = ({loading}) => {
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('theme');
      setLight(JSON.parse(jsonValue).theme);
    } catch (e) {}
  };
  getData();
  const [light, setLight] = useState([]);
  const updateData = value => {
    const index = bookmark.findIndex(user => user.id === value.id);
    DataLocal.push(value);
    bookmark.splice(index, 1);
    loading(true);
    return setTimeout(() => {
      loading(false);
    }, 1500);
  };
  const styles = StyleSheet.create({
    container1: {
      width: '100%',
      padding: 16,
    },
    container2: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    image: {
      width: 100,
      height: 100,
    },
  });
  return (
    <>
      {bookmark.map(data => {
        return (
          <View style={[styles.container1]}>
            <View
              style={[
                styles.container1,
                {
                  elevation: 3,
                  borderRadius: 8,
                  backgroundColor: light ? 'white' : '#1b1a1f',
                  borderColor: 'gray',
                },
              ]}>
              <View style={[styles.container2]}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                    overflow: 'hidden',
                    marginRight: 30,
                  }}>
                  <Image
                    source={{uri: `${data.image}`}}
                    style={[styles.image]}
                  />
                </View>
                <View style={{width: '50%'}}>
                  <Text
                    style={{fontSize: 20, color: light ? 'black' : 'white'}}>
                    {data.first_name}
                  </Text>
                  <Text style={{fontSize: 20, color: 'gray'}}>
                    {data.gender}
                  </Text>
                  <Text style={{fontSize: 18, color: '#fe3e61'}}>
                    {data.likes} likes
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      updateData(data);
                    }}>
                    <Icon name="heart" size={30} color="gray" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </>
  );
};
export default ListUser;
