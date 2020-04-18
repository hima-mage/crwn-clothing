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

//  here i provid the auth with google accout
const provider = new firebase.auth.GoogleAuthProvider();
// this will popup modal with choose sign in account 
provider.setCustomParameters({ prompt: 'select_account' })
    // this let the popup be the auth method
export const signInWithGoogle = () => auth.signInWithPopup()


export default firebase