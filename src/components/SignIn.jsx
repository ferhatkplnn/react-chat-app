// Import necessary Firebase and authentication components
import GoogleButton from "react-google-button";
import { googleSignInToFirebase } from "../firebase/actions";

const SignIn = () => {
  return (
    <div className="flex justify-center">
      <GoogleButton onClick={googleSignInToFirebase} />
    </div>
  );
};

export default SignIn;
