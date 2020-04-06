import React from 'react'
import {
    View,
    Text,

  } from 'react-native';
  import { styles } from './styles'
  export const Loading = () => {
    return (
        <View style = {styles.main}>
            <Text>Загрузка</Text>
        </View>
    )
  }