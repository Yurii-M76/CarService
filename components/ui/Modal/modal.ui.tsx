import { FC, memo, ReactNode } from "react";
import ActionIconUI from "../ActionIcon/ActionIcon.ui";
import ModalOverlayUI from "../Modal-overlay/modal-overlay";
import classes from "./modal.module.css";

type TModalUI = {
  title: string;
  onClose: () => void;
  children?: ReactNode;
};

const ModalUI: FC<TModalUI> = memo(({ title, children, onClose }) => {
  return (
    <>
      <div id="modal" className={classes.modal}>
        <div className={classes.header}>
          <h4 className={classes.title}>{title}</h4>
          <ActionIconUI onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </ActionIconUI>
        </div>
        {children}
      </div>
      <ModalOverlayUI onClick={onClose} />
    </>
  );
});

export default ModalUI;
