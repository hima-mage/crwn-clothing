import ShopActionTypes from './shop.types'
import {
    firestore,
    convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils"


export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection("collections");
        dispatch(fetchCollectionsStart()) // to switch isFetching to true

        // this to target the collectionRef on first time or updating - when this code rendering
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap)); // dispatch the success message
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}