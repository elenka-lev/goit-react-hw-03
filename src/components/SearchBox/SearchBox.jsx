import { Field, Form, Formik } from "formik";
import { useId } from "react";
import s from './SearchBox.module.css'

const SearchBox = ({value, onSearch}) => {
    const nameLabelId = useId()
    const initialValues = {
        contactName: '',
    }
    return (
    <Formik initialValues={initialValues} onChange={SearchBox}>
            <Form className={s.form}>
                <label htmlFor={nameLabelId} className={s.label}>Find contacts by name</label>
                <Field className={s.input} type="text" name="contactName" value={value} id={nameLabelId} onChange={(e) =>  onSearch(e.target.value)} />
    </Form>
</Formik>
)}

export default SearchBox;