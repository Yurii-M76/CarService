import { ChangeEventHandler, FC } from "react";
import classes from "../inputs.module.css";

type TTextAreaUI = {
  cols: number;
  rows: number;
  id?: string;
  name?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
};

const TextAreaUI: FC<TTextAreaUI> = ({
  cols,
  rows,
  id,
  name,
  placeholder,
  defaultValue,
  onChange,
}) => {
  return (
    <textarea
      id={id}
      name={name}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      className={classes.input}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

export default TextAreaUI;
