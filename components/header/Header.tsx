"use client";
import { AnchorUI, HeaderUI } from "../ui";
import { THeaderValues, TNavigarionItems } from "../../types";

const navigarion: TNavigarionItems = [
  { path: "#services", label: "Услуги", accent: false },
  { path: "#about", label: "О нас", accent: false },
  { path: "#contacts", label: "Контакты", accent: false },
];

const values: THeaderValues = {
  phone: "+7 900 000-00-00",
  workSchedule:
    "ПН-ПТ: 9:00 - 18:00, СБ: 9:00-14:00, ВС: выходной (по договоренности)",
  title: "Техобслуживание и ремонт двигателей в Новосибирске",
  accentButtonLabel: "Узнать стоимость ремонта",
  secondaryButtonLabel: "Выезданя диагностика",
};

const Header = () => {
  return (
    <HeaderUI
      navigation={navigarion}
      values={values}
      accentButton={
        <AnchorUI
          path="#form"
          label={values.accentButtonLabel}
          variant="accent"
        />
      }
    />
  );
};

export default Header;
