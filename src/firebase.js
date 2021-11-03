import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmabHiWEqdkCIq__Z26Cdu7kQ8LqKuWUA",
    authDomain: "clone-2b22a.firebaseapp.com",
    projectId: "clone-2b22a",
    storageBucket: "clone-2b22a.appspot.com",
    messagingSenderId: "391965929559",
    appId: "1:391965929559:web:6918226376c0e1b26af312",
    measurementId: "G-ZRV2TKSMJ7"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }