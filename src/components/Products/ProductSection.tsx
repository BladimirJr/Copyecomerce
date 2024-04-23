import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Button, Image } from '@nextui-org/react'
import Loading from '@components/Loading/Loading'
import useProducts from '@hooks/useProducts'

export default function ProductSection() {
    const {loading,products} = useProducts()

    if (loading) return (
        <div className='mt-14 mb-12 w-[100%] h-[100%]'>
            <div className='container flex justify-center h-[800px]'>
                <Loading />
            </div>
        </div>
    )
    return (
        <div className='mt-14 mb-12'>
            <div className='container'>
                {/**header*/}
                <div className='text-center mb-10 max-w-[800px] mx-auto'>
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
                        className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-5 place-items-center z-10'
                    >
                        {/**product */}
                        {
                            products.map((product) => (
                                <div

                                    data-aos='fade-up'
                                    data-aos-delay={100}
                                    key={product.id}
                                    className='space-y-3 shadow-md p-6 rounded-lg h-[400px] '>
                                    <Image

                                        className='w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] object-contain rounded-lg'
                                        alt={product.title}
                                        src={product.image}
                                    />
                                    <div>

                                        <h3 className='font-semibold'>{product.title}</h3>
                                        <p className='text-sm text-gray-600'>{product.category}</p>




                                        <div className='flex items-center  justify-between'>
                                            <div className='flex items-center gap-1 '>
                                                <FaStar className='text-yellow-400' />
                                                <span>{product.rating.rate}</span>
                                            </div>
                                            <div className=' absolute right-0-0'>
                                               
                                            </div>
                                            <Button
                                                    className="bg-primary mx-auto hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                                                >
                                                    Order
                                                </Button>
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
