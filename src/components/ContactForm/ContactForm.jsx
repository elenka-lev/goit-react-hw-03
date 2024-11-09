import { ErrorMessage, Field, Formik, Form } from "formik";
import { useId } from "react";
import { nanoid } from 'nanoid';
import * as Yup from "yup";
import s from './ContactForm.module.css';

const ContactForm = ({ onAdd }) => {
    const nameId = useId();
    const phoneId = useId();

    const initialValues = {
        contactName: '',
        phone: '',
    };
    const phoneRegex = /^(\+?\d{1,3})?[-. (]?(\d{3})[-. )]?(\d{3})[-. ]?(\d{4})$/;
    const FeedbackSchema = Yup.object().shape({
        contactName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
        phone: Yup.string().matches(phoneRegex, "It's not a phone number").required("Required")
    });
    const handleSubmit = (values, { resetForm }) => {
        const newContact = {
            id: nanoid(),
            name: values.contactName,
            number: values.phone,
        };
        onAdd(newContact);
        resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
            <Form className={s.form}>
                <label htmlFor={nameId} className={s.label}>Name</label>
                <ErrorMessage name='contactName' component='span' className={s.error} />
                <Field type="text" id={nameId} name="contactName" className={s.input} />
                
                <label htmlFor={phoneId} className={s.label}>Number</label>
                <ErrorMessage name='phone' component='span' className={s.error} />
                <Field type="tel" id={phoneId} name="phone" className={s.input} />
                
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;