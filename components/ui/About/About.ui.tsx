import { FC } from "react";
import ContentUI from "../Content/Content.ui";
import { TAbout } from "../../../types";

const AboutUI: FC<TAbout> = ({
  title,
  description,
  pathImage,
  positionImage,
}) => {
  return (
    <ContentUI
      variant={positionImage}
      title={title}
      pathImage={pathImage}
      marginX
    >
      <span>{description}</span>
    </ContentUI>
  );
};

export default AboutUI;
