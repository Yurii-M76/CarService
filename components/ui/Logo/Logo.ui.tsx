import Image from "next/image";
import Link from "next/link";
import classes from "./logo.module.css";

const LogoUI = () => {
  return (
    <Link href="/" className={classes.logo}>
      <Image
        src="/logo.svg"
        alt="Логотип"
        width={100}
        height={100}
        className={classes.image}
      />
      <span className={classes.label}>CarService</span>
    </Link>
  );
};

export default LogoUI;
