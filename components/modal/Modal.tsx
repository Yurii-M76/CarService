"use client";
import { FC, ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ModalUI } from "../ui";

type TModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
};

const AppModal: FC<TModalProps> = ({ title, children, isOpen, onClose }) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  const [root, setRoot] = useState<HTMLElement | null>(null);

  if (root) root.dataset.scrollLocked = isOpen ? "1" : "0";
  if (modalRoot)
    isOpen
      ? modalRoot.classList.add("open")
      : modalRoot.classList.remove("open");

  useEffect(() => {
    setRoot(document.body);
    setModalRoot(document.getElementById("modals"));
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      e.key === "Escape" && onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    isOpen &&
    ReactDOM.createPortal(
      <ModalUI title={title} onClose={onClose}>
        {children}
      </ModalUI>,
      modalRoot as HTMLDivElement
    )
  );
};

export default AppModal;
