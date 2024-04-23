
import TopProducts from '@components/TopProducts/TopProducts';
import Banner from '@components/Banner/Banner';
import Subscribe from '@components/Subscribe/Subscribe';
import Testimonials from '@components/Testimonials/Testimonials';
import Footer from '@components/Footer/Footer';
import SliderComponent from '@components/Slider/Slider';
import Products from '@components/Products/Products';
import NavBar from '@components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import ProductSection from '@components/Products/ProductSection';

export default function Layout() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={
        <>
          <SliderComponent />
          <Products />
          <TopProducts handleOrder={()=>{}} />
          <Banner />
          <Subscribe />
          <Testimonials />
        </>
        } 
        />
        <Route path="/#products" element={<ProductSection/>} />
      </Routes>
      <Footer />
    </>
  )
}
