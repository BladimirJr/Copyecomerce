import { ProductsData } from '@data/products'
import { Image } from '@nextui-org/react'
import React from 'react'
import { FaStar } from 'react-icons/fa'



export default function Products() {
    return (
        <div className='mt-14 mb-12'>
            <div className='container'>
                {/**header*/}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos='fade-up' className='text-sm text-primary'>Top Selling Products for you!</p>
                    <h1 data-aos='fade-up' className='text-3xl font-bold'>Top Selling Products</h1>
                    <p data-aos='fade-up' className=' text-xs text-gray-300'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae, voluptates?

                    </p>
                </div>
                {/**products */}
                <div className=''>

                    <div
                        className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 place-items-center z-10'
                    >
                        {/**product */}
                        {
                            ProductsData.map((product) => (
                                <div
                                    data-aos='fade-up'
                                    data-aos-delay={product.aosDelay}
                                    key={product.id}
                                    className='space-y-3'>
                                    <Image
                                        isZoomed
                                        className='w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] object-cover rounded-lg'
                                        alt="NextUI Fruit Image with Zoom"
                                        src={product.img}
                                    />
                                    <div>
                                        <h3 className='font-semibold'>{product.title}</h3>
                                        <p className='text-sm text-gray-600'>{product.color}</p>
                                        <div className='flex items-center gap-1'>
                                            <FaStar className='text-yellow-400' />
                                            <span>{product.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
