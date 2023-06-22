import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const Checkout = (props) => {

    const isEmpty = value => value.trim() === ''
    const isFiveChars = value => value.trim().length === 5

    const[formInputsValidity , setFormInputsValidity]=useState({name:true, street:true, postalCode:true , city:true})

    const nameInputRef=useRef()
    const streetInputRef=useRef()
    const postalInputRef=useRef()
    const cityInputRef=useRef()

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName=nameInputRef.current.value
    const enteredStreet=streetInputRef.current.value
    const enteredPostal=postalInputRef.current.value
    const enteredCity=cityInputRef.current.value

    const enteredNameIsValid = !isEmpty(enteredName)
    const enteredStreetIsValid = !isEmpty(enteredStreet)
    const enteredCityIsValid = !isEmpty(enteredCity)
    const enteredPostalIsValid = isFiveChars(enteredPostal)

    setFormInputsValidity({name:enteredNameIsValid,street:enteredStreetIsValid,city:enteredCityIsValid,postalCode:enteredPostalIsValid})

    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalIsValid

    if (!formIsValid) {
        return
        
    }
    props.onConfirm({name:enteredName,city:enteredCity,street:enteredStreet,postal:enteredPostal})

  };
  
  const nameControlClasses=`${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`
  const streetControlClasses=`${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`
  const cityControlClasses=`${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`
  const postalControlClasses=`${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputsValidity.name && <p>please enter a valid name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}/>
        {!formInputsValidity.street && <p>please enter a valid street</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal'  ref={postalInputRef}/>
        {!formInputsValidity.postalCode && <p>please enter a valid postalCode</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city'  ref={cityInputRef}/>
        {!formInputsValidity.city && <p>please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;