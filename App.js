import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Forma from './src/pages/Expe';
import Expe from './src/pages/Info';
import Pessoal from './src/pages/Pessoal';


const Tab = createMaterialTopTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Pessoal' component={Pessoal} />
        <Tab.Screen name='Formação' component={Forma} />
        <Tab.Screen name='Experiencia' component={Expe} />
        
      </Tab.Navigator>
    </NavigationContainer>
  )
}

