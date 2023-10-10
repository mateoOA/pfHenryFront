
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmwr9oOo54cLFkc-j62B2i5T6XPi0E_ZM",
  authDomain: "pfhenry41bg7.firebaseapp.com",
  projectId: "pfhenry41bg7",
  storageBucket: "pfhenry41bg7.appspot.com",
  messagingSenderId: "973018817957",
  appId: "1:973018817957:web:e07c510a384ea0e7a6344c"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);  

export async function uploadFile(file) {
  const storageRef = ref(storage, v4());
  return await uploadBytes(storageRef, file)
} 