// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDocs } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6qLAwW61ZHSV_gfC28xmcgOg2dPgtrzA",
    authDomain: "leaderboard-82427.firebaseapp.com",
    projectId: "leaderboard-82427",
    storageBucket: "leaderboard-82427.appspot.com",
    messagingSenderId: "1030189481745",
    appId: "1:1030189481745:web:296cd943c1c2c4413f56b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// storing the database to a variable then exporting it
const db = getFirestore()

export default db