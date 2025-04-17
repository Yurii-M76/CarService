import ContentUI from "../Content/Content.ui";

const AboutUI = () => {
  return (
    <ContentUI
      variant="leftImage"
      title="Профессиональные механики с большим опытом работы"
      pathImage="/about-image.jpg"
      marginX
    >
      <span>
        Узнайте цену ремонта своего авто за 1 минуту и получите скидку на
        диагностику <strong>10%*</strong>
      </span>
    </ContentUI>
  );
};

export default AboutUI;
