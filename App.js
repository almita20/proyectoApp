
 import { StatusBar } from 'expo-status-bar';
import Firebase from './src/utis/Firebase';
import "firebase/auth";
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 



import {Formulario} from`./src/componentes/Formulario`


  function App() {
    return(
      <div className="App">
        <h1>Hola Mundo</h1>
       <Person nombre="Pedro" edad="25"/>
       <Person nombre="Alejandro" edad="30"/>
       <Person nombre="Jose" edad="35"/>
      </div>
    )
    }
    function Person(props){
      console.log(props);
      return(
        <div className="Person">
          <h1> nombre:{props.nombre}</h1>
          <p>edad {props.edad}</p>
        </div>
      )
      
      
    }
