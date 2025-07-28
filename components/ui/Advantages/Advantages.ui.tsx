import { FC } from "react";
import Image from "next/image";
import ContentUI from "../Content/Content.ui";
import { AnchorUI } from "../Anchor";
import classes from "./advantages.module.css";

export type TAdvantagesUI = {
  title: string;
  buttonLabel: string;
  image: string;
  advantagesList: string[];
  variant: "leftImage" | "rightImage";
};

const AdvantagesUI: FC<TAdvantagesUI> = ({
  title,
  buttonLabel,
  image,
  advantagesList,
  variant,
}) => {
  const itemIcon = (
    <Image
      src="/advantages/advantages_item.svg"
      alt=""
      width={24}
      height={42}
      className={classes.itemIcon}
    />
  );

  return (
    <>
      <ContentUI
        variant={variant}
        title={title}
        pathImage={image}
        heightImage={425}
        gapContent="md"
        marginX
      >
        <AnchorUI path="#form" label={buttonLabel} variant="accent" />
      </ContentUI>

      <ul className={classes.list}>
        {advantagesList.map((item, index) => (
          <li key={index} className={classes.item}>
            {itemIcon}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AdvantagesUI;
