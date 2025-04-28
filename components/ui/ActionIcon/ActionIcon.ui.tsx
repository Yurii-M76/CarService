"use client";
import { FC, ReactNode } from "react";
import classes from "./actionIcon.module.css";

type TActionIconUI = {
  children: ReactNode;
  onClick: () => void;
};

const ActionIconUI: FC<TActionIconUI> = ({ children, onClick }) => {
  return (
    <div className={classes.icon} onClick={onClick}>
      {children}
    </div>
  );
};

export default ActionIconUI;
