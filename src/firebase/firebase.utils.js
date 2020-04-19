// firebase app will give me the access to firestore - auth when i import them 
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAerRSfPsN0R4WRUVwIP7AIiY-BF3LCDCY",
    authDomain: "crwn-9b69a.firebaseapp.com",
    databaseURL: "https://crwn-9b69a.firebaseio.com",
    projectId: "crwn-9b69a",
    storageBucket: "crwn-9b69a.appspot.com",
    messagingSenderId: "264805762991",
    appId: "1:264805762991:web:bc63fb889c88c5d36f115a",
    measurementId: "G-WDNCJBLC85"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = async(collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch()
    objectToAdd.forEach(obj => {
            // get me new doc with new id
            const newDocRef = collectionRef.doc()
                // create the batch request 
            batch.set(newDocRef, obj)
        })
        // commit that batch - when success void (null val) promise
    return await batch.commit()
}

export const convertCollectionSnapshotToMap = (collections) => {
        const transformedCollection = collections.docs.map(
            doc => {
                const { title, items } = doc.data()

                return {
                    routeName: encodeURI(title.toLowerCase()),
                    id: doc.id,
                    title,
                    items
                }
            }
        )

        console.log(transformedCollection)
        console.log(1)
    }
    //  here i provid the auth with google accout
const provider = new firebase.auth.GoogleAuthProvider();
// this will popup modal with choose sign in account 
provider.setCustomParameters({ prompt: 'select_account' })
    // this let the popup be the auth method
export const signInWithGoogle = () => auth.signInWithPopup()


export default firebase