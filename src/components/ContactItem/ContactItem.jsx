import React from 'react';
import { useDispatch } from 'react-redux';
import './ContactItem.css';
import { removeContactAction } from '../../redux/contacts';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;
  const deleteContact = () => {
    dispatch(removeContactAction(id));
  };

  return (
    <div className="contact-item">
      <span className="item">{name}: </span>
      <span className="item">{number}</span>
      <button className="deletebtn" type="button" onClick={deleteContact}>
        Delete
      </button>
    </div>
  );
};

export default ContactItem;
