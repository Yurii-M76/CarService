import { ReactNode } from "react";

export type TBrandList = { icon: string; label: string }[];

export type TBrands = {
  title: string;
  children: ReactNode;
};
