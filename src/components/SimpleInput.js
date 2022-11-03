import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  let formIsValid = false

  if (enteredNameIsValid)  {
    formIsValid = true
  }

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true)
  }

  const submitHandler = event => {
    event.preventDefault()

    if (!enteredNameIsValid) {
      return
    }

    console.log(enteredName)
    setEnteredName('')
    setEnteredNameTouched(false)
  }

  const nameInputClasses = !nameInputIsInvalid ? 'form-control' : 'form-control invalid'

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
      {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}

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
