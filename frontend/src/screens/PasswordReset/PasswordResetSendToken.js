import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { passwordResetTokenAction } from '../../redux/actions/userAction';

//Send token to email
const PasswordResetSendToken = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(passwordResetTokenAction(email));
  };
  return (
    <div>
      <h1>Enter your email</h1>
      <form onSubmit={handleSubmit}>
        <input
          className='border'
          type='text'
          placeholder='Enter Your email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button>Send me the Link</button>
      </form>
    </div>
  );
};

export default PasswordResetSendToken;
