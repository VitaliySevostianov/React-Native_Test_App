import React from 'react'
import {
    ScrollView,
    Text,
    Image
} from 'react-native'

import { styles } from './styles'

const Photo = ({route}) => {  
    const { uri } = route.params;
    const { username } = route.params;
    console.log(uri)
    console.log(username)

    return(
        <ScrollView>
            <Text style = {styles.view_name}>{username}</Text>
            <Image style = {styles.full_image} source={{ uri}}></Image>
        </ScrollView>
    )

}

export default Photo