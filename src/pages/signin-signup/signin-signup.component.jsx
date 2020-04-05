import React from 'react';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

import './signin-signup.styles.scss';
const SignInAndSignUpPage = () => {
  return (
    <div className="sing-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
