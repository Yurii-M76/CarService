import { FC } from "react";
import classes from "./badge.module.css";

type TBadgeUI = {
  label: string;
  variant?: "red" | "black";
};

const BadgeUI: FC<TBadgeUI> = ({ label, variant }) => {
  const classNames = [
    classes.badge,
    variant === "red" ? classes.red : null,
    variant === "black" ? classes.black : null,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classNames}>{label}</div>;
};

export default BadgeUI;
