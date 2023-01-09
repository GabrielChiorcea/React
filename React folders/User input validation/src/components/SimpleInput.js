import useInput from '../hooks/use-input';
const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: eneterdNameIsValid,
    hasError: nameInputHasError,
    inputEnteredValueHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: eneterdEmailIsValid,
    hasError: emailInputHasError,
    inputEnteredValueHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (eneterdNameIsValid && eneterdEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!eneterdNameIsValid) return;

    resetName();
    resetEmail();
  };
  const name = nameInputHasError ? 'form-control invalid' : 'form-control';

  const email = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={name}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          type="text"
          id="name"
          value={enteredName}
        />
      </div>
      {nameInputHasError && (
        <p className="error-text">Name must not be empty</p>
      )}

      <div className={email}>
        <label htmlFor="email">Your Name</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="text"
          id="email"
          value={enteredEmail}
        />
      </div>
      {emailInputHasError && (
        <p className="error-text">Name must not be empty</p>
      )}

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
