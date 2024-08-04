import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setNumber, addContact } from '../../redux/contactFormSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const { name, number } = useSelector(state => state.contacts); // Verifică această linie

  const handleNameChange = evt => {
    dispatch(setName(evt.target.value));
  };
  const handleNumberChange = evt => {
    dispatch(setNumber(evt.target.value));
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addContact({ name, number })); // Asigură-te că `addContact` primește payload-ul corect
  };
  return (
    <div>
      <div className={styles.formContainer}>
        <h1>Phonebook</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleNameChange}
            type="text"
            name="name"
            id="name"
            pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
            value={name}
          />
          <label htmlFor="number">Number</label>
          <input
            onChange={handleNumberChange}
            type="tel"
            name="number"
            id="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
          />
          <button type="submit">Add a contact</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
