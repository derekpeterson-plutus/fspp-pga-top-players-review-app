import './Login.scss';
import React from 'react';

const Login = () => {

  return (
    <div className='login'>
      <form>
        <label for='email'>Email</label>
        <input type='email' name='email' id='email' />
        <label for='email'>Password</label>
        <input type='password' name='password' id='password' />
      </form>
      <div className='login__reminder'>
        <div className='flex justify-center gap-1'>
          <input type='checkbox' name='reminder' id='reminder' className='cursor-pointer' />
          <label htmlFor='reminder'>Remember me</label>
        </div>
        <button>Forgot password?</button>
      </div>
      <div className='login__buttons'>
        <button type='button' className='login__submitButton'>Submit</button>
        <button type='button' className='login__createButton'>Create New Account</button>
      </div>
    </div>
  );
};

export default Login;
