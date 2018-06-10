import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyDOoegsZ_k6aH0pAJ18rLI-J1UL14gK0Oc",
    authDomain: "vale-c962b.firebaseapp.com",
    databaseURL: "https://vale-c962b.firebaseio.com",
    projectId: "vale-c962b",
    storageBucket: "vale-c962b.appspot.com",
    messagingSenderId: "271683500841"
};
const fire = firebase.initializeApp(config)
export { fire };