import Image from "next/image";
import { BrandsUI, ImageWrapperUI } from "..";
import classes from "./about.module.css";

const AboutUI = () => {
  return (
    <div className={classes.about}>
      <div className={classes.content}>
        <ImageWrapperUI>
          <Image
            src="/about-image.jpg"
            alt="image"
            width={500}
            height={500}
            className={classes.image}
          />
        </ImageWrapperUI>
        <div className={classes.group}>
          <h2>Профессиональные механики с большим опытом работы</h2>
          <p>
            Узнайте цену ремонта своего авто за 1 минуту и получите скидку на
            диагностику <strong>10%</strong>*
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUI;
