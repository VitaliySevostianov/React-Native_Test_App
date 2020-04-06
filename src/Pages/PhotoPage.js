import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../Redux/reducers'

import Photo from '../Components/Photo'

const PhotoPage = (props) => {
    return(
      <Provider store = {store}>
          <Photo navigation = {props.navigation} route = {props.route}></Photo>
      </Provider>
    )
}

export default PhotoPage;