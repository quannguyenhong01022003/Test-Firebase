import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Register from '../Screens/Register';


const AppNavigation = () => {

  const Stack = createNativeStackNavigator();
  const Users = () => {
    return (
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    );
  };


  
  return (
    <>
        <Users/>
    </>
  );
};

export default AppNavigation;



