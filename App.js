import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import QuestionScreen from './screens/QuestionScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#154FBB',
        },
        headerTintColor: '#fff',
        headerTitleStyle :{
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="¡Hola!" component={HomeScreen}/>
      <Stack.Screen name="Sobre mí" component={AboutScreen} />
      <Stack.Screen name="Preguntas" component={QuestionScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  )
}