import ContentUI from "../Content/Content.ui";
import ButtonUI from "../Button/Button.ui";
import classes from "./advantages.module.css";
import Image from "next/image";

const AdvantagesUI = () => {
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
        variant="rightImage"
        title="Ваша задача будет решена профессионально и без очередей"
        pathImage="/advantages.jpg"
        heightImage={425}
        gapContent="md"
        marginX
      >
        <ButtonUI
          type="button"
          label="Записаться на диагностику"
          variant="accent"
        />
      </ContentUI>

      <ul className={classes.list}>
        <li className={classes.item}>
          {itemIcon}
          Каждый автомобиль — это отдельный проект, который закрепляется за
          мастером.
        </li>
        <li className={classes.item}>
          {itemIcon}
          Разработанные стратегии, в нескольких ценовых вариантах, утверждаем
          лично с Вами. Вы выбираете какой вариант ремонта более предпочтителен
          по бюджету и срокам.
        </li>
        <li className={classes.item}>
          {itemIcon}
          Машина диагностируется и детально изучается группой мастеров, далее мы
          подбираем правильную стратегию ремонта.
        </li>
      </ul>
    </>
  );
};

export default AdvantagesUI;
