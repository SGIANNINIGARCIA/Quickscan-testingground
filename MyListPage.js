import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import NumericInput from 'react-native-numeric-input'


import Amplify from '@aws-amplify/core'
import config from './aws-exports'
Amplify.configure(config)

export default function MyList() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('http://18.189.32.71:3000/items/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  });

  return (
    <View style={styles.screen}>
      <View>
          <SearchBar
            placeholder="Type Here..."
          />
        </View>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ _id }, index) => _id}
          renderItem={({ item }) => (
            <View style={styles.itemList} >
              <Text>Item: {item.NAME}</Text>
              <Text>Manufacturer: {item.MANUFACTURER}</Text>
              <View style={styles.addButtonContainer}>
                <NumericInput onChange={value => console.log(value)} />
                <Button title='add'/>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};




const styles = StyleSheet.create({
  screen: {
    padding: 40
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    width: '80%'
  },
  itemList: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
    flexDirection: 'column'
  },
  addButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center'
  }
});
