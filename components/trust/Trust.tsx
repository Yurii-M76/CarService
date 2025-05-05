import { TTrust } from "../../types";
import { TrustUI } from "../ui";

const items: TTrust = [
  { icon: "/trust/time.svg", label: "Время", description: "Выдача авто в установленные сроки" },
  { icon: "/trust/diagnostics.svg", label: "Диагностика", description: "Полный осмотр вашего авто профессионалами" },
  { icon: "/trust/prices.svg", label: "Цены", description: "Дешевле и быстрее, чем у официальных диллеров" },
  { icon: "/trust/parts.svg", label: "Запчасти", description: "Помощь в подборе запчастей" },
];

const Trust = () => {
  return <TrustUI title="Что вы получите при работе с нами" items={items} />;
};

export default Trust;
