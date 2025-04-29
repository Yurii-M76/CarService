export type TSurveyItem = {
  label: string;
  values?: string[];
  description?: string;
};

export type TSurveyItems = {
  items: {
    problem: TSurveyItem;
    release: TSurveyItem;
    odometer: TSurveyItem;
    model: TSurveyItem;
    components: TSurveyItem;
    contact: TSurveyItem;
  };
};
