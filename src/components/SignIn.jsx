// Import necessary Firebase and authentication components
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleButton from "react-google-button";
import { auth } from "../firebase/config";

const googleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithRedirect(auth, provider);
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};

const SignIn = () => {
  return (
    <div className="flex justify-center">
      <GoogleButton onClick={googleSignIn} />
    </div>
  );
};

export default SignIn;
