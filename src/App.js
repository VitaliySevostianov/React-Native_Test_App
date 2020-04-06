import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GalleryPage from './Pages/GalleryPage'
import PhotoPage from './Pages/PhotoPage'

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gallery">
        <Stack.Screen name="Gallery" component={GalleryPage}/>
        <Stack.Screen name="View" component={PhotoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
