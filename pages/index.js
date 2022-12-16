import Head from 'next/head';
import { MdOutlineFileUpload } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import Content1 from '../components/Content1';
import Content2 from '../components/Content2';
import Header from '../components/Header';
import ParticlesBG from '../components/ParticlesBG';

const Home = () => {
  return (
    <>
      <Head>
        <title>Ansmake | YashB</title>
        <meta name='description' content='Website' />
        <link rel='icon' href='' />
      </Head>
      <main className='h-full absolute w-full scrollbar-thin scrollbar-thumb-white/25 hover:scrollbar-thumb-white/50 scrollbar-thumb-rounded-full'>
        <ParticlesBG />
        <main className='w-fit mx-auto'>
          <section className='sticky top-3 w-[90%] md:w-[650px] mx-auto flex justify-between z-10'>
            <div className='text-2xl bg-white p-2 rounded-full cursor-pointer w-fit'>
              <MdOutlineFileUpload className='text-black' />
            </div>
            <div className='w-[40px] sm:w-auto text-2xl bg-white p-2 rounded-3xl px-3 cursor-pointer w-fit flex items-center'>
              <FaHeart className='sm:mr-2 text-[15px] text-blue-700' />
              <p className='hidden sm:block text-blue-700 text-sm font-semibold'>
                Subscribe
              </p>
            </div>
          </section>
          <Header />
          <Content1 />
          <Content2 />
        </main>
      </main>
    </>
  );
};

export default Home;
