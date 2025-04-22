"use client";
import { FC, useState } from "react";
import { Input, Radio } from "@mantine/core";
import ButtonUI from "../Button/Button.ui";
import classes from "./survey.module.css";

const SurveyUI = () => {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const step_1 = (
    <>
      <h3>С какой проблемой вы хотите к нам обратиться?</h3>

      <div className={classes.inputGroup}>
        <Radio.Group name="problem">
          <div className={classes.radioGroup}>
            <div className={classes.radioItem}>
              <Radio id="1" value="1" color="#ff001d" size="md" />
              <label htmlFor="1">Плановое техобслуживание</label>
            </div>

            <div className={classes.radioItem}>
              <Radio id="2" value="2" color="#ff001d" size="md" />
              <label htmlFor="2">Диагностика</label>
            </div>

            <div className={classes.radioItem}>
              <Radio id="3" value="3" color="#ff001d" size="md" />
              <label htmlFor="3">Посторонний шум</label>
            </div>

            <div className={classes.radioItem}>
              <Radio id="4" value="4" color="#ff001d" size="md" />
              <label htmlFor="4">Неисправность электрики</label>
            </div>

            <div className={classes.radioItem}>
              <Radio id="5" value="5" color="#ff001d" size="md" />
              <label htmlFor="5">После ДТП</label>
            </div>

            <div className={classes.radioItem}>
              <Radio id="6" value="6" color="#ff001d" size="md" />
              <label htmlFor="6">Другое</label>
            </div>
          </div>
        </Radio.Group>

        <textarea
          name=""
          id=""
          cols={30}
          rows={8}
          placeholder="Ваш комментарий"
          className={classes.input}
        />
      </div>
    </>
  );

  const step_2 = (
    <>
      <h3>Укажите год выпуска автомобиля</h3>
      <input type="text" className={classes.input} placeholder="2012" />
    </>
  );

  const step_3 = (
    <>
      <h3>Укажите пробег</h3>
      <Radio.Group name="odometer">
        <div className={classes.radioGroup}>
          <div className={classes.radioItem}>
            <Radio id="7" value="1" color="#ff001d" size="md" />
            <label htmlFor="7">до 15 тыс. км.</label>
          </div>

          <div className={classes.radioItem}>
            <Radio id="8" value="2" color="#ff001d" size="md" />
            <label htmlFor="8">от 15 до 45 тыс. км.</label>
          </div>

          <div className={classes.radioItem}>
            <Radio id="9" value="3" color="#ff001d" size="md" />
            <label htmlFor="9">от 45 до 100 тыс. км.</label>
          </div>

          <div className={classes.radioItem}>
            <Radio id="10" value="4" color="#ff001d" size="md" />
            <label htmlFor="10">от 100 до 200 тыс. км.</label>
          </div>

          <div className={classes.radioItem}>
            <Radio id="11" value="5" color="#ff001d" size="md" />
            <label htmlFor="11">от 200 до 400 тыс. км.</label>
          </div>

          <div className={classes.radioItem}>
            <Radio id="12" value="6" color="#ff001d" size="md" />
            <label htmlFor="12">больше 400 тыс. км.</label>
          </div>
        </div>
      </Radio.Group>
    </>
  );

  const step_4 = (
    <>
      <h3>Укажите марку и модель</h3>
      <input
        type="text"
        className={classes.input}
        placeholder="Hyundai Solaris"
      />
    </>
  );

  const step_5 = (
    <>
      <h3>Какие расходные комплектующие и материалы предпочитаете?</h3>
      <Radio.Group name="accessories">
        <div className={classes.radioGroup}>
          <div className={classes.radioItem}>
            <Radio id="13" value="1" color="#ff001d" size="md" />
            <label htmlFor="13">Только оригинальные</label>
          </div>

          <div className={classes.radioItem}>
            <Radio id="14" value="2" color="#ff001d" size="md" />
            <label htmlFor="14">Рекомендованные от известных брендов</label>
          </div>

          <div className={classes.radioItem}>
            <Radio id="15" value="3" color="#ff001d" size="md" />
            <label htmlFor="15">Рассмотрю все варианты</label>
          </div>
        </div>
      </Radio.Group>
    </>
  );

  const step_6 = (
    <>
      <h3>Все готово для рассчета стоимости ремонта</h3>
      <p>
        Заполните поля "Имя", "Телефон" и выберите предпочтительный способ для
        связи
      </p>

      <div className={classes.inputGroup}>
        <input type="text" className={classes.input} placeholder="Ваше имя" />
        <input
          type="text"
          className={classes.input}
          placeholder="Номер телефона"
        />
      </div>

      <Radio.Group name="accessories">
        <div className={classes.radioGroup}>
          <div className={classes.radioItem}>
            <Radio id="16" value="1" color="#ff001d" size="md" />
            <label htmlFor="16">Whats App</label>
          </div>

          <div className={classes.radioItem}>
            <Radio id="17" value="2" color="#ff001d" size="md" />
            <label htmlFor="17">Telegram</label>
          </div>

          <div className={classes.radioItem}>
            <Radio id="18" value="3" color="#ff001d" size="md" />
            <label htmlFor="18">Звонок</label>
          </div>
        </div>
      </Radio.Group>
    </>
  );

  const steps = [step_1, step_2, step_3, step_4, step_5, step_6];

  const formBody = steps.map((step, index) => {
    return (
      active === index && (
        <div key={index} className={classes.formBody}>
          {step}
        </div>
      )
    );
  });

  return (
    <>
      <h2>Расчет стоимости ремонта</h2>
      <p>Ответьте на 5 вопросов и получите скидку 10% на диагностику</p>

      <form action="" method="post" className={classes.form}>
        {formBody}
        <div className={classes.buttonGroup}>
          {active > 0 && (
            <ButtonUI
              label="Назад"
              variant="outline"
              type="button"
              onClick={prevStep}
            />
          )}

          <ButtonUI
            label={active < 5 ? "Дальше" : "Узнать стоимость"}
            variant="accent"
            type="button"
            onClick={nextStep}
          />
        </div>
      </form>
    </>
  );
};

export default SurveyUI;
