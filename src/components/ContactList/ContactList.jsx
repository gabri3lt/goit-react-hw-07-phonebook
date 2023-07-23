import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from '../Toolkit/contactsSelectors';

import css from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map(({ name, id, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
