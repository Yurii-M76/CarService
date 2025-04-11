import { FC } from "react";
import classes from "./button.module.css";

type TButtonUI = {
  label: string;
  variant: "accent" | "outline";
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  onClick?: () => void;
};

const ButtonUI: FC<TButtonUI> = ({
  type,
  label,
  variant,
  onClick,
  isDisabled,
}) => {
  const classNames = [
    classes.button,
    variant === "accent" ? classes.accent : null,
    variant === "outline" ? classes.outline : null,
    isDisabled ? classes.disabled : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type ? type : "button"}
      className={classNames}
      onClick={onClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

export default ButtonUI;
