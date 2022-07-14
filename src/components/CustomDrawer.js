import React, {useState, useEffect} from 'react';
import {View, Image, Dimensions, Text} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Styles from '../style/Styles';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Customdrawer = props => {
  const storeData = async value => {
    try {
      const values = {theme: value};
      const jsonValue = JSON.stringify(values);

      await AsyncStorage.setItem('theme', jsonValue);
      navigation.replace('Splash');
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('theme');
      console.log(JSON.parse(jsonValue).theme);
      setToogle(JSON.parse(jsonValue).theme);
    } catch (e) {
      // error reading value
    }
  };
  getData();
  const navigation = props.stateM;
  const [toogle, setToogle] = useState([]);
  const screen = Dimensions.get('screen');

  return (
    <View style={{flex: 1, backgroundColor: toogle ? 'white' : '#0d0c0f'}}>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 30,
        }}>
        <Image
          style={{width: screen.width * 0.1, height: screen.width * 0.1}}
          source={require('../assets/BosenJomblo.png')}
        />
        <Text style={{color: '#fe3e61', marginLeft: 10}}>Bosen Jomblo</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '50%',
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Icon
            size={30}
            name={toogle ? 'sunny-sharp' : 'moon'}
            color={toogle ? '#ffc935' : '#ff9c35'}
          />
          <ToggleSwitch
            isOn={toogle}
            onColor="#ff9c35"
            offColor="gray"
            size="medium"
            onToggle={isOn => {
              storeData(isOn);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Customdrawer;
