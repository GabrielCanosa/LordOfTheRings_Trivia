import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: -50 }}>
        <Text style={styles.textTitle}>Hola!</Text>
        <Text style={styles.text}>Mi nombre es Gabriel, soy programador .NET con varios años de experiencia.</Text>
        <Text style={styles.text}>Durante estos años he tocado C#, .NET, HTML, CSS, Javascript, JQuery, Angular</Text>
        <Text style={styles.text}>Y en mi tiemppo libre sigo aprendiendo React, React Native, Desarrollo de videojuegos con Unity... un poco de todo.</Text>
        <Text style={styles.textTitle}>¡Contáctame!</Text>
        <View style={styles.inlineImages}>
          <TouchableOpacity onPress={ () => {
            Linking.openURL('https://github.com/GabrielCanosa').catch(err => console.error("Couldn't load page", err));
          }}>
            <Image key='github' source={require('./Data/images/github.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => {
            Linking.openURL('https://github.com/GabrielCanosa').catch(err => console.error("Couldn't load page", err));
          }}>
            <Image key='twitter' source={require('./Data/images/twitter.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => {
            Linking.openURL('https://github.com/GabrielCanosa').catch(err => console.error("Couldn't load page", err));
          }}>
            <Image key='instagram' source={require('./Data/images/instagram.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => {
            Linking.openURL('https://github.com/GabrielCanosa').catch(err => console.error("Couldn't load page", err));
          }}>
            <Image key='youtube' source={require('./Data/images/youtube.png')} style={styles.image} />
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textTitle : { color: 'black', fontStyle: 'italic', fontWeight: 'bold', fontSize: 25, marginVertical: 10},
  text : { color: 'black', marginHorizontal: 20, marginVertical: 10, fontSize: 15},
  image: { borderRadius: 50, width: 70, height: 70 },
  inlineImages: { flexDirection: 'row' }
});

export default AboutScreen;