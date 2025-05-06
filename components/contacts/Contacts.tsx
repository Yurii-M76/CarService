import { ContactsUI } from "../ui";

const content = {
  workSchedule: [
    "ПН-ПТ: 9:00 - 18:00",
    "СБ: 9:00-14:00",
    "ВС: выходной (по договоренности)",
  ],
  address: "г. Новосибирск, улица Блюхера, 12",
  phone: "+7 (000) 000-00-00",
  email: "info@carservice.ru",
};

const Contacts = () => {
  return <ContactsUI title="Контакты" content={content} />;
};

export default Contacts;
