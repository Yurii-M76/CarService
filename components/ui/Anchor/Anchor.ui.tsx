import { FC } from "react";
import classes from "./anchor.module.css";

type TAnchorUI = {
  path: string;
  label: string;
  variant: "accent" | "white" | "outline";
};

const AnchorUI: FC<TAnchorUI> = ({ path, label, variant }) => {
  const classNames = [
    classes.ancher,
    variant === "accent" ? classes.accent : null,
    variant === "outline" ? classes.outline : null,
    variant === "white" ? classes.white : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={path} className={classNames}>
      {label}
    </a>
  );
};

export default AnchorUI;
