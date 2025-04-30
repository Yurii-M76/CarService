import { ReactNode } from "react";
import classes from "./services.module.css";

const ServicesUI = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className={classes.services}>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.cards}>{children}</div>
    </div>
  );
};

export default ServicesUI;
