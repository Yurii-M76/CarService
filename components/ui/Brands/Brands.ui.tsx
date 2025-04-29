"use client";
import { FC, useState } from "react";
import { BrandCardUI } from "..";
import { TBrands } from "../../../types";
import classes from "./brands.module.css";

const BrandsUI: FC<TBrands> = ({ title, brandList }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const brands = brandList.map((item, index) => {
    if (!isOpen && index >= 4) return null;
    return <BrandCardUI key={index} icon={item.icon} label={item.label} />;
  });

  return (
    <div className={classes.brands}>
      <div className={classes.center}>
        <h3 className={classes.title}>{title}</h3>
      </div>

      <div className={classes.cards}>
        {brands}
        <BrandCardUI
          icon={""}
          label={!isOpen ? "Показать все" : "Свернуть"}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  );
};

export default BrandsUI;
