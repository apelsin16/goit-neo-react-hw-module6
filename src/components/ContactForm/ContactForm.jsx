import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too short')
        .max(50, 'Too long')
        .required('Field is required'),
    number: Yup.string()
        .min(3, 'Too short')
        .max(50, 'Too long')
        .required('Field is required'),
});

const initialValues = {
    name: '',
    number: '',
};

const ContactForm = () => {
    const dispatch = useDispatch();

    const nameId = useId();
    const phoneId = useId();

    const handleSubmit = (values, actions) => {
        dispatch(
            addContact({
                id: nanoid(),
                ...values,
            })
        );
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={ContactSchema}
        >
            <Form className={css.ContactForm}>
                <div className={css.formField}>
                    <label htmlFor={nameId}>Name</label>
                    <Field type="text" name="name" id={nameId} />
                    <ErrorMessage
                        name="name"
                        component="span"
                        className={css.error}
                    />
                </div>
                <div className={css.formField}>
                    <label htmlFor={phoneId}>Number</label>
                    <Field type="tel" name="number" id={phoneId} />
                    <ErrorMessage
                        name="number"
                        component="span"
                        className={css.error}
                    />
                </div>
                <button type="submit" className={css.button}>
                    Add contact
                </button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
