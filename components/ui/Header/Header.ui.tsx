import { LogoUI, NavbarUI } from "..";
import { FC, ReactNode } from "react";
import { THeaderValues, TNavigarionItems } from "../../../types";
import classes from "./header.module.css";

type THeaderUI = {
  navigation: TNavigarionItems;
  values: THeaderValues;
  accentButton: ReactNode;
  secondaryButtonLabel?: ReactNode;
  children?: ReactNode;
};

const HeaderUI: FC<THeaderUI> = ({
  navigation,
  values,
  accentButton,
  secondaryButtonLabel,
  children,
}) => {
  return (
    <div className={classes.header}>
      <div className={classes.top}>
        <LogoUI />
        <NavbarUI links={navigation} />
        <div className={classes.contacts}>
          <span className={classes.phone}>{values.phone}</span>
          <span className={classes.workSchedule}>{values.workSchedule}</span>
        </div>
      </div>
      <div className={classes.content}>
        <h1>{values.title}</h1>
        <div className={classes.buttons}>
          {accentButton}
          {secondaryButtonLabel}
        </div>
      </div>
      {children}
    </div>
  );
};

export default HeaderUI;
