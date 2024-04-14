import React from 'react'
import Image1 from '@assets/hero/women.png'
import Image2 from '@assets/hero/shopping.png'
import Image3 from '@assets/hero/sale.png'
import { Button } from '@nextui-org/react'
import Slider, { Settings } from 'react-slick'

const ImagesList = [
    {
        id: 1,
        src: Image1,
        title: 'Upto 50% off on all Men\'s wear',
        description: 'Lorem His life will forever changed dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' ,
    },
    {
        id: 2,
        src: Image2,
        title: '30% off on all Women\'s wear',
        description: 'Who\'s there lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
        id: 3,
        src: Image3,
         title: '70% off on all Accessories',
        description: 'Who\'s there lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    }
]
const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,

}
export default function SliderComponent() {
    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
            {/**background pattern*/}
            <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>
            </div>
            <div className='container pb-8 sm:pb-0'>
                <Slider {...settings}>
                    {ImagesList.map((image) => (
                     <div>
                     <div className='grid grid-cols-1 sm:grid-cols-2'>
                         <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                             <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{image.title}</h1>
                             <p className='text-sm'>
                                {image.description}
                             </p>
                             <Button radius='full' size='sm' className='max-w-[100px] bg-gradient-to-r from-primary to-secondary transition-all text-white py-2 px-4'>
                                 Order Now
                             </Button>

                         </div>
                         <div className='order-1 sm:order-2'>
                             <div className='relative z-10'>
                                 <img src={image.src} alt="" className='w-[300px] h-[300px] sm:h-[350px] sm:w-[350px] sm:scale-125 object-contain mx-auto' />
                             </div>
                         </div>
                     </div>
                 </div>
                    ))}
                </Slider>
            </div>

        </div>
    )
}
