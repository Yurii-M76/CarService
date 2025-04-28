"use client";
import { FC } from "react";
import Link from "next/link";
import classes from "./navbar.module.css";

type TNavbar = {
  links: { path: string; label: string; accent: boolean }[];
};

const Navbar: FC<TNavbar> = ({ links }) => {
  return (
    <>
      <nav className={classes.navbar}>
        <ul className={classes.list}>
          {links.map((link, index) => (
            <li key={link.path} className={classes.item}>
              <Link
                href={link.path}
                className={[classes.link, link.accent && classes.accent]
                  .filter(Boolean)
                  .join(" ")}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={classes.burger}>Burger</div>
      </nav>
    </>
  );
};

export default Navbar;
