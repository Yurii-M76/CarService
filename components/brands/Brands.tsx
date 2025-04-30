"use client";
import { useState } from "react";
import { TBrandList } from "../../types";
import { BrandCardUI, BrandsUI } from "../ui";

const brandList: TBrandList = [
  { icon: "/brandIcons/Audi.svg", label: "Audi" },
  { icon: "/brandIcons/Bmw.svg", label: "BMW" },
  { icon: "/brandIcons/Chevrolet.svg", label: "Chevrolet" },
  { icon: "/brandIcons/Fiat.svg", label: "Fiat" },
  { icon: "/brandIcons/Ford.svg", label: "Ford" },
  { icon: "/brandIcons/Audi.svg", label: "Audi" },
  { icon: "/brandIcons/Bmw.svg", label: "BMW" },
  { icon: "/brandIcons/Chevrolet.svg", label: "Chevrolet" },
  { icon: "/brandIcons/Fiat.svg", label: "Fiat" },
  { icon: "/brandIcons/Ford.svg", label: "Ford" },
  { icon: "/brandIcons/Bmw.svg", label: "BMW" },
  { icon: "/brandIcons/Chevrolet.svg", label: "Chevrolet" },
  { icon: "/brandIcons/Fiat.svg", label: "Fiat" },
  { icon: "/brandIcons/Ford.svg", label: "Ford" },
];

const title =
  "Работаем с отечественными и иностранными брендами, в том числе с коммерческим транспортом";

const Brands = () => {
  const [isOpen, setIsOpen] = useState(false);

  const visibleBrands = isOpen ? brandList : brandList.slice(0, 4);

  return (
    <BrandsUI title={title}>
      {visibleBrands.map((item, index) => (
        <BrandCardUI key={index} icon={item.icon} label={item.label} />
      ))}
      <BrandCardUI
        icon={""}
        label={!isOpen ? "Показать все" : "Свернуть"}
        onClick={() => setIsOpen(!isOpen)}
      />
    </BrandsUI>
  );
};

export default Brands;
