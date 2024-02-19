import React from 'react';

export default function Home() {
  return (
    <main className='max-w-[62rem] mx-auto min-h-[79.5vh] m-[1.5rem] bg-gray-100 bg-opacity-90 rounded-lg p-3 flex items-center flex-col mb-8 pb-6'>
      <header>
        <h1 className='font-bold text-3xl text-center italic font-custom tracking-wide text-blue-900 mt-2'>Ski Blog</h1>
      </header>

      <div className="entry w-full lg:w-11/12 flex flex-row mb-6 mt-6 gap-6">
        <div className='w-1/3 mt-1'>
          <img src="https://www.fischersports.com/media/image/a9/a8/e6/ImageLibraryKraft101222vt2660_670x670.jpg" alt="jumper" className="w-full h-auto" />
        </div>
        <div className='w-2/3'>
          <h2 className='text-xl font-bold mb-1 italic'>The Fisher Ski guaranteed a new win yesterday</h2>
          <p className='m-0'>
            <a className='text-blue-800 text-custom font-bold cursor-pointer mr-2'>Aleksandar Sultan</a>
            <time className='italic text-sm'>19/02/2024 16:00</time>
          </p>
          <p className='text-md my-2 leading-7 text-justify'>In a thrilling ski jumping competition yesterday, Fischer skis played a pivotal role in securing the victory for a talented ski jumper. As the athlete soared through the air, the superior performance and reliability of Fischer skis became evident, ultimately contributing to the athlete's success.</p>
        </div>
      </div>

      <div className="entry w-full lg:w-11/12 flex flex-row mb-6 mt-6 gap-6">
        <div className='w-1/3 mt-1'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Ohkurayama_Schanze.jpg" alt="jumper" className="w-full h-auto" />
        </div>
        <div className='w-2/3'>
          <h2 className='text-xl font-bold mb-1 italic'>Soaring Heights: The 2024 Sapporo Ski Jumping Extravaganza</h2>
          <p className='m-0'>
            <a className='text-blue-800 text-custom font-bold cursor-pointer mr-2'>Aleksandar Sultan</a>
            <time className='italic text-sm'>19/02/2024 16:00</time>
          </p>
          <p className='text-md my-2 leading-7 text-justify'>In the winter wonderland of Sapporo, Japan, the world's eyes turned to witness the breathtaking spectacle of the 2024 Sapporo Ski Jumping Competition. Against the backdrop of snow-capped peaks and the crisp mountain air, athletes from across the globe gathered to showcase their skill, courage, and determination.</p>
        </div>
      </div>

      <div className="entry w-full lg:w-11/12 flex flex-row mb-6 mt-6 gap-6">
        <div className='w-1/3 mt-1'>
          <img src="https://gdb.rferl.org/01000000-c0a8-0242-d178-08dbc983a63e_cx0_cy5_cw0_w1200_r1.jpg" alt="jumper" className="w-full h-auto" />
        </div>
        <div className='w-2/3'>
          <h2 className='text-xl font-bold mb-1 italic'>Vladimir Zografski, Bulgaria's Ski Jumping Phenom</h2>
          <p className='m-0'>
            <a className='text-blue-800 text-custom font-bold cursor-pointer mr-2'>Aleksandar Sultan</a>
            <time className='italic text-sm'>19/02/2024 16:00</time>
          </p>
          <p className='text-md my-2 leading-7 text-justify'>Vladimir Zografski, born and bred in the mountainous region of Bansko, discovered his passion for soaring through the air at an early age. With determination and unwavering dedication, he embarked on a journey that would take him to the pinnacle of his sport.</p>
        </div>
      </div>

    </main>
  );
}
