
import SliderComponent from '@components/Slider/Slider'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  'aos/dist/aos.css'

import NavBar from './components/NavBar/NavBar'
import Products from '@components/Products/Products';
import AOS from 'aos';
import { useState } from 'react';
import TopProducts from '@components/TopProducts/TopProducts';
import Banner from '@components/Banner/Banner';
import Subscribe from '@components/Subscribe/Subscribe';
import Testimonials from '@components/Testimonials/Testimonials';
import Footer from '@components/Footer/Footer';
import Popup from '@components/Popup/Popup';
function App() {
useState(()=>{
  AOS.init({
    offset: 100,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
    once: true,
  });
  AOS.refresh();
})
  return (
    <>
      <NavBar />
      <SliderComponent/>
      <Products/>
      <TopProducts/>
      <Banner />
      <Subscribe />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
