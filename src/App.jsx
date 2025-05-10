import { useEffect, useState } from "react";
import "./App.css";
import { ContactForm, SearchBox, ContactList } from "./components";
import { useSelector } from "react-redux";
import { selectContacts } from "./redux/contactsSlice";

function App() {
  const contacts = useSelector(selectContacts);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {contacts.length < 1 && <p>There is no contacts yet</p>}
    </>
  );
}

export default App;
