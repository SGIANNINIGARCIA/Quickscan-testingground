import 'react-native-gesture-handler';
import React from './node_modules/react';
import { NavigationContainer } from './node_modules/@react-navigation/native';
import { createBottomTabNavigator } from './node_modules/@react-navigation/bottom-tabs';

import MainPage from './Home'
import MyList from './MyListPage';
import ScanPage from './Scan';
import Profile from './Profile';

const MainTab = createBottomTabNavigator();

function MainTabs (){
      
        return (
            <NavigationContainer independent={true}>
            <MainTab.Navigator>
            <MainTab.Screen
              name="Home"
              component={MainPage}
            />
            <MainTab.Screen
              name="My list"
              component={MyList}
            />
            <MainTab.Screen
              name="Profile"
              component={Profile}
            />
            <MainTab.Screen
              name="Scan"
              component={ScanPage}
            />
            </MainTab.Navigator>
            </NavigationContainer>
      );
      }
    

export default MainTabs