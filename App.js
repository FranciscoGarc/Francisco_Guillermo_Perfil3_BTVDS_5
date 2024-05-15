import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Cards from './src/screens/Cards';
import Comidas from './src/screens/Comidas';
import CardView from './src/screens/CardVIew';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Cards" component={Cards} />
        <Tab.Screen name="Comidas" component={Comidas} />
        <Tab.Screen name="CardView" component={CardView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;