import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Header,Card, ListItem, Button, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const showAlert = () =>
  Alert.alert(
    "Somos el equipo:",
    "🔥🔥🔥Fueguito🔥🔥🔥",
    [
      {
        text: "Cerrar",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
    }
  );
  return (
     <SafeAreaProvider>
       <Header
  centerComponent={{ text: 'React Native App', style: { color: '#fff' } }}
/>

<Card>
  <Card.Title>Integrantes</Card.Title>
  <Card.Divider/>
    <Text style={{marginBottom: 10}}>
      Karla Araya
    </Text>
    <Text style={{marginBottom: 10}}>
      José Pablo Fernández
    </Text>
    <Text style={{marginBottom: 10}}>
      Alonso García
    </Text>
    <Text style={{marginBottom: 10}}>
      María Paula Ramírez
    </Text>
    <Button
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='Ver Equipo' onPress={showAlert} />
</Card>
     </SafeAreaProvider>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
