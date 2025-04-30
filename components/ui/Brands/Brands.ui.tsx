import { FC } from "react";
import { TBrands } from "../../../types";
import classes from "./brands.module.css";

const BrandsUI: FC<TBrands> = ({ title, children }) => {
  return (
    <div className={classes.brands}>
      <div className={classes.center}>
        <h3 className={classes.title}>{title}</h3>
      </div>
      <div className={classes.cards}>{children}</div>
    </div>
  );
};

export default BrandsUI;
