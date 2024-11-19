import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { addContact, selectContacts } from '../../redux/contactsSlice';
import { changeFilter, selectNameFilter } from '../../redux/filterSlice';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    const dispatch = useDispatch();

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    const handleAddContact = (newContact) => {
        dispatch(addContact(newContact));
    };

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className={css.App}>
            <h1>Phonebook</h1>
            <ContactForm onAddContact={handleAddContact} />
            <SearchBox
                filter={filter}
                onFilter={(value) => dispatch(changeFilter(value))}
            />
            <ContactList contacts={filteredContacts} />
        </div>
    );
}

export default App;
