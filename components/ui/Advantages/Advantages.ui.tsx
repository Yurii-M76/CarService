import ContentUI from "../Content/Content.ui";
import ButtonUI from "../Button/Button.ui";

const AdvantagesUI = () => {
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
      Список преимуществ
    </>
  );
};

export default AdvantagesUI;
