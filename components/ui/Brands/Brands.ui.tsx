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
];

const BrandsUI = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const brands = mockBrand.map((item) => {
    return <BrandCardUI icon={item.icon} label={item.label} />;
  });

  return (
    <div className={classes.brands}>
      <p className={classes.text}>
        Работаем с отечественными и иностранными брендами, в том числе с
        коммерческим транспортом
      </p>

      <div className={classes.cards}>{brands}</div>
    </div>
  );
};

export default BrandsUI;
