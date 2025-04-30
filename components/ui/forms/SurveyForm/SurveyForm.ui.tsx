import { FC, FormEvent, ReactNode } from "react";
import { useForm } from "react-hook-form";
import { InputRadioUI, InputUI, TextAreaUI } from "../../inputs";
import { ButtonUI } from "../../Button";
import { TSurveyItems } from "../../../../types";
import classes from "./surveyForm.module.css";

type TSurvayFormUI = {
  items: TSurveyItems;
  currentStep: number;
  isCompleted: boolean;
  nextStep: () => void;
  prevStep: () => void;
  setIsCompleted: (v: boolean) => void;
};

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

const SurvayFormUI: FC<TSurvayFormUI> = ({
  items,
  currentStep,
  isCompleted,
  nextStep,
  prevStep,
  setIsCompleted,
}) => {
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
      <InputRadioUI
        key={index}
        id={index.toString()}
        name={step}
        label={value}
        value={value}
        defaultChecked={getValues()[step] === value}
        onChange={(event) => {
          setValue(step, event.currentTarget.value);
        }}
      />
    ));

    return <div className={classes.radioGroup}>{inputs}</div>;
  };

  const problem = (
    <>
      <h3>{items.problem.label}</h3>

      <div className={classes.inputGroup}>
        {radioInputs("problem", items.problem.values || [])}

        <TextAreaUI
          cols={30}
          rows={8}
          placeholder="Ваш комментарий"
          defaultValue={getValues().note}
          onChange={(event) => setValue("note", event.currentTarget.value)}
        />
      </div>
    </>
  );

  const release = (
    <>
      <h3>{items.release.label}</h3>
      <InputUI
        type="text"
        placeholder="2012"
        defaultValue={getValues().release}
        onChange={(event) => setValue("release", event.currentTarget.value)}
      />
    </>
  );

  const odometer = (
    <>
      <h3>{items.odometer.label}</h3>
      {radioInputs("odometer", items.odometer.values || [])}
    </>
  );

  const model = (
    <>
      <h3>{items.model.label}</h3>
      <InputUI
        type="text"
        placeholder="Hyundai Solaris"
        defaultValue={getValues().model}
        onChange={(event) => setValue("model", event.currentTarget.value)}
      />
    </>
  );

  const components = (
    <>
      <h3>{items.components.label}</h3>
      {radioInputs("components", items.components.values || [])}
    </>
  );

  const contact = (
    <>
      <h3>{items.contact.label}</h3>
      <p>{items.contact.description}</p>

      <div className={classes.inputGroup}>
        <InputUI
          type="text"
          placeholder="Ваше имя"
          defaultValue={getValues().contactName}
          onChange={(event) =>
            setValue("contactName", event.currentTarget.value)
          }
        />
        <InputUI
          type="tel"
          placeholder="Номер телефона"
          defaultValue={getValues().contactPhone}
          onChange={(event) => {
            setValue("contactPhone", event.currentTarget.value);
            setIsCompleted(event.currentTarget.value.length > 9);
          }}
        />
      </div>

      {radioInputs("contactMethod", items.contact.values || [])}
    </>
  );

  const parts: ReactNode[] = [
    problem,
    release,
    odometer,
    model,
    components,
    contact,
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form method="post" className={classes.form} onSubmit={handleSubmit}>
      {parts.length
        ? parts.map(
            (part, index) =>
              currentStep === index && (
                <div key={index} className={classes.formBody}>
                  {part}
                </div>
              )
          )
        : null}
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
          isDisabled={currentStep === 5 && !isCompleted ? true : false}
        />
      </div>
    </form>
  );
};

export default SurvayFormUI;
