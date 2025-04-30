import { ChangeEventHandler, FC } from "react";
import classes from "../inputs.module.css";

type TInputUI = {
  type: "text" | "tel" | "number" | "email" | "password";
  id?: string;
  name?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
};

const InputUI: FC<TInputUI> = ({
  type,
  id,
  name,
  placeholder,
  defaultValue,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
      className={classes.input}
    />
  );
};

export default InputUI;
