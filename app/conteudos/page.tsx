/* eslint-disable @next/next/no-img-element */
"use client";

import Menu from "@/components/MenuCont/MenuCont";
import Thanatos from "@/components/thanatos/thanatos";
import { useState } from "react";

export default function Conteudos() {
  const [conteudo, setConteudo] = useState("thanatos");
  const [floor, setFloor] = useState(1);

  return (
    <div className='relative bg-[url(/images/ragnarok.jpeg)] bg-no-repeat bg-cover min-h-screen h-full'>
      <header
        className='h-20 px-16 flex items-center 
          justify-between bg-black'
      >
        <div className='h-full w-14 flex items-center'>
          <img src='/images/arkham.jpg' alt='Logo arkham' />
        </div>
        <nav className='flex items-center gap-5 h-full'>
          <a className='nav' href='/'>
            HOME
          </a>
          <a className='nav-Select' href='#'>
            CONTEÚDOS
          </a>
          <a className='nav' href='#'>
            CLASSES
          </a>
        </nav>
      </header>
      <main className='h-full w-full bg-black bg-opacity-70 box-border pr-6 flex'>
        <Menu
          conteudo={conteudo}
          setConteudo={setConteudo}
          setFloor={setFloor}
          floor={floor}
        />
        <div className='bg-black h-[500px] w-full mx-11 my-11 overflow-y-auto'>
          {conteudo === "thanatos" ? <Thanatos floor={floor} /> : null}
        </div>
      </main>
    </div>
  );
}
