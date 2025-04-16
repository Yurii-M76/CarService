"use client";
import { FC, useState } from "react";
import BadgeUI from "../Badge/Badge.ui";
import classes from "./serviceCard.module.css";

type TServiceCard = {
  label: string;
  price: number;
  promo: boolean;
  image?: string;
};

const ServiceCard: FC<TServiceCard> = ({ label, price, promo, image }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={classes.card}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className={classes.top}>
        <span className={classes.label}>{label}</span>
        {promo && <BadgeUI label="АКЦИЯ" variant={active ? "black" : "red"} />}
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

export default ServiceCard;
