"use client";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import ButtonUI from "../Button/Button.ui";
import classes from "./survey.module.css";

type TInitialState = {
  problem: string;
  release: string;
  odometer: string;
  model: string;
  components: string;
  contactName: string;
  contactPhone: string;
  contactMethod: string;
  note: string;
};

const inputValues = {
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

const SurveyUI = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const nextStep = () =>
    setCurrentStep((current) => (current < 5 ? current + 1 : current));
  const prevStep = () =>
    setCurrentStep((current) => (current > 0 ? current - 1 : current));

  const initialValues: TInitialState = {
    problem: "",
    release: "",
    odometer: "",
    model: "",
    components: "",
    contactName: "",
    contactPhone: "",
    contactMethod: "",
    note: "",
  };
  const { getValues, setValue } = useForm<TInitialState>({
    defaultValues: initialValues,
  });

  const radioInputs = (step: keyof TInitialState, values: string[]) => {
    const inputs = values.map((value, index) => (
      <div key={index} className={classes.radioItem}>
        <input
          type="radio"
          id={index.toString()}
          name={step}
          value={value}
          defaultChecked={getValues()[step] === value}
          onChange={(event) => {
            setValue(step, event.currentTarget.value);
          }}
        />
        <label htmlFor={index.toString()}>{value}</label>
      </div>
    ));

    return <div className={classes.radioGroup}>{inputs}</div>;
  };

  const problem = (
    <>
      <h3>{inputValues.problem.label}</h3>

      <div className={classes.inputGroup}>
        {radioInputs("problem", inputValues.problem.values)}

        <textarea
          name=""
          id=""
          cols={30}
          rows={8}
          placeholder="Ваш комментарий"
          className={classes.input}
          defaultValue={getValues().note}
          onChange={(event) => setValue("note", event.currentTarget.value)}
        />
      </div>
    </>
  );

  const release = (
    <>
      <h3>{inputValues.release.label}</h3>
      <input
        type="text"
        className={classes.input}
        placeholder="2012"
        defaultValue={getValues().release}
        onChange={(event) => setValue("release", event.currentTarget.value)}
      />
    </>
  );

  const odometer = (
    <>
      <h3>{inputValues.odometer.label}</h3>
      {radioInputs("odometer", inputValues.odometer.values)}
    </>
  );

  const model = (
    <>
      <h3>{inputValues.model.label}</h3>
      <input
        type="text"
        className={classes.input}
        placeholder="Hyundai Solaris"
        defaultValue={getValues().model}
        onChange={(event) => setValue("model", event.currentTarget.value)}
      />
    </>
  );

  const components = (
    <>
      <h3>{inputValues.components.label}</h3>
      {radioInputs("components", inputValues.components.values)}
    </>
  );

  const contact = (
    <>
      <h3>{inputValues.contact.label}</h3>
      <p>{inputValues.contact.description}</p>

      <div className={classes.inputGroup}>
        <input
          type="text"
          className={classes.input}
          placeholder="Ваше имя"
          defaultValue={getValues().contactName}
          onChange={(event) =>
            setValue("contactName", event.currentTarget.value)
          }
        />
        <input
          type="tel"
          className={classes.input}
          placeholder="Номер телефона"
          defaultValue={getValues().contactPhone}
          onChange={(event) =>
            setValue("contactPhone", event.currentTarget.value)
          }
        />
      </div>

      {radioInputs("contactMethod", inputValues.contact.values)}
    </>
  );

  const parts = [problem, release, odometer, model, components, contact];

  const formBody = parts.map((part, index) => {
    return (
      currentStep === index && (
        <div key={index} className={classes.formBody}>
          {part}
        </div>
      )
    );
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(getValues());
  };

  console.log(currentStep);

  return (
    <>
      <h2>Расчет стоимости ремонта</h2>
      <p>Ответьте на 5 вопросов и получите скидку 10% на диагностику</p>

      <form method="post" className={classes.form} onSubmit={handleSubmit}>
        {formBody}
        <div className={classes.buttonGroup}>
          {currentStep > 0 && (
            <ButtonUI
              label="Назад"
              variant="outline"
              type="button"
              onClick={prevStep}
            />
          )}

          <ButtonUI
            label={currentStep < 5 ? "Дальше" : "Узнать стоимость"}
            variant="accent"
            type={currentStep === 5 ? "submit" : "button"}
            onClick={currentStep < 5 ? nextStep : undefined}
            isDisabled={getValues().contactPhone === "" ? true : false}
          />
        </div>
      </form>
    </>
  );
};

export default SurveyUI;
