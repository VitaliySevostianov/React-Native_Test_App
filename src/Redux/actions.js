export const FILL_GALLERY = 'FILL_GALLERY'
export const LOAD_PHOTOS = 'LOAD_PHOTOS'

export const fillGallery = (photosData) => {
    return {
        type: FILL_GALLERY,
        payload: photosData
    }
}

export const loadPhotos = () => {
    return{
        type: LOAD_PHOTOS,
    }
}