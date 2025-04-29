import { TAbout } from "../../types";
import { AboutUI } from "../ui";

const about: TAbout = {
  pathImage: "/about-image.jpg",
  positionImage: "leftImage",
  title: "Профессиональные механики с большим опытом работы",
  description:
    "Узнайте цену ремонта своего авто за 1 минуту и получите скидку на диагностику 10%*",
};

const About = () => {
  const { title, description, pathImage } = about;
  return (
    <AboutUI
      title={title}
      description={description}
      pathImage={pathImage}
      positionImage="leftImage"
    />
  );
};

export default About;
