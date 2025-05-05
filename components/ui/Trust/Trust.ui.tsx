import { FC } from "react";
import Image from "next/image";
import { TTrust } from "../../../types";
import { ButtonUI } from "../Button";
import classes from "./trust.module.css";

type TTrustUI = {
  title: string;
  items: TTrust;
};

const TrustUI: FC<TTrustUI> = ({ title, items }) => {
  return (
    <div className={classes.trust}>
      <div className={classes.left}>
        <h2>{title}</h2>
        <ButtonUI label="Записаться на сервис" variant="white" />
      </div>
      <div className={classes.right}>
        {items.map((item, index) => (
          <div key={index} className={classes.item}>
            <div className={classes.itemIcon}>
              <Image src={item.icon} alt="icon" width={56} height={56} />
            </div>
            <div className={classes.itemLabel}>{item.label}</div>
            <div className={classes.itemDescription}>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustUI;
