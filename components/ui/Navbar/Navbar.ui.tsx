"use client";
import { FC } from "react";
import classes from "./navbar.module.css";
import Link from "next/link";
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

type TNavbar = {
  links: { path: string; label: string; accent: boolean }[];
};

const Navbar: FC<TNavbar> = ({ links }) => {
  const [opened, { toggle }] = useDisclosure();
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

        <Burger
          className={classes.mobile}
          opened={opened}
          onClick={toggle}
          aria-label="Toggle navigation"
          color="var(--app-accent-color)"
        />
      </nav>
    </>
  );
};

export default Navbar;
