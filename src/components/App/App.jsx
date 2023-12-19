import { useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Message from './Message/Message';

import css from './App.module.css';

import { getContacts } from '../../redux/contacts-slice';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phone<span className={css.title__color}>book</span>
      </h1>
      <ContactForm />

      <h2 className={css.subtitle}>Contacts</h2>

      <Filter />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <Message text="Contact list is empty." />
      )}
    </div>
  );
};

export default App;
