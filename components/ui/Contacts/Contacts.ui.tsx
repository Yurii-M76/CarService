import { FC } from "react";
import { TContacts } from "../../../types";
import classes from "./contacts.module.css";

const ContactsUI: FC<TContacts> = ({ title, content }) => {
  return (
    <>
      <h2>{title}</h2>
      <div className={classes.contactsGroup}>
        <article>
          <span style={{ fontWeight: "bold" }}>График работы:</span>
          <ul>
            {content.workSchedule.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </article>

        <article>
          <p>
            <span style={{ fontWeight: "bold" }}>Адрес:</span> {content.address}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Телефон:</span> {content.phone}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Email:</span> {content.email}
          </p>
        </article>
      </div>
    </>
  );
};

export default ContactsUI;
