import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBBWgnf6ctgmGRHxKS-OyqGD1tidR6VVMQ",
    authDomain: "easymeet-da210.firebaseapp.com",
    projectId: "easymeet-da210",
    storageBucket: "easymeet-da210.appspot.com",
    messagingSenderId: "385193399567",
    appId: "1:385193399567:web:274cfdaba6e872e78a9a7a"
};

const app = initializeApp(firebaseConfig);

const database = getFirestore();

export default database