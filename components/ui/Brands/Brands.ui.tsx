"use client";
import { useDisclosure } from "@mantine/hooks";
import { BrandCardUI } from "..";
import classes from "./brands.module.css";

const mockBrand = [
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

const BrandsUI = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const brands = mockBrand.map((item, index) => {
    if (!opened && index >= 4) return null;
    return <BrandCardUI key={index} icon={item.icon} label={item.label} />;
  });

  return (
    <div className={classes.brands}>
      <div className={classes.center}>
        <h3 className={classes.title}>
          Работаем с отечественными и иностранными брендами, в том числе с
          коммерческим транспортом
        </h3>
      </div>

      <div className={classes.cards}>
        {brands}
        <BrandCardUI
          icon={""}
          label={!opened ? "Показать все" : "Свернуть"}
          onClick={toggle}
        />
      </div>
    </div>
  );
};

export default BrandsUI;
