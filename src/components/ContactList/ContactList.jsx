import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => {
    return (
        <ul className={css.ContactList}>
            {contacts.map((contact) => (
                <li key={contact.id} className={css.item}>
                    <Contact contact={contact} />
                </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        })
    ),
};

export default ContactList;
