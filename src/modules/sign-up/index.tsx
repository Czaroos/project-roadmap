import React, { useContext, useEffect, useState, MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { Input, Button, Header, Footer } from '../../components';

import { auth, createUser } from '../../firebase';

import UserContext from '../../providers/UserContext';

import './style.scss';

export const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const history = useHistory();

  const currentUser = useContext(UserContext);

  useEffect(() => {
    currentUser && history.push(`/dashboard/${currentUser.id}`);
  }, [currentUser]);

  const clearForm = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();

    //TODO: provide complete validation
    if (
      displayName == '' ||
      email == '' ||
      password == '' ||
      confirmPassword == ''
    ) {
      alert('Every field must be filled in.');
      return;
    }

    //TODO: provide complete validation
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUser(user, { displayName });
      clearForm();
    } catch (err) {
      //TODO: handle error
      console.log(err.message);
    }
  };

  return (
    <div className="signUp">
      <Header />
      <div className="inputs">
        <h4>DISPLAY NAME:</h4>
        <Input onChange={(e) => setDisplayName(e.target.value)} />
        <h4>E-MAIL:</h4>
        <Input type="email" onChange={(e) => setEmail(e.target.value)} />
        <h4>PASSWORD:</h4>
        <Input type="password" onChange={(e) => setPassword(e.target.value)} />
        <h4>CONFIRM PASSWORD:</h4>
        <Input
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div />
        <Button onClick={handleSubmit}>SUBMIT</Button>
      </div>

      <div className="alreadySignedUp">
        <h3>Have an account already?</h3>
        <Button onClick={() => history.push('/')}>SIGN IN</Button>
      </div>
      <Footer />
    </div>
  );
};
