"use client";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  setConteudo: Dispatch<SetStateAction<string>>;
  conteudo: string;
  setFloor: Dispatch<SetStateAction<number>>;
  floor: number;
}

export default function Menu({
  setConteudo,
  conteudo,
  setFloor,
  floor,
}: IProps) {
  const changeCont = (name: string) => {
    setConteudo(name);
    setFloor(1);
  };
  return (
    <div className='h-full w-[250px] bg-black pt-11 pl-12 flex flex-col gap-4 items-start'>
      <div className='box-border flex flex-col items-center'>
        <button
          className={`${
            conteudo === "thanatos" ? "text-white" : "text-gray-500"
          }  font-bold hover:text-white duration-300`}
          onClick={() => changeCont("thanatos")}
        >
          Thanatos Tower
        </button>
        <div
          className={`${
            conteudo === "thanatos" ? "flex" : "hidden"
          } pt-2 gap-3`}
        >
          <button
            onClick={() => setFloor(1)}
            className={`${
              floor == 1 ? "text-white" : "text-gray-500"
            } font-bold hover:text-white duration-300  `}
          >
            1F
          </button>
          <button
            onClick={() => setFloor(2)}
            className={`${
              floor == 2 ? "text-white" : "text-gray-500"
            } font-bold hover:text-white duration-300  `}
          >
            2F
          </button>
          <button
            onClick={() => setFloor(3)}
            className={`${
              floor == 3 ? "text-white" : "text-gray-500"
            } font-bold hover:text-white duration-300  `}
          >
            3F
          </button>
          <button
            onClick={() => setFloor(4)}
            className={`${
              floor == 4 ? "text-white" : "text-gray-500"
            } font-bold hover:text-white duration-300  `}
          >
            4F
          </button>
        </div>
      </div>
      <div>
        <button
          className={`${
            conteudo === "museu" ? "text-white" : "text-gray-500"
          }  font-bold hover:text-white duration-300`}
          onClick={() => changeCont("museu")}
        >
          Museu Legend
        </button>
      </div>
    </div>
  );
}
