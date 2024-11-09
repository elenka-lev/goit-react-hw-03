import { FaPhoneAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import s from './Contact.module.css';

const Contact = ({contact, onDelete}) => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <p className={s.item}>
                    <IoMdPerson className={s.icon} />
                    {contact.name}
                </p>
                <p className={s.item}>
                    <FaPhoneAlt className={s.icon} />
                    {contact.number}
                </p>
            </div>
            <button className={s.btn} onClick={onDelete}>Delete</button>
        </div>
    )
}

export default Contact;