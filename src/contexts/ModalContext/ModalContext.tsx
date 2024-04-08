import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type ModalContextValue = {
  open: (modalElement: React.ReactElement) => void;
  close: () => void;
};

const initialValue: ModalContextValue = {
  open: () => {},
  close: () => {},
};

// 1. 만든다 -> createContext
const ModalContext = createContext<ModalContextValue>(initialValue);

// 2. 사용한다 -> useContext
export const useModal = () => useContext(ModalContext);

// 3. 범위를 정해서 값을 내려준다 -> Provider, value 사용하겠다
export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState<React.ReactElement | null>(null);

  const open: ModalContextValue["open"] = useCallback(
    (modalElement) => setModal(modalElement),
    []
  );
  const close: ModalContextValue["close"] = useCallback(
    () => setModal(null),
    []
  );

  const value: ModalContextValue = useMemo(
    () => ({ open, close }),
    [open, close]
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modal}
    </ModalContext.Provider>
  );
}
