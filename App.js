import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa la biblioteca de iconos

import Cards from './src/screens/Cards';
import Comidas from './src/screens/Comidas';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Cards') {
              iconName = 'home-outline'; 
            } else if (route.name === 'Comidas') {
              iconName = 'restaurant-outline'; 
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Cards" component={Cards} />
        <Tab.Screen name="Comidas" component={Comidas} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
