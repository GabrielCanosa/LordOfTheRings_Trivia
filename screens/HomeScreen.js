import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {

  const handleClickQuestionsScreen = () => {
    navigation.navigate('Preguntas');
  }

  const handleClickAboutScreen = () => {
    navigation.navigate('Sobre mí');
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
        <Text style={styles.text}>Hey tu! Eres un autenténtico fan del Señor de los Anillos</Text>
        <Text style={styles.text}>Resuelve todas las preguntas y comprueba que tan fan eres, vamos!</Text>
        <TouchableOpacity style={styles.button} onPress={ handleClickQuestionsScreen }>
          <Text style={styles.textButton}>Jugar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={ handleClickAboutScreen }>
          <Text style={styles.textButton}>Sobre mí</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: { backgroundColor: '#621FF7', padding: 20, borderRadius: 50, width: 300, alignItems: 'center', marginTop: 10, marginBottom: 10},
  textButton : { color: 'white', fontStyle: 'italic', fontWeight: 'bold'},
  text : { color: 'black', marginHorizontal: 25, marginVertical: 10, fontSize: 20},
});

export default HomeScreen;