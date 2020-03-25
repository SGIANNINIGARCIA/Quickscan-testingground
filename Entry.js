import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Amplify from '@aws-amplify/core'
import config from './aws-exports'
Amplify.configure(config)

import SignInTabs from "./Tabs"
import MainTabs from "./HomeTab"
import {AuthenticationContext} from "./contexts/authentication"

export default function Entry(){

  const {isUserAuthenticated} = useContext(AuthenticationContext)

  if(isUserAuthenticated === true){
    return (
      <View style={styles.container}>
        <MainTabs />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <SignInTabs />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});