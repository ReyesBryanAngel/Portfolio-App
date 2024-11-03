import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD5EWQpmIf-yz5sYTsYyfAO77fUJUBXG0w",
    authDomain: "portfolio-app-abcb1.firebaseapp.com",
    projectId: "portfolio-app-abcb1",
    storageBucket: "portfolio-app-abcb1.appspot.com",
    messagingSenderId: "811230683074",
    appId: "1:811230683074:web:41dca43325eae3f879805b"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { app, db };

                                     

