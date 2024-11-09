import { useState, useEffect } from 'react';
import './App.css';
import phones from './assets/phones.json';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('saved-сontacts');
    return savedContacts ? JSON.parse(savedContacts) : phones;
  });
 const [searchQuery, setSearchQuery] = useState('');

  const addContacts = (newContact) => {
    setContacts(prev => {
      return [...prev, newContact];
    })
  }
  const searchContacts = contacts.filter((contact) => contact.name.toLowerCase().trim().includes(searchQuery.toLowerCase().trim()));
  
  useEffect(() => {
    window.localStorage.setItem('saved-Contacts', JSON.stringify(contacts));
  }, [contacts]);
  const deleteContact = (contactId) => {
    setContacts((prev) => {
     return prev.filter(contact => contact.id !== contactId)
   })
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContacts} />
      <SearchBox value={searchQuery} onSearch={setSearchQuery} />
      <ContactList contacts={searchContacts} onDelete={deleteContact } />
    </div>
)
}

export default App
