import { ReactNode } from "react";

export type TServiceCard = {
  label: string;
  price: number;
  promo: boolean;
  image?: string;
};

export type TServiceCardUI = TServiceCard & {
  badge: ReactNode;
  setActive: () => void;
};
