import { FC } from "react";
import classes from "./navbar.module.css";

type TNavbar = {
  links: { path: string; label: string; accent: boolean }[];
};

const Navbar: FC<TNavbar> = ({ links }) => {
  return "Navbar";
};

export default Navbar;
