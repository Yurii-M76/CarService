import { FC } from "react";
import { ButtonUI, LogoUI, NavbarUI } from "..";
import classes from "./header.module.css";

const mockLinks = [
  { path: "#services", label: "Услуги", accent: false },
  { path: "#about", label: "О нас", accent: false },
  { path: "#contacts", label: "Контакты", accent: false },
];

const HeaderUI = () => {
  return (
    <div className={classes.header}>
      <div className={classes.top}>
        <LogoUI />
        <NavbarUI links={mockLinks} />
        <div className={classes.contacts}>
          <span className={classes.phone}>+7 900 000-00-00</span>
          <span className={classes.workSchedule}>
            ПН-ПТ: 9:00 - 18:00, СБ: 9:00-14:00,
            <br />
            ВС: выходной (по договоренности)
          </span>
        </div>
      </div>
      <div className={classes.content}>
        <h1>
          Техобслуживание
          <br />и ремонт двигателей
          <br />в Новосибирске
        </h1>
        <div className={classes.buttons}>
          <ButtonUI
            label="Узнать стоимость ремонта >"
            type="button"
            variant="accent"
          />
          <ButtonUI
            label="Выездная диагностика"
            type="button"
            variant="outline"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderUI;
