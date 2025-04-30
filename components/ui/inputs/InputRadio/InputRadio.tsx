import { ChangeEventHandler, FC } from "react";
import classes from "../inputs.module.css";

type TInputRadioUI = {
  label: string;
  value?: string | number | readonly string[] | undefined;
  id?: string;
  name?: string;
  defaultChecked?: boolean | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
};

const InputRadioUI: FC<TInputRadioUI> = ({
  label,
  id,
  name,
  value,
  defaultChecked,
  onChange,
}) => {
  return (
    <div className={classes.radio}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default InputRadioUI;
