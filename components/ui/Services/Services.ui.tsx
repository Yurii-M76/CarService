import ServiceCard from "../ServiceCard/ServiceCard.ui";
import classes from "./services.module.css";

const mockItems = [
  {
    label: "Диагностика",
    price: 700,
    promo: true,
    image: "/servicesCard/bg-car-2.png",
  },
  {
    label: "Ремонт двигателя",
    price: 6000,
    promo: true,
    image: "/servicesCard/bg-car-7.png",
  },
  {
    label: "Ремонт МКПП и роботизированной DSG",
    price: 2000,
    promo: false,
    image: "/servicesCard/bg-car-8.png",
  },
  {
    label: "Ремонт ходовой",
    price: 1500,
    promo: false,
    image: "/servicesCard/bg-car-9.png",
  },
  {
    label: "Ремонт рулевого управления",
    price: 7500,
    promo: true,
    image: "/servicesCard/bg-car-10.png",
  },
  {
    label: "Ремонт тормозной системы",
    price: 1500,
    promo: true,
    image: "/servicesCard/bg-car-11.png",
  },
  {
    label: "Техническое обслуживание",
    price: 1000,
    promo: false,
    image: "/servicesCard/bg-car-2.png",
  },
  {
    label: "Ремонт системы охлаждения",
    price: 1500,
    promo: false,
    image: "/servicesCard/bg-car-12.png",
  },
  {
    label: "Ремонт выхлопной системы",
    price: 2000,
    promo: false,
    image: "/servicesCard/bg-car-4.png",
  },
  { label: "Ремонт топливной системы", price: 700, promo: false, image: "" },
  {
    label: "Автозапчасти",
    price: 500,
    promo: false,
    image: "/servicesCard/bg-car-3.png",
  },
  { label: "Ремонт трансмиссии", price: 2000, promo: false, image: "" },
];

const ServicesUI = () => {
  const cards = mockItems.map((item, index) => {
    return (
      <ServiceCard
        key={index}
        label={item.label}
        price={item.price}
        promo={item.promo}
        image={item.image}
      />
    );
  });

  return (
    <div className={classes.services}>
      <h2 className={classes.title}>Услуги</h2>
      <div className={classes.cards}>{cards}</div>
    </div>
  );
};

export default ServicesUI;
