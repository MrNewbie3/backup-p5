import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase";

const login = async (payload) => {
  try {
    const postData = await fetch("http://localhost:3000/api/v1/user", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      method: "POST",
    });
    const result = await postData.json();
    const insertToDB = await addDoc(collection(firestore, "users"), payload);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export { login };
