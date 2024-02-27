import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "./config";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

export const sendMessageToFirebase = async (input) => {
  const { currentUser } = auth;

  if (!currentUser) {
    console.error("No current user found");
    return false;
  }

  const { uid, displayName } = currentUser;

  try {
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    return true;
  } catch (error) {
    console.error("Error sending message:", error.message);
    return false;
  }
};

export const googleSignInToFirebase = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithRedirect(auth, provider);
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};
