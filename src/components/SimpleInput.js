import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetName
  } = useInput(value => value.trim() !== '')

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmail
  } = useInput(value => value.includes('@'))

  let formIsValid = false

  if (enteredNameIsValid && enteredEmailIsValid)  {
    formIsValid = true
  }

  const submitHandler = event => {
    event.preventDefault()

    if (!enteredNameIsValid) {
      return
    }

    console.log(enteredName)
    resetName()
    resetEmail()
  }

  const nameInputClasses = nameHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={submitHandler}>

      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          value={enteredName}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler} />
      </div>
      {nameHasError && <p className='error-text'>Name must not be empty.</p>}

      <div className={emailInputClasses}>
        <label htmlFor='email'>Email</label>
        <input
          value={enteredEmail}
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler} />
      </div>
      {emailHasError && <p className='error-text'>Please enter a valid email.</p>}

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
