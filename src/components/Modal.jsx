import { cloneElement, createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";

const ModalContext = createContext(null);

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const open = setOpenName;
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("Modal compound components must be used inside <Modal>.");
  }

  return context;
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useModalContext();

  return cloneElement(children, {
    onClick: () => open(opensWindowName),
  });
}

function Close({ children }) {
  const { close } = useModalContext();

  return cloneElement(children, {
    onClick: close,
  });
}

function Window({ children, name }) {
  const { openName, close } = useModalContext();

  useEffect(() => {
    if (openName !== name) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [close, name, openName]);

  if (openName !== name) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/50 p-4"
      onClick={close}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          className="absolute right-4 top-4 rounded-full bg-surface-100 p-2 text-ink-600 transition hover:bg-surface-200"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        {cloneElement(children, { onCloseModal: close })}
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Close = Close;
Modal.Window = Window;

export default Modal;
