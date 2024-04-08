import Button from "../../components/Button";
import Page from "../../components/Page";

function HomePage() {
  return (
    <Page>
      <div className="grow flex flex-col items-center justify-center gap-y-20">
        <h1 className="font-bold text-4xl">
          Context API를 사용해서 Modal Service 만들어 보기
        </h1>

        <div className="flex items-center gap-x-5">
          <Button>버튼 1</Button>
          <Button className="bg-red-500">버튼 2</Button>
          <Button className="bg-sky-500">버튼 3</Button>
        </div>
      </div>
    </Page>
  );
}

export default HomePage;
