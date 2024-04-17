import { useState } from 'react';

import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  'aos/dist/aos.css'

import AppRoutes from '@routes/App.router';

import AOS from 'aos';

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
    <div>
      <AppRoutes/>
    </div>
  )
}

export default App
