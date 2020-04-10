import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

// this class cuz i have  to store what user type
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    // by this wat i can pass fun to both inputs
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I have Already an account</h2>
        <span>Sign Up With Your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle}>{''}Google Sign {''}</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
