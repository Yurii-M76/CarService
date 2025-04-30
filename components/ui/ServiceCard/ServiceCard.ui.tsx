import { FC } from "react";
import { TServiceCardUI } from "../../../types";
import classes from "./serviceCard.module.css";

const ServiceCardUI: FC<TServiceCardUI> = ({
  label,
  price,
  promo,
  image,
  badge,
  setActive,
}) => {
  return (
    <div
      className={classes.card}
      onMouseEnter={setActive}
      onMouseLeave={setActive}
    >
      <div className={classes.top}>
        <span className={classes.label}>{label}</span>
        {promo && badge}
      </div>
      <div className={classes.imageWrapper}>
        {image && (
          <div
            className={classes.image}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
            }}
          ></div>
        )}
      </div>

      <div className={classes.price}>
        <span className={classes.pre}>от</span> {price} ₽
      </div>
    </div>
  );
};

export default ServiceCardUI;
