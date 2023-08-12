import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  getDoc,
  collection,
  query,
  where,
  doc,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7bieQ7tSXrniCViDU45ZYeu-WGbFg6r0",
  authDomain: "e-commerce-onlineshop.firebaseapp.com",
  projectId: "e-commerce-onlineshop",
  storageBucket: "e-commerce-onlineshop.appspot.com",
  messagingSenderId: "699725025160",
  appId: "1:699725025160:web:81c95b9aafe748a5e8343d"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

async function getData() {
  const docRef = collection(db, "Items");
  const docSnap = await getDocs(docRef);
  const document = docSnap.docs;
  const docData = document.map((items) => {
    return { ...items.data(), id: items.id };
  });
  return docData;
}

export async function getProductData(id) {
  const docRef = doc(db, "Items", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos ese producto.");
  }
}

export async function getCategoryData(categoryId) {
  const productsRef = collection(db, "Items");

  const q = query(productsRef, where("category", "==", categoryId));
  const docSnapshot = await getDocs(q);

  const docs = docSnapshot.docs;

  return docs.map((item) => ({ ...item.data(), id: item.id }));
}

export async function createOrder(orderData) {
  const collectionRef = collection(db, "orders");
  const docCreated = await addDoc(collectionRef, orderData);

  return docCreated.id;
}

export async function getOrder(id) {
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);

  return { ...docSnapshot.data(), id: docSnapshot.id };
}

export default getData;
