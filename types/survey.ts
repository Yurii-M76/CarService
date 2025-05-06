import { ReactNode } from "react";

type TSurveyItem = {
  label: string;
  values?: string[];
  description?: string;
};

export type TSurveyItems = {
  problem: TSurveyItem;
  release: TSurveyItem;
  odometer: TSurveyItem;
  model: TSurveyItem;
  components: TSurveyItem;
  contact: TSurveyItem;
};

export type TSurveyUI = {
  title?: string;
  description?: string;
  children: ReactNode;
};
