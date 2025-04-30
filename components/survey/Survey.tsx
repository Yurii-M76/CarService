"use client";
import { useState } from "react";
import { TSurveyItems } from "../../types";
import { SurveyUI, SurveyFormUI } from "../ui";

const data: TSurveyItems = {
  problem: {
    label: "С какой проблемой вы хотите к нам обратиться?",
    values: [
      "Плановое техобслуживание",
      "Диагностика",
      "Посторонний шум",
      "Неисправность электрики",
      "После ДТП",
      "Другое",
    ],
  },
  release: {
    label: "Укажите год выпуска автомобиля",
  },
  odometer: {
    label: "Укажите пробег",
    values: [
      "до 15 тыс. км.",
      "от 15 до 45 тыс. км.",
      "от 45 до 100 тыс. км.",
      "от 100 до 200 тыс. км.",
      "от 200 до 400 тыс. км.",
      "больше 400 тыс. км.",
    ],
  },
  model: {
    label: "Укажите марку и модель",
  },
  components: {
    label: "Какие расходные комплектующие и материалы предпочитаете?",
    values: [
      "Только оригинальные",
      "Рекомендованные от известных брендов",
      "Рассмотрю все варианты",
    ],
  },
  contact: {
    label: "Все готово для рассчета стоимости ремонта",
    description:
      'Заполните поля "Имя", "Телефон" и выберите предпочтительный способ для связи',
    values: ["Whats App", "Telegram", "Звонок"],
  },
};

const Survey = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const nextStep = () =>
    setCurrentStep((current) => (current < 5 ? current + 1 : current));
  const prevStep = () =>
    setCurrentStep((current) => (current > 0 ? current - 1 : current));

  return (
    <SurveyUI
      title="Расчет стоимости ремонта"
      description="Ответьте на 5 вопросов и получите скидку 10% на диагностику"
    >
      <SurveyFormUI
        items={data}
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted}
      />
    </SurveyUI>
  );
};

export default Survey;
