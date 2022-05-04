import { useState } from 'react';
import './App.css';
import Contacts from './contacts.json';

const allContacts = Contacts;
const firstFiveContacts = allContacts.slice(0,5);

function App() {
  const [contacts, setContacts] = useState(firstFiveContacts);

  const addContact = () => {
    const randomNumber = Math.floor(Math.random() * allContacts.length);
    const contact = allContacts[randomNumber];
    setContacts([contact, ...contacts]);
  };

  const sortByPopularity = () => {
    let sortedContacts = contacts.sort(function (a, b) {
      return a.popularity > b.popularity;
    });
    setContacts([...sortedContacts]);
  };

  const sortByName = () => {
    let sortedContacts = contacts.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    setContacts([...sortedContacts]);
  }

  return (
    <>
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact =>
          (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt='profile'/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? <p>🌞</p> : <p>⚡</p>}</td>
              <td>{contact.wonEmmy ? <p>🌞</p> : <p>⚡</p>}</td>
            </tr>
          )
          )}
        </tbody>
      </table>
      <button onClick={addContact}>Add random contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
    </>
  );
}

export default App;
