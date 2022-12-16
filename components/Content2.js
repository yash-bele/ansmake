import { useState } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
// import ReactPlayer from 'react-player';

const Content2 = () => {
  const [showWorkout, setShowWorkout] = useState(true);
  const [showRacing, setShowRacing] = useState(false);

  return (
    <main className='text-white w-[90%] md:w-[650px] mx-auto flex justify-center font-mont'>
      <section className='w-full'>
        <section className='h-[250px] sm:h-[175px] border border-2 border-white rounded-xl sm:flex overflow-hidden mb-5'>
          <div className='h-[70%] sm:h-auto sm:w-[50%] bg-cover bg-center bg-[url(https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,h_320,w_640/v1/page-block-image/digital-product/f2df2a40-feda-11ec-8f06-79a38aecb29d)]'></div>
          <div className='h-[30%] sm:h-auto sm:w-[50%] flex items-center px-5'>
            <button className='w-full text-sm bg-white rounded-xl text-slate-900 font-medium px-5 py-2.5 shadow-md hover:shadow-slate-500 duration-200'>
              Buy for $4.99
            </button>
          </div>
        </section>
        <section className='border border-2 border-white rounded-xl flex overflow-hidden mb-5 flex justify-center py-3 relative'>
          <FaYoutube className='absolute top-[23px] text-lg left-4' />
          <div className='flex flex-col items-center w-full'>
            <h1>Speed Training Playlist</h1>
            <p className='text-[11px] w-[75%] text-center'>
              Get faster for any sport with these speed tips
            </p>
          </div>
        </section>
        <section
          onClick={() => setShowWorkout(!showWorkout)}
          className='border border-2 border-white rounded-xl flex overflow-hidden mb-5 flex justify-center py-3 cursor-pointer relative'
        >
          <FaYoutube className='absolute top-[15px] text-lg left-4' />
          <FiChevronDown
            className={`absolute top-[13px] text-2xl right-3 duration-200 ${
              showWorkout ? 'rotate-180' : 'rotate-0'
            }`}
          />
          <div className='text-center w-full'>
            <h1 className={`${showWorkout && 'mb-10'}`}>
              Workout Vlog With Batman!
            </h1>
            <div
              className={`${
                showWorkout ? 'block' : 'hidden'
              } w-full h-[200px] sm:h-[360px] flex justify-center items-center`}
            >
              <ReactPlayer
                url='https://www.youtube.com/watch?v=fJGDnvoLKFA'
                width={'100%'}
                height={'100%'}
              />
            </div>
          </div>
        </section>
        <section className='border-2 border-white rounded-xl flex overflow-hidden mb-5 flex justify-center py-4 px-6 cursor-pointer relative'>
          <form className='text-center w-full'>
            <h1>Join the squad</h1>
            <p className='text-[11px] mb-5'>
              Know when I drop merch & speed vlogs
            </p>
            <input
              type='text'
              placeholder='Email'
              className='outline-none bg-transparent border border-white rounded-xl w-full text-sm py-3 px-5 mb-3'
            />
            <input
              type='text'
              placeholder='Phone #'
              className='outline-none bg-transparent border border-white rounded-xl w-full text-sm py-3 px-5 mb-5'
            />
            <div className='flex items-center justify-center space-x-4 mb-5'>
              <div className='flex items-center space-x-2'>
                <input
                  type='radio'
                  name='ima'
                  id='fan'
                  defaultChecked='true'
                  className='ring-4 ring-gray-50 checked:ring-4 checked:ring-gray-700 appearance-none rounded-full w-1.5 h-1.5 bg-white'
                />
                <label htmlFor='fan' className='text-xs'>
                  I’m a Fan
                </label>
              </div>
              <div className='flex items-center space-x-2'>
                <input
                  type='radio'
                  name='ima'
                  id='brand'
                  className='ring-4 ring-gray-50 checked:ring-4 checked:ring-gray-700 appearance-none rounded-full w-1.5 h-1.5 bg-white'
                />
                <label htmlFor='brand' className='text-xs'>
                  I’m a Brand
                </label>
              </div>
              <div className='flex items-center space-x-2'>
                <input
                  type='radio'
                  name='ima'
                  id='creator'
                  className='ring-4 ring-gray-50 checked:ring-4 checked:ring-gray-700 appearance-none rounded-full w-1.5 h-1.5 bg-white'
                />
                <label htmlFor='creator' className='text-xs'>
                  I’m a Creator
                </label>
              </div>
            </div>
            <button className='text-sm bg-white rounded-xl text-slate-900 font-medium px-10 py-2.5 shadow-md hover:shadow-slate-500 duration-200'>
              Submit
            </button>
          </form>
        </section>
        <section
          onClick={() => setShowRacing(!showRacing)}
          className='border border-2 border-white rounded-xl flex overflow-hidden mb-10 flex justify-center py-3 cursor-pointer relative'
        >
          <FaYoutube className='absolute top-[15px] text-lg left-4' />
          <FiChevronDown
            className={`absolute top-[13px] text-2xl right-3 duration-200 ${
              showRacing ? 'rotate-180' : 'rotate-0'
            }`}
          />
          <h1>Racing people for $$$</h1>
        </section>
        <div className='w-px h-10'></div>
      </section>
    </main>
  );
};

export default Content2;
