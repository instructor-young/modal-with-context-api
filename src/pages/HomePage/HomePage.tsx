import Button from "../../components/Button";
import EnglishModal from "../../components/EnglishModal";
import KoreanModal from "../../components/KoreanModal";
import Page from "../../components/Page";
import { useModal } from "../../contexts/ModalContext";

function HomePage() {
  const modalContextValue = useModal();

  const handleClickKoreanModalButton = () =>
    modalContextValue.open(<KoreanModal />);
  const handleClickEnglishModalButton = () =>
    modalContextValue.open(<EnglishModal />);

  return (
    <Page>
      <div className="grow flex flex-col items-center justify-center gap-y-20">
        <h1 className="font-bold text-4xl">
          Context API를 사용해서 Modal Service 만들어 보기
        </h1>

        <div className="flex items-center gap-x-5">
          <Button
            onClick={handleClickKoreanModalButton}
            className="bg-gray-900"
          >
            한국어 모달 띄우기
          </Button>
          <Button
            onClick={handleClickEnglishModalButton}
            className="bg-red-500"
          >
            Open English Modal
          </Button>
        </div>
      </div>
    </Page>
  );
}

export default HomePage;
