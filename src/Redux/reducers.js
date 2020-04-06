import { FILL_GALLERY } from './actions'

const initialState = {
    photos:  {},
    loaded: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FILL_GALLERY: return {
            ...state,
            photos: action.payload,
            loaded: true
        }
        default: return state
    }
}

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import watchLoadPhotos from './saga'
import {loadPhotos} from './actions'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watchLoadPhotos)
store.dispatch(loadPhotos())
