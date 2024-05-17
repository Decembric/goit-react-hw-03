import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import "./index.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";



const initialValue = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [users, setUser] = useState(() => {
    const savedUsers = JSON.parse(window.localStorage.getItem("saved-users"));

    return savedUsers || initialValue;
  });
  const [filterUsers, setFilterUsers] = useState("");

  useEffect(() => {
    window.localStorage.setItem("saved-users", JSON.stringify(users));
  }, [users]);

  const handleAddUser = (userName) => {
    setUser((prevUser) => [...prevUser, { ...userName, id: nanoid() }]);
  };

  const handleRemoveUser = (userId) => {
    console.log(userId);
    setUser((prevUser) => prevUser.filter((user) => user.id !== userId));
  };

  const filtered = users.filter((user) =>
    user.name.toLowerCase().includes(filterUsers.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleUserForm={handleAddUser} />
      <SearchBox value={filterUsers} onFilterUsers={setFilterUsers} />
      <ContactList users={filtered} onRemoveUser={handleRemoveUser} />
    </div>
  );
}

export default App
