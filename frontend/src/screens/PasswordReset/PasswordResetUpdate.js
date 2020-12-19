import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateRequestPasswordAction } from '../../redux/actions/userAction';

const PasswordResetUpdate = ({ match }) => {
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  //Get the token from params
  const resetPassworkToken = match.params.token;
  const handleSubmit = e => {
    e.preventDefault();
    console.log(match.params.token);
    dispatch(updateRequestPasswordAction(password, resetPassworkToken));
    console.log(password, resetPassworkToken);
  };
  return (
    <div>
      <h1>Reset password</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Reset'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Reset password</button>
      </form>
    </div>
  );
};

export default PasswordResetUpdate;
