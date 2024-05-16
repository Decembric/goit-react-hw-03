
import css from "./ContactList.module.css"
import { FaUser, FaPhone } from "react-icons/fa"
const ContactList = ({ data, onRemoveUser }) => {
  return (
    <>
      <div className={css.userData}>
        <div className={css.userName}>
          <FaUser className={css.userIconName} />
          <p>{data.name}</p>
        </div>
        <div className={css.userNumber}>
          <FaPhone className={css.userIconNumber} />
          <p>{data.number}</p>
        </div>
      </div>
      <button type="button" onClick={() => onRemoveUser(data.id)}>
        REMOVE
      </button>

    </>
  )
}

export default ContactList


// <>
//     <div className={css.userData}>
//       <div className={css.userName}>
//         <FaUser className={css.userIcon} />
//         <p>{data.name}</p>
//       </div>
//       <div className={css.userNumber}>
//         <FaPhone className={css.userIcon} />
//         <p>{data.number}</p>
//       </div>
//     </div>
//     <button type="button" onClick={() => onRemoveUser(data.id)}>
// REMOVE
// </button >
//   </>