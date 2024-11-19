import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { FaPhone, FaUser } from 'react-icons/fa6';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const Contact = ({ contact: { id, name, number } }) => {

    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(id))

    return (
        <div className={css.Contact}>
            <ul>
                <li>
                    <FaUser /> {name}
                </li>
                <li>
                    <FaPhone /> {number}
                </li>
            </ul>
            <button className={css.button} onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
};

Contact.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
    }),
};

export default Contact;
