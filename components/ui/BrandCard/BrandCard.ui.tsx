"use client";
import { FC } from "react";
import Image from "next/image";
import classes from "./brandCard.module.css";

type TBrandCardUI = {
  label: string;
  icon?: string;
  onClick?: () => void;
};

const BrandCardUI: FC<TBrandCardUI> = ({ icon, label, onClick }) => {
  const img = (
    <Image
      src={icon ? icon : ""}
      alt={label}
      width={100}
      height={100}
      className={classes.icon}
    />
  );

  return (
    <div className={classes.brandCard} onClick={onClick}>
      {icon ? (
        img
      ) : (
        <span style={{ fontSize: "1rem", cursor: "pointer" }}>{label}</span>
      )}
    </div>
  );
};

export default BrandCardUI;
