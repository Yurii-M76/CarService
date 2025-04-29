"use client";
import { useState } from "react";
import AppModal from "../modal/Modal";
import { THeaderValues, TNavigarionItems } from "../../types";
import { ButtonUI, HeaderUI } from "../ui";

const navigarion: TNavigarionItems = [
  { path: "#services", label: "Услуги", accent: false },
  { path: "#about", label: "О нас", accent: false },
  { path: "#contacts", label: "Контакты", accent: false },
];

const values: THeaderValues = {
  phone: "+7 900 000-00-00",
  workSchedule:
    "ПН-ПТ: 9:00 - 18:00, СБ: 9:00-14:00, ВС: выходной (по договоренности)",
  title: "Техобслуживание и ремонт двигателей в Новосибирске",
  accentButtonLabel: "Узнать стоимость ремонта",
  secondaryButtonLabel: "Выезданя диагностика",
};

const Header = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const modal = (
    <AppModal
      title="Заголовок"
      isOpen={openModal}
      onClose={() => setOpenModal(false)}
    >
      Контент
    </AppModal>
  );

  const accentButton = (
    <ButtonUI
      label={values.accentButtonLabel}
      type="button"
      variant="accent"
      onClick={() => setOpenModal(true)}
    />
  );

  const secondaryButtonLabel = (
    <ButtonUI
      label={values.secondaryButtonLabel}
      type="button"
      variant="outline"
    />
  );

  return (
    <HeaderUI
      navigation={navigarion}
      values={values}
      accentButton={accentButton}
      secondaryButtonLabel={secondaryButtonLabel}
    >
      {modal}
    </HeaderUI>
  );
};

export default Header;
