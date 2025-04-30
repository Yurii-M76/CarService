import { FC } from "react";
import { TSurveyUI } from "../../../types";

const SurveyUI: FC<TSurveyUI> = ({ title, description, children }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </>
  );
};

export default SurveyUI;
