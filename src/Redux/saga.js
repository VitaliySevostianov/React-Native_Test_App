import { takeEvery, put, call } from 'redux-saga/effects'
import { LOAD_PHOTOS, fillGallery } from './actions'

function fetchPhotos() {
    const url = 'https://api.unsplash.com/photos'
    const client_id = '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043'

    return fetch(`${url}/?client_id=${client_id}`)
        .then(response => response.json())
}

function* workerLoadPhotos() {
    const data = yield call(fetchPhotos)
    const headers = ['id', 'user', 'urls', 'description']
    const photos = data.map((photos) => {
        const newPhotos = {}

        for(const key in photos){
            if(headers){
                newPhotos[key] = photos[key]
            }
        }
        return newPhotos
    })
    yield put(fillGallery(photos))
}

export default function* watchLoadPhotos() {
    yield takeEvery(LOAD_PHOTOS, workerLoadPhotos)
}