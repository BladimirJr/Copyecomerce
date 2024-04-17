import React from 'react'
import TopProducts from '@components/TopProducts/TopProducts';
import Banner from '@components/Banner/Banner';
import Subscribe from '@components/Subscribe/Subscribe';
import Testimonials from '@components/Testimonials/Testimonials';
import Footer from '@components/Footer/Footer';
import SliderComponent from '@components/Slider/Slider';
import Products from '@components/Products/Products';
import NavBar from '@components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={
        <>
          <SliderComponent />
          <Products />
          <TopProducts />
          <Banner />
          <Subscribe />
          <Testimonials />
        </>
        } 
        />
        <Route path="products" element={<h1>404</h1>} />
      </Routes>
      <Footer />
    </>
  )
}
