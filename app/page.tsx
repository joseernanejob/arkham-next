export default function Home() {
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
          <a className='nav-Select' href='#'>
            HOME
          </a>
          <a className='nav' href='/conteudos'>
            CONTEÚDOS
          </a>
          <a className='nav' href='#'>
            CLASSES
          </a>
        </nav>
      </header>
      <main className='h-full w-full bg-black bg-opacity-70'>
        <div className='h-full w-full flex flex-col pt-[68px] pl-[60px] gap-0 '>
          <h2 className='text-white font-bold text-[20px]'>BEM-VINDO A</h2>
          <h1 className='text-[#fff500] text-[40px] font-bold'>ARKHAM</h1>
          <p className='text-white font-medium text-[12px] w-[300px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </main>
    </div>
  );
}
