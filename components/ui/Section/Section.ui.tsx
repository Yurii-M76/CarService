import { FC, ReactNode } from "react";
import classes from "./section.module.css";

type TSectionUI = {
  children: ReactNode;
  paddingX: boolean;
  bgColor?: "gray" | "red";
  bgImage?: string;
  pt?: number;
  pb?: number;
  h?: number;
};

const SectionUI: FC<TSectionUI> = ({
  bgColor,
  bgImage,
  paddingX,
  pt,
  pb,
  h,
  children,
}) => {
  const backgroundColor =
    bgColor === "gray"
      ? "var(--app-bg-color-gray)"
      : bgColor === "red"
      ? "var(--app-accent-color)"
      : undefined;

  const paddingTop = pt !== undefined ? `${pt}px` : undefined;
  const paddingBottom = pb !== undefined ? `${pb}px` : undefined;
  const backgroundImage = bgImage ? `url(/${bgImage})` : undefined;
  const backgroundRepeat = bgImage ? "no-repeat" : undefined;
  const backgroundSize = bgImage ? "cover" : undefined;
  const backgroundPosition = bgImage ? "top" : undefined;
  const height = h ? h : undefined;

  const paddingLeft = !paddingX ? 0 : undefined;
  const paddingRight = !paddingX ? 0 : undefined;

  return (
    <div
      className={classes.section}
      style={{
        backgroundColor,
        backgroundImage,
        backgroundRepeat,
        backgroundSize,
        backgroundPosition,
        paddingTop,
        paddingBottom,
        height,
        paddingLeft,
        paddingRight,
      }}
    >
      {children}
    </div>
  );
};

export default SectionUI;
