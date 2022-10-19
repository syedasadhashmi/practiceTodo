import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBeqNQf9x9ze-PlEs-w9xB68TAsIgVRaLI',
  authDomain: 'todoapp-1ac2f.firebaseapp.com',
  projectId: 'todoapp-1ac2f',
  storageBucket: 'todoapp-1ac2f.appspot.com',
  messagingSenderId: '661254652045',
  appId: '1:661254652045:web:96acba506774885bd522c4',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
