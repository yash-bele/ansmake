import { BsPatchCheckFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import {
  FaEnvelope,
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaYoutube,
  FaDiscord,
  FaTiktok,
  FaLinkedin,
  FaSpotify,
  FaAppStoreIos,
} from 'react-icons/fa';

const Header = () => {
  return (
    <main className='text-white w-[90%] md:w-[700px] mx-auto flex justify-center font-mont -mt-12'>
      <section className='flex flex-col items-center'>
        <img
          className='w-24 rounded-full mb-2 mt-7'
          src='https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,w_300,h_300/user-image/page/087c4922-3aae-4514-96a1-a48d63f51725?_reload=8edf6170-7c77-11ed-a933-756888ab287c'
          alt='person'
        />
        <h1 className='flex items-center font-bold text-lg mb-0.5'>
          J Johnson Jr <BsPatchCheckFill className='text-blue-700 ml-1' />
        </h1>
        <p className='font-light text-sm tracking-wide mb-1.5 text-center'>
          Created by different elements ⚛️ Athlete & CEO
        </p>
        <p className='flex items-center font-light text-sm tracking-wide'>
          <MdLocationOn className='font-bold text-base' />
          Raleigh, NC
        </p>
        <section className='flex flex-wrap justify-center items-center mt-2'>
          <div className='group mx-2 mt-2'>
            <div className='group-hover:-translate-y-1 duration-300 cursor-pointer border border-2 border-white p-2.5 rounded-full'>
              <FaEnvelope className='text-xl' />
            </div>
          </div>
          <div className='group mx-2 mt-2'>
            <div className='group-hover:-translate-y-1 duration-300 cursor-pointer border border-2 border-white p-2.5 rounded-full'>
              <FaInstagram className='text-xl' />
            </div>
          </div>
          <div className='group mx-2 mt-2'>
            <div className='group-hover:-translate-y-1 duration-300 cursor-pointer border border-2 border-white p-2.5 rounded-full'>
              <FaTwitch className='text-xl' />
            </div>
          </div>
          <div className='group mx-2 mt-2'>
            <div className='group-hover:-translate-y-1 duration-300 cursor-pointer border border-2 border-white p-2.5 rounded-full'>
              <FaTwitter className='text-xl' />
            </div>
          </div>
          <div className='group mx-2 mt-2'>
            <div className='group-hover:-translate-y-1 duration-300 cursor-pointer border border-2 border-white p-2.5 rounded-full'>
              <FaYoutube className='text-xl' />
            </div>
          </div>
          <div className='group mx-2 mt-2'>
            <div className='group-hover:-translate-y-1 duration-300 cursor-pointer border border-2 border-white p-2.5 rounded-full'>
              <FaDiscord className='text-xl' />
            </div>
          </div>
          <div className='group mx-2 mt-2'>
            <div className='group-hover:-translate-y-1 duration-300 cursor-pointer border border-2 border-white p-2.5 rounded-full'>
              <FaTiktok className='text-xl' />
            </div>
          </div>
          <div className='group mx-2 mt-2'>
            <div className='group-hover:-translate-y-1 duration-300 cursor-pointer border border-2 border-white p-2.5 rounded-full'>
              <FaLinkedin className='text-xl' />
            </div>
          </div>
          <div className='group mx-2 mt-2'>
            <div className='group-hover:-translate-y-1 duration-300 cursor-pointer border border-2 border-white p-2.5 rounded-full'>
              <FaSpotify className='text-xl' />
            </div>
          </div>
          <div className='group mx-2 mt-2'>
            <div className='group-hover:-translate-y-1 duration-300 cursor-pointer border border-2 border-white p-2.5 rounded-full'>
              <FaAppStoreIos className='text-xl' />
            </div>
          </div>
        </section>
        <h1 className='font-semibold mt-10 mb-7'>Exclusive Content</h1>
      </section>
    </main>
  );
};

export default Header;
