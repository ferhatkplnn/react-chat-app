import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleButton from "react-google-button";
import { auth } from "../firebase/config";

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const SignIn = () => {
  return (
    <div className="flex justify-center">
      <GoogleButton onClick={googleSignIn} />
    </div>
  );
};

export default SignIn;
