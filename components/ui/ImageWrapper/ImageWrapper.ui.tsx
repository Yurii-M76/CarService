import { FC, ReactNode } from "react";
import classes from "./imageWrapper.module.css";

type TImageWrapperUI = {
  children: ReactNode;
  width?: number;
  height?: number;
};

const ImageWrapperUI: FC<TImageWrapperUI> = ({ children, width, height }) => {
  return (
    <div
      className={classes.imageWrapper}
      style={{ inlineSize: `${width}px`, maxBlockSize: `${height}px` }}
    >
      {children}
    </div>
  );
};

export default ImageWrapperUI;
