import TT1F from "./1f";
import TT2F from "./2f";
import TT3F from "./3f";
import TT4F from "./4f";

interface IProps {
  floor: number;
}

export default function Thanatos({ floor }: IProps) {
  return (
    <>
      {floor === 1 ? <TT1F /> : null}
      {floor === 2 ? <TT2F /> : null}
      {floor === 3 ? <TT3F /> : null}
      {floor === 4 ? <TT4F /> : null}
    </>
  );
}
