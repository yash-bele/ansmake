import { FaHeart } from 'react-icons/fa';

const Content1 = () => {
  return (
    <main className='text-white w-[90%] md:w-[650px] mx-auto flex justify-center font-mont'>
      <section className='w-full'>
        <h1 className='font-semibold text-center mb-5'>
          Get access to all the following content⬇️
        </h1>
        <section className='h-[175px] border border-2 border-white rounded-xl flex overflow-hidden mb-5'>
          <div className='block sm:hidden w-[35%] bg-cover bg-center bg-[url(https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,h_250,w_125/v1/page-block-image/digital-product/tall/52de6ac1-5eab-11ed-acc0-432ae882870e_62002a70-5eab-11ed-acc0-432ae882870e)]'></div>
          <div className='hidden sm:block w-[35%] bg-cover bg-center bg-[url(https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,h_250,w_340/v1/page-block-image/digital-product/wide/52de6ac1-5eab-11ed-acc0-432ae882870e_d6eac790-5eac-11ed-acc0-432ae882870e)]'></div>
          <div className='w-[65%] flex items-center px-5'>
            <div>
              <h1 className='mb-0.5 font-medium'>Weekly Training</h1>
              <p className='text-[11px] mb-5'>
                Get the inside view of what I did for training every week! FULL
                BREAKDOWN
              </p>
              <button className='text-sm bg-white rounded-xl text-slate-700 px-5 py-2.5 shadow-md hover:shadow-white/70 duration-200'>
                <FaHeart className='inline -mt-0.5 mr-1.5' /> Subscribe
                <span className='hidden sm:inline'> to Unlock</span>
              </button>
            </div>
          </div>
        </section>
        <section className='h-[175px] border border-2 border-white rounded-xl flex overflow-hidden mb-5'>
          <div className='block sm:hidden w-[35%] bg-cover bg-center bg-[url(https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,h_250,w_125/v1/page-block-image/digital-product/tall/e8c75571-5b12-11ed-b724-e90c77c26e8c_74943690-5b13-11ed-b724-e90c77c26e8c)]'></div>
          <div className='hidden sm:block w-[35%] bg-cover bg-center bg-[url(https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,h_250,w_340/v1/page-block-image/digital-product/wide/e8c75571-5b12-11ed-b724-e90c77c26e8c_4fa4cca0-5b13-11ed-b724-e90c77c26e8c)]'></div>
          <div className='w-[65%] flex items-center px-5'>
            <div>
              <h1 className='mb-0.5 font-medium'>Weekly Meals</h1>
              <p className='text-[11px] mb-5'>
                Each week I will document what I eat in an organised fashion
              </p>
              <button className='text-sm bg-white rounded-xl text-slate-700 px-5 py-2.5 shadow-md hover:shadow-white/60 duration-200'>
                <FaHeart className='inline -mt-0.5 mr-1.5' /> Subscribe
                <span className='hidden sm:inline'> to Unlock</span>
              </button>
            </div>
          </div>
        </section>
        <section className='h-[175px] border border-2 border-white rounded-xl flex overflow-hidden mb-16'>
          <div className='block sm:hidden w-[35%] bg-cover bg-center bg-[url(https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,h_250,w_125/v1/page-block-image/digital-product/tall/0862a8b1-5ead-11ed-acc0-432ae882870e_e753dee0-5ead-11ed-acc0-432ae882870e)]'></div>
          <div className='hidden sm:block w-[35%] bg-cover bg-center bg-[url(https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,h_250,w_340/v1/page-block-image/digital-product/wide/0862a8b1-5ead-11ed-acc0-432ae882870e_0a142940-5ead-11ed-acc0-432ae882870e)]'></div>
          <div className='w-[65%] flex items-center px-5'>
            <div>
              <h1 className='mb-0.5 font-medium'>Daily Quote!</h1>
              <p className='text-[11px] mb-5'>
                A quote that will empower you to achieve your dreams!
              </p>
              <button className='text-sm bg-white rounded-xl text-slate-700 px-5 py-2.5 shadow-md hover:shadow-white/50 duration-200'>
                <FaHeart className='inline -mt-0.5 mr-1.5' /> Subscribe
                <span className='hidden sm:inline'> to Unlock</span>
              </button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Content1;
