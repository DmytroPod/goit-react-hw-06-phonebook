import { useDispatch, useSelector } from 'react-redux';

import css from './ContactList.module.css';
import {
  deleteContact,
  getContacts,
  getFilter,
} from '../../../redux/contacts-slice';
import Contact from '../Contact/Contact';

function ContactList() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const deleteSelectedContact = contactId => dispatch(deleteContact(contactId));

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContactList = filtredContacts();

  return (
    <ul>
      {contacts.length > 0 &&
        filteredContactList.map(({ id, name, number }) => {
          return (
            <li className={css.item} key={id}>
              <Contact
                name={name}
                number={number}
                onDeleteContact={() => deleteSelectedContact(id)}
                contactId={id}
              />
            </li>
          );
        })}
    </ul>
  );
}

export default ContactList;
