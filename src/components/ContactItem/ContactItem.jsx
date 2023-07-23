import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../Toolkit/contactsSlice';

import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.item} key={id}>
      {name}: &nbsp;{number}
      <button className={css.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
