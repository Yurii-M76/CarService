import { FC, ReactNode } from "react";
import Image from "next/image";
import ImageWrapperUI from "../ImageWrapper/ImageWrapper.ui";
import classes from "./content.module.css";

type TContentUI = {
  variant: "leftImage" | "rightImage";
  title: string;
  pathImage: string;
  widthImage?: number;
  heightImage?: number;
  gapContent?: "sm" | "md" | "lg";
  marginX?: boolean;
  children?: ReactNode;
};

const ContentUI: FC<TContentUI> = ({
  title,
  pathImage,
  children,
  variant,
  widthImage,
  heightImage,
  gapContent,
  marginX,
}) => {
  const gap = gapContent && {
    gap: {
      sm: "var(--app-spacing-20)",
      md: "var(--app-spacing-40)",
      lg: "var(--app-spacing-60)",
    }[gapContent],
  };

  const margin = marginX
    ? {
        margin: "0 var(--app-spacing-80)",
      }
    : undefined;

  const image = (
    <ImageWrapperUI width={widthImage} height={heightImage}>
      <Image
        src={pathImage}
        alt={title}
        width={500}
        height={500}
        loading="lazy"
        className={classes.image}
      />
    </ImageWrapperUI>
  );

  const text = (
    <div className={classes.content} style={{ ...gap }}>
      <h2>{title}</h2>
      {children && <div className={classes.paragraph}>{children}</div>}
    </div>
  );

  const content =
    variant === "leftImage" ? (
      <>
        {image}
        {text}
      </>
    ) : (
      <>
        {text}
        {image}
      </>
    );

  return (
    <div className={classes.container} style={margin}>
      {content}
    </div>
  );
};

export default ContentUI;
