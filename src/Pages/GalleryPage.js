import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../Redux/reducers'

import Gallery from '../Components/Gallery'

const GalleryPage = (props) => {
    return(
      <Provider store = {store}>
          <Gallery navigation = {props.navigation} route = {props.route}></Gallery>
      </Provider>
    )
}

export default GalleryPage;