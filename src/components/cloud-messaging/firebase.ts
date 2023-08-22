import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCOZxVz-o1ahwPXa9F7e42Fa6g6YmiELTE",
    authDomain: "whatnowmap-395517.firebaseapp.com",
    projectId: "whatnowmap-395517",
    storageBucket: "whatnowmap-395517.appspot.com",
    messagingSenderId: "713441542276",
    appId: "1:713441542276:web:ea77f889191346190382d1",
    measurementId: "G-VYDYZKDQCB"
}

const app = initializeApp(firebaseConfig);

export { app };