import classes from "./map.module.css";

const MapUI = () => {
  return (
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae356b09bc39fae830a4828c41c5071f55d84d3d896ab7ace1da95043af874a28&amp;source=constructor"
      className={classes.iframe}
    ></iframe>
  );
};

export default MapUI;
