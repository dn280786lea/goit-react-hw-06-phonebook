import React from 'react';
import './ContactList.css';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import { getContacts, getFilter } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = Array.isArray(contacts)
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      )
    : [];

  return (
    <div className="contactlist-list">
      {filteredContacts.map(({ name, number, id }) => (
        <ContactItem key={id} name={name} id={id} number={number} />
      ))}
    </div>
  );
};
