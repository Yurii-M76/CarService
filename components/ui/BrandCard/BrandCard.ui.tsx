"use client";
import { FC } from "react";
import Image from "next/image";
import classes from "./brandCard.module.css";

type TBrandCardUI = {
  icon: string;
  label: string;
};

const BrandCardUI: FC<TBrandCardUI> = ({ icon, label }) => {
  const img = (
    <Image
      src={icon}
      alt={label}
      width={100}
      height={100}
      className={classes.icon}
    />
  );

  return <div className={classes.brandCard}>{icon ? img : label}</div>;
};

export default BrandCardUI;
