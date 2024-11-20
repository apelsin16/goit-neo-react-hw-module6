import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filterSlice';

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul className={css.ContactList}>
            {filteredContacts.map((contact) => (
                <li key={contact.id} className={css.item}>
                    <Contact contact={contact} />
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
