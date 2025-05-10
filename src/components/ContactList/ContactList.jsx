import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilters } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={s.contactList}>
      {filteredContacts.map((contact) => (
        <li className={s.contactItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
