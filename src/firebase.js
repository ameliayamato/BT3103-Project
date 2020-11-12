import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAnXyF8563785m4iqpq7Q99FkZis_STfmM",
	authDomain: "bt3103-final-project.firebaseapp.com",
	databaseURL: "https://bt3103-final-project.firebaseio.com",
	projectId: "bt3103-final-project",
	storageBucket: "bt3103-final-project.appspot.com",
	messagingSenderId: "733786006904",
	appId: "1:733786006904:web:ba8333ab01ac159febd48d",
	measurementId: "G-8KHZKMRSEP"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
