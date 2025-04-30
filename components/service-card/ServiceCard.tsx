"use client";
import { FC, useState } from "react";
import { BadgeUI, ServiceCardUI } from "../ui";
import { TServiceCard } from "../../types";

const ServiceCard: FC<TServiceCard> = ({ label, price, promo, image }) => {
  const [active, setActive] = useState(false);
  const badge = <BadgeUI label="АКЦИЯ" variant={active ? "black" : "red"} />;

  return (
    <ServiceCardUI
      label={label}
      price={price}
      promo={promo}
      image={image}
      badge={badge}
      setActive={() => setActive(!active)}
    />
  );
};

export default ServiceCard;
