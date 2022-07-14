import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
const Header = ({navigation, title}) => {
  const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      backgroundColor: '#fe3e61',
      padding: 16,
      borderBottomEndRadius: 40,
      borderBottomStartRadius: 40,
    },
  });
  return (
    <View style={[styles.header]}>
      <View
        style={{
          width: '30%',
          marginBottom: 25,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Icon name="list" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          overflow: 'hidden',
        }}>
        <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
          {title}
        </Text>
      </View>
      <View
        style={{
          width: '30%',
          alignItems: 'flex-end',
        }}>
        <View
          style={{
            borderRadius: 50,
            overflow: 'hidden',
            width: 30,
            height: 30,
            backgroundColor: 'red',
          }}>
          <Image
            source={require('../assets/user.png')}
            style={{width: 30, height: 30}}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
