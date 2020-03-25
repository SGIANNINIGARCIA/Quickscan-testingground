import 'react-native-gesture-handler';
import React from './node_modules/react';
import { NavigationContainer } from './node_modules/@react-navigation/native';
import { createBottomTabNavigator } from './node_modules/@react-navigation/bottom-tabs';


import Signin from './Signin'
import Signup from './Signup'


const SignInTab = createBottomTabNavigator();

function SignInTabs() {

        return (
          <NavigationContainer independent={true}>
            <SignInTab.Navigator>
            <SignInTab.Screen
              name="Sign In"
              component={Signin}
            />
            <SignInTab.Screen
            name="Sign Up"
            component={Signup}
            />
            </SignInTab.Navigator>
             </NavigationContainer>
      );
      }

export default SignInTabs