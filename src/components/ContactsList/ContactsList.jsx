import { Contact } from './Contact';
import css from './ContactsList.module.css';

export const ContactsList = ({ contacts, deleteContact }) => (
  <ul className={css['contacts-list']}>
    {contacts.map(({ id, name, number }) => (
      <Contact
        key={id}
        id={id}
        name={name}
        number={number}
        deleteContact={deleteContact}
      />
    ))}
  </ul>
);
