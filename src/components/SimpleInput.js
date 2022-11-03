import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameInputChangeHandler,
    valueBlurHandler: nameInputBlurHandler,
    reset: nameReset
  } = useInput(value => value.trim() !== '')


  let formIsValid = false

  if (enteredNameIsValid)  {
    formIsValid = true
  }

  const submitHandler = event => {
    event.preventDefault()

    if (!enteredNameIsValid) {
      return
    }

    console.log(enteredName)
    nameReset()
  }

  const nameInputClasses = nameHasError ? 'form-control invalid' : 'form-control'

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

      {/* <div className={}>
        <label htmlFor='email'>Email</label>
        <input
          value={enteredName}
          type='email'
          id='email'
          onChange={}
          onBlur={} />
      </div>
      { && <p className='error-text'>Please enter a valid email.</p>} */}

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>

    </form>
  );
};

export default SimpleInput;
