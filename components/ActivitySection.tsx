import React from 'react';
import Image from 'next/image'

const ActivitySection = ({ data, content, count, fetchData, toggleClose }:any) => {
  const { commonMessage, text, action } = data;

  return (
    <section className='w-full fixed bottom-0'>
      <div className="container mx-auto rounded shadow-lg py-[1rem] text-center space-y-4 bg-white relative">
        <button onClick={toggleClose} className="absolute top-0 right-2 font-bold">
          <Image src="/svg/close.svg" width={100} height={100} alt="" className='w-8 h-8'/> 
        </button>
        <div className="text-sm md:text-normal font-semibold tracking-widest">
          {count ? 
            (
              <p className="text-sm md:text-normal font-semibold tracking-widest">
                {commonMessage}
                <span onClick={action} className='cursor-pointer'> - {text}</span>
              </p>
            )
            : 
            (
              <>
                <p className="text-sm md:text-normal font-semibold tracking-widest">
                {content}
                </p>
                <button onClick={fetchData} className="w-40 active-button bg-myblue p-2 text-white">
                  Next
                </button>
              </>
            )
          }
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
