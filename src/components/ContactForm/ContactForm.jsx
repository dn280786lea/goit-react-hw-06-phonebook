import React from 'react';
import './ContactForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAction } from '../../redux/contacts';
import { getContacts } from '../../redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const addContact = newContact => {
    const isExist = Array.isArray(contacts)
      ? contacts.find(
          contact =>
            contact.name.toLowerCase() === newContact.name.toLowerCase().trim()
        )
      : null;

    if (isExist) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    dispatch(addContactAction(newContact));
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      number: e.target.number.value,
    };
    console.log('Form data:', formData);
    addContact(formData);
    e.target.reset();
  };

  return (
    <div className="phonebook-form">
      <form onSubmit={handleFormSubmit}>
        <h1 className="phonebook-title">Phonebook</h1>
        <div>
          <label className="phonebook-name" htmlFor="name">
            Name
          </label>
          <input type="text" name="name" required />
          <label className="phonebook-number" htmlFor="number">
            Number
          </label>
          <input type="text" name="number" required />

          <button type="submit" className="namebtn">
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
