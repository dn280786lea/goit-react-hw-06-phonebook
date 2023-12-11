import React from 'react';
import { useDispatch } from 'react-redux';
import './ContactItem.css';
import { removeContactAction } from '../../redux/contacts';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const deleteContact = e => {
    const contactToDelete = e.currentTarget.id;
    dispatch(removeContactAction(contactToDelete));
  };

  if (!contact) {
    return null;
  }

  return (
    <div className="contact-item">
      <span className="item">{contact.name}: </span>
      <span className="item">{contact.number}</span>
      <button className="deletebtn" type="button" onClick={deleteContact}>
        Delete
      </button>
    </div>
  );
};

export default ContactItem;
