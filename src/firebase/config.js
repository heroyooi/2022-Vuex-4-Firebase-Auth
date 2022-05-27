import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDEEvIjw17OOYmlEhloqlOCuxRJ_W5nYGg",
  authDomain: "vuex-4-fb-auth-280e9.firebaseapp.com",
  projectId: "vuex-4-fb-auth-280e9",
  storageBucket: "vuex-4-fb-auth-280e9.appspot.com",
  messagingSenderId: "961055116431",
  appId: "1:961055116431:web:ce140e2abc9bf09c63b4fa"
};

// init firebase
initializeApp(firebaseConfig)

// init firebase auth
const auth = getAuth()

export { auth }