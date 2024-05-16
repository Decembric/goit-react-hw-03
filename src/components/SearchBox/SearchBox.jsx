import css from "./SearchBox.module.css"

const SearchBox = ({ value, onFilterUsers }) => {
  return (
    <>
      <label className={css.userName}>Find contacts by name</label>
      <input className={css.inputName}
        type="text"
        value={value}
        onChange={(e) => onFilterUsers(e.target.value)}
      />
    </>
  );
};

export default SearchBox;
