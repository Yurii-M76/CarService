import { FC } from "react";
import { TSurveyUI } from "../../../types";

const SurveyUI: FC<TSurveyUI> = ({ title, description, children }) => {
  return (
    <>
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
      {children}
    </>
  );
};

export default SurveyUI;
