import ServiceCard from "../service-card/ServiceCard";
import { ServicesUI } from "../ui";

const cards = [
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

const Services = () => {
  return (
    <ServicesUI title="Услуги">
      {cards.map((item, index) => (
        <ServiceCard
          key={index}
          label={item.label}
          price={item.price}
          promo={item.promo}
          image={item.image}
        />
      ))}
    </ServicesUI>
  );
};

export default Services;
