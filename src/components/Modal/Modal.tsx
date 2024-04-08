import { useModal } from "../../contexts/ModalContext";

function Modal({ children }: { children: React.ReactNode }) {
  const { close } = useModal();

  return (
    <div
      onClick={close}
      className="bg-black/40 fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center"
    >
      <section
        onClick={(e) => e.stopPropagation()}
        className="w-[400px] p-10 bg-white rounded-xl shadow-2xl"
      >
        {children}
      </section>
    </div>
  );
}

export default Modal;
