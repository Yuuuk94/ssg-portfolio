import Link from "next/link";

const Main = () => {
  return (
    <div>
      <h2 className="underline">
        안녕하세요. 씩씩한 프론트엔드 개발자, 신유경입니다.
      </h2>
      <p>
        <Link href="/about">더보기</Link>
      </p>
    </div>
  );
};

export default Main;
