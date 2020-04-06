import React from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';

import { Loading } from './Loading'
import { styles } from './styles'

const mapStateToProps = (state) => {
  return{
    photos: state.photos,
    loaded: state.loaded
  }
}

const Gallery = (props) => {  
  let {photos, loaded, navigation} = props
  console.log(photos)
    if(loaded == true){
      return(
        <View style = {styles.main}>
          <FlatList
            data = {photos}
            renderItem = {({item}) => (
            <TouchableOpacity style = {styles.touch_style} onPress = {() => {return navigation.navigate('View', {
              uri : item.urls.regular,
              username: item.user.username,
            })}}>
              <View style = {styles.card}> 
                  <Text style = {styles.name}>{item.user.username}</Text>
                  <Image style = {styles.small_image} source={{ uri: item.urls.regular}}></Image>
                  <Text style = {styles.description}>{item.description}</Text>
              </View> 
          </TouchableOpacity>
          )}
          >
          </FlatList>
        </View>
      )
    }else{
      return(
        <Loading></Loading>
      )
    }
}

export default connect(mapStateToProps)(Gallery)