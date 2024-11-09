import Contact from "../Contact/Contact";
import s from './ContactList.module.css';

const ContactList = ({contacts, onDelete}) => {
    return (
        <ul>
            {contacts.map((contact) =>
                (<li key={contact.id} className={s.item}>
                <Contact contact={contact} onDelete={() => onDelete(contact.id)}               
                />
                    </li>))}
           
        </ul>
    )
}
export default ContactList;