import { FC } from "react";
import LogoUI from "../Logo/Logo.ui";
import ButtonUI from "../Button/Button.ui";
import classes from "./header.module.css";

type THeaderUI = {
  name?: string;
};

const HeaderUI: FC<THeaderUI> = () => {
  return (
    <div className={classes.header}>
      <div className={classes.top}>
        <LogoUI />
        <div>navigation</div>
      </div>
      <div className={classes.content}>
        <h1>Техобслуживание<br />и ремонт двигателей<br />в Новосибирске</h1>
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
