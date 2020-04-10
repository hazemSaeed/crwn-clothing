import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.util';
import { SignInContainer, SignInTitle, SignInButtons } from './signin.styles';

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
  handleSubimt = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: '',
      });
    } catch (err) {
      console.log(err);
    }
    this.setState({ email: '', password: '' });
  };
  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
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
          <SignInButtons>
            <CustomButton type="submit">Submit Form</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </SignInButtons>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
