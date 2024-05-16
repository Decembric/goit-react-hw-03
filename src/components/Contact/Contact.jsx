import ContactList from "../ContactList/ContactList"
import css from "./Contact.module.css"

const Contact = ({ users, onRemoveUser }) => {
  return (
    <ul className={css.nameList}>
      {users.map((user) => (
        <li className={css.nameItem} key={user.id}>
          <ContactList data={user} onRemoveUser={onRemoveUser} />
        </li>
      ))}
    </ul>
  );
};

export default Contact;
