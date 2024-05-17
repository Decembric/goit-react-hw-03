
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"

const ContactList = ({ users, onRemoveUser }) => {
  return (
    <ul className={css.nameList}>
      {users.map((user) => (
        <li className={css.nameItem} key={user.id}>
          <Contact data={user} onRemoveUser={onRemoveUser} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
