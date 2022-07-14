import React, {useState, useEffect} from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import TargetCouple from './screens/TargetCouple';
import CustomDrawer from './components/CustomDrawer';
import Profile from './screens/Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Drawer = createDrawerNavigator();
const Main = ({navigation}) => {
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('theme');
      return JSON.parse(jsonValue).theme;
    } catch (e) {
      // error reading value
    }
  };
  const [light, setLight] = useState(getData());
  console.log(getData());
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <CustomDrawer
          {...props}
          stateM={navigation}
          screenOptions={{headerShown: false}}
        />
      )}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: '#fe3e61',
        drawerInactiveTintColor: light ? 'gray' : 'white',
      }}
      initialRouteName="Home">
      <Drawer.Screen
        params={{data: 'haloo'}}
        name="Home"
        component={Home}
        options={{
          title: 'Daftar Calon Pasangan',
        }}
      />
      <Drawer.Screen
        name="TargetCouple"
        component={TargetCouple}
        options={{
          title: 'Target Pasangan',
        }}
      />
      <Drawer.Screen
        params={'haloo'}
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
        }}
      />
    </Drawer.Navigator>
  );
};

export default Main;
