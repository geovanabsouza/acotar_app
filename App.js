
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login/Login';
import Home from './screens/home/Home';
import Cortes from './screens/cortes/Cortes';
import Personagens from './screens/personagens/Personagens';
import Livros from './screens/livros/Livros';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#392844',
          },
          headerTintColor: '#E8D5B7',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Prythian' }}
        />

        <Stack.Screen
          name="Cortes"
          component={Cortes}
          options={{ title: 'As sete cortes' }}
        />

        <Stack.Screen
          name="Personagens"
          component={Personagens}
          options={{ title: 'Personagens' }}
        />

        <Stack.Screen
          name="Livros"
          component={Livros}
          options={{ title: 'Biblioteca' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
