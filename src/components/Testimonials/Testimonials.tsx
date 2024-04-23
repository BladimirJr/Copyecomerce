import React from "react";
import { TestimonialData } from "@data/testimonials";
import { Avatar, Card, CardBody, CardHeader } from "@nextui-org/react";
import Slider, { Settings } from "react-slick";


export default function Testimonials(){
  
  const settings : Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
         centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container border-none shadow-none">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1  className="text-3xl font-bold">
            Testimonials
          </h1>
          <p  className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>

        {/* Testimonial cards */}
        <div>
          <Slider {...settings} >
            {TestimonialData.map((data) => (
             <Card className="max-w-[340px] pb">
             <CardHeader className="justify-between">
               <div className="flex gap-5">
                 <Avatar isBordered radius="full" size="md" src={data.img} />
                 <div className="flex flex-col gap-1 items-start justify-center">
                   <h4 className="text-small font-semibold leading-none text-default-600">{data.name}</h4>
                   <h5 className="text-small tracking-tight text-default-400">@{data.name}</h5>
                 </div>
               </div>
               <p className="text-black/20 text-5xl font-serif absolute top-0 right-0 pr-4">
    ,,
  </p>
             </CardHeader>
             <CardBody className="px-3 py-0 text-small text-default-400">
               <p className="pb-5 pt-3">
                "{data.text}"
               </p>
              
             </CardBody>
            
           </Card>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
