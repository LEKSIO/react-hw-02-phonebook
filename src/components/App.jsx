import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = formData => {
    const hasDuplicate = this.state.contacts.some(
      profile => profile.name.toLowerCase() === formData.name.toLowerCase()
    );
    if (hasDuplicate) return alert(`${formData.name} is already in contacts.`);
    formData.id = nanoid();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, formData],
    }));
  };

  render() {
    return (
      <>
        <ContactsForm addContact={this.addContact} /> react-hw-02-phonebook
      </>
    );
  }
}
