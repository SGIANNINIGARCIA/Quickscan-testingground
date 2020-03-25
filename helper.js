import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import AuthenticationContextProvider from "./contexts/authentication"

import App from "./App"

export default function App () {
   
       return (
         <AuthenticationContextProvider>
         <View style={styles.container}>
          <App/>
         </View>
         </AuthenticationContextProvider>
         
       );
     }