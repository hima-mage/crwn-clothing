// firebase app will give me the access to firestore - auth when i import them 
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()


//  here i provid the auth with google accout
const provider = new firebase.auth.GoogleAuthProvider();
// this will popup modal with choose sign in account 
provider.setCustomParameters({prompt: 'select_account'})
// this let the popup be the auth method
export const signInWithGoogle = () => auth.signInWithPopup()


export default firebase
