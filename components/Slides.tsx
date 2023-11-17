"use client"
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slides = () => {

  const testimonials = [
    {
      name: 'Jane',
      text: `Working for Staff Bank has been the best thing that ever happened to me. I\'ve noted so many positive aspects since becoming a member of this team.Working for Staff Bank has been the best thing that ever happened to me. I\'ve noted so many positive aspects since becoming a member of this team.Working for Staff Bank has been the best thing that ever happened to me. I\'ve noted so many positive aspects since becoming a member of this team.`,
    },
    {
      name: 'Mark',
      text: `Staff Bank truly listens to their team and goes the extra mile to address and accommodate your concerns.Staff Bank truly listens to their team and goes the extra mile to address and accommodate your concerns.<div className="w-full min-h-screen grid place-content-center mx-auto address and accommodate your concerns.div className="w-full min-h-screen grid place-content-center mx-auto address and accommodate your concerns.div className="w-full min-h-screen grid place-content-center mx-auto`,
    },
    {
      name: 'Alice',
      text: `The pay rates at Staff Bank are not only very competitive but also genuinely helpful. The pay rates at Staff Bank are not only very competitive but also genuinely helpful.`,
    },
    {
      name: 'John',
      text: `Your inquiries get actioned promptly at Staff Bank, providing the support you need. I wouldn\'t choose any other team.`,
    },
  ];

    const settings = {
      infinite: true,
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // Enable autoplay
      autoplaySpeed: 2000, // Set autoplay speed in milliseconds (2 seconds in this case)
    }


  return (
    <>
      <div className="w-full min-h-screen grid place-content-center mx-auto">
        <div className=" bg-myblue border p-10 md:p-20">
          <div className="grid grid-cols-1 md:px-40 text-center">
            <Slider {...settings}>
              {testimonials.map((item, index) => (
                <div key={index} className="break-words space-y-4 text-white py-10">
                  <div className=''>
                    <p className='text-xl line-clamp-3'>{item.text}</p>
                  </div>
  
                  <div className="flex justify-center items-center">
                    <div className="bottom-0 fixed">
                    <h2 className="w-20 border-t-[2px] border-mygray"></h2>
                      <p className='text-lg'> {item.name}</p>
                    </div>
                  </div>
                  
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slides;
