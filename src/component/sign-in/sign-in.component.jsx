import React, { useState } from "react";
import {connect} from 'react-redux'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

// this class cuz i have  to store what user type
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const {email , password  } = userCredentials
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = userCredentials;
    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    // by this wat i can pass fun to both inputs
    setCredentials({ ...userCredentials, [name]: value });
  };

 
  return (
    <div className="sign-in">
      <h2>I have Already an account</h2>
      <span>Sign Up With Your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()) , 
  emailSignInStart: (email , password) => 
    dispatch(emailSignInStart({email , password}))
})

export default connect(null, mapDispatchToProps)(SignIn);
