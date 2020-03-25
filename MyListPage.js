import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';


import Amplify from '@aws-amplify/core'
import config from './aws-exports'
Amplify.configure(config)

export default function MyList() {
  //states
  const [enteredItem, setEnteredItem] = useState('');
  const [desiredItems, setDesiredItems] = useState([]);

  const itemInputHandler = (textEntered)=> {
    setEnteredItem(textEntered);
  };

  const addItemHandler = () =>{
    setDesiredItems(currentItems => [...desiredItems, enteredItem]);
  };
   
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}> 
        <TextInput placeholder="ITEM" style={styles.input} onChangeText={itemInputHandler} value={enteredItem}/>
        <Button title="ADD" onPress={addItemHandler}/>
      </View>
      <ScrollView>
        {desiredItems.map((item)=> 
        <View style={styles.itemList} key={item}> 
        <Text> {item}  </Text> 
        </View>
         )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 60
  },
  inputContainer:{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input:{
    borderBottomColor: 'black',
   borderBottomWidth: 1, 
   padding: 10, 
   width: '80%' 
  }, 
  itemList:{
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,   
    marginVertical: 10
  }
});
