import { FC, ReactNode } from "react";
import classes from "./imageWrapper.module.css";

type TImageWrapperUI = {
  children: ReactNode;
};

const ImageWrapperUI: FC<TImageWrapperUI> = ({ children }) => {
  return <div className={classes.imageWrapper}>{children}</div>;
};

export default ImageWrapperUI;
