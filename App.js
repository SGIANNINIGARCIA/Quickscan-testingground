import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


import Amplify from '@aws-amplify/core'
import config from './aws-exports'
Amplify.configure(config)

import SignInTabs from "./Tabs"
import AuthenticationContextProvider from "./contexts/authentication"
import {AuthenticationContext} from "./contexts/authentication"

export default function App () {

 // const {isUserAuthenticated} = useContext(AuthenticationContext)

  state = {
    isAuthenticated: false,
  };
  authenticate = isAuthenticated => {
    this.setState({ isAuthenticated });
  };

    return (
      <AuthenticationContextProvider>
      <View style={styles.container}>
        <SignInTabs/>
      </View>
      </AuthenticationContextProvider>
      
    );
  }


const styles = StyleSheet.create({
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#2196F3',
    margin: 10

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
