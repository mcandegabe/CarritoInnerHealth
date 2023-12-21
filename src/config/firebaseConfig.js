import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCX1kWDfQJW4q731ZtNKU_ZiK6tBYDSrZU",
  authDomain: "coder-reactjs-e0b2e.firebaseapp.com",
  projectId: "coder-reactjs-e0b2e",
  storageBucket: "coder-reactjs-e0b2e.appspot.com",
  messagingSenderId: "107675136191",
  appId: "1:107675136191:web:0d1d8d6e0d24e34be9160a"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtiene la instancia de Firestore
const db = getFirestore(app);

// Exporta la configuración y la instancia de Firestore
export { firebaseConfig, db };