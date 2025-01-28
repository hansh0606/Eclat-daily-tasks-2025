import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const data = [
  {name:"Hanshvee" , Role:"Mobile Developer"},
  {name:"Heet",Role:"Software Craft Person"}
]

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Best Friends</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.name} - {item.Role}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});

export default App;
