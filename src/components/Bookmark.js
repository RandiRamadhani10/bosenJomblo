import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Data from '../data/data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Models from '../data/models';
import DataLocal from '../data/temp';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
const Bookmark = ({loading, navigation}) => {
  const [light, setLight] = useState([]);
  const refRBSheet = useRef();
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('theme');
      setLight(JSON.parse(jsonValue).theme);
    } catch (e) {}
  };
  getData();
  const [dataUser, setDataUser] = useState(DataLocal);
  const deleteData = value => {
    const index = DataLocal.findIndex(user => user.id === value.id);
    DataLocal.splice(index, 1);
    loading(true);
    return setTimeout(() => {
      loading(false);
      navigation.replace('Main');
    }, 1500);
  };
  console.log(dataUser);
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
      {dataUser.length >= 1 ? (
        dataUser.map(data => {
          return (
            <>
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
                        style={{
                          fontSize: 20,
                          color: light ? 'black' : 'white',
                        }}>
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
                        onPress={() => refRBSheet.current.open()}>
                        <Icon name="trash" size={30} color="gray" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                  wrapper: {
                    backgroundColor: 'transparent',
                  },
                  draggableIcon: {
                    backgroundColor: '#000',
                  },
                }}>
                <View style={{width: '100%'}}>
                  <TouchableOpacity
                    style={{
                      padding: 15,
                      backgroundColor: '#ff2e2e',
                      margin: 20,
                      borderRadius: 50,
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      deleteData(data);
                    }}>
                    <Text style={{fontSize: 15, color: 'white'}}>
                      Yakin ingin menghapus target mu ?{' '}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      padding: 15,
                      backgroundColor: '#2eff31',
                      margin: 20,
                      borderRadius: 50,
                      alignItems: 'center',
                    }}
                    onPress={() => refRBSheet.current.close()}>
                    <Text style={{fontSize: 15, color: 'white'}}>Kembali </Text>
                  </TouchableOpacity>
                </View>
              </RBSheet>
            </>
          );
        })
      ) : (
        <View
          style={{
            width: '100%',
            height: 400,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, color: 'gray'}}>
            Tidak ada gebetan <Icon name="heart-broken" size={20} color="red" />
          </Text>
          <Text style={{fontSize: 15, color: 'gray'}}>
            scrolldown untuk refresh
          </Text>
        </View>
      )}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
        }}></View>
    </>
  );
};
export default Bookmark;
