import classes from './Auth.module.css';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/index';

const authCredentials = {
  email: 'gabrielchiorcea93@gmail.com',
  pass: 'mmmm',
};

const Auth = () => {
  const emailValue = useRef('');
  const passValue = useRef('');
  const dispatch = useDispatch();

  const submitEventHandler = (event) => {
    event.preventDefault();
    console.log(emailValue);
    if (
      authCredentials.email === emailValue.current.value &&
      authCredentials.pass === passValue.current.value
    ) {
      dispatch(authActions.login());
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitEventHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailValue} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passValue} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
