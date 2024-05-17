
import css from "./Contact.module.css"
import { FaUser, FaPhone } from "react-icons/fa"
const Contact = ({ data, onRemoveUser }) => {
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

export default Contact

