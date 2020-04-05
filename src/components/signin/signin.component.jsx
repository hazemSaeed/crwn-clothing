import React from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubimt = (e) => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubimt}>
          <FormInput
            name="email"
            type="email"
            required
            handleChange={this.handleChange}
            label="Email"
            value={this.state.email}
          />

          <FormInput
            name="password"
            type="password"
            required
            value={this.state.password}
            label="Password"
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit">Submit Form</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
