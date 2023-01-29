import './Login.scss';
import React, {useState} from 'react';
import { FaTimes } from 'react-icons/fa';

const Login = () => {
  
  const [closeLoginModal, setCloseLoginModal] = useState(false);

  const handleClose = () => setCloseLoginModal(true);

  return (
    <div className='loginModal'>
      <div className='loginModal__header'>
        <div className='loginModal__title'>Login</div>
        <div
          onClick={handleClose}
          className='loginModal__closeButton'
        >
          <FaTimes />
        </div>
      </div>
      <div className='loginModal__body'>
        <div className='loginModal__form'>
          <form>
            <label for='email'>Email</label>
            <input type='email' name='email' id='email' />
            <label for='email'>Password</label>
            <input type='password' name='password' id='password' />
          </form>
          <div className='loginModal__reminder'>
            <div className='flex justify-center gap-1'>
              <input type='checkbox' name='reminder' id='reminder' />
              <label for='reminder'>Remember me </label>
            </div>
            <button>Forgot password?</button>
          </div>
          <div className='loginModal__buttons'>
            <button type='button'>Submit</button>
            <button type='button' className='loginModal__createButton'>Create New Account</button>
          </div>
        </div>
        {/* <div className='loginModal__footer'>
          <p className='loginModal__note'>
            We use Google ReCAPCHA for authentication.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
