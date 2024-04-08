import { ModalProvider } from "./contexts/ModalContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ModalProvider>
      <HomePage />
    </ModalProvider>
  );
}

export default App;
