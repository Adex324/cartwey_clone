import React from 'react'
import CarouselSteps from '../components/CarouselSteps/CarouselSteps';
import Hero from '../components/Hero/Hero';
import How_it_works from '../components/How_it_works/How_it_works';
import Navbar from '../components/Navbar/Navbar';
import Waitlist from '../components/Waitlist/Waitlist';
import Why_cartwey from '../components/Why_cartwey/Why_cartwey';
import Get_started from '../components/Get_started/Get_started';
import Faq from '../components/Faq/Faq';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <How_it_works/>
      <CarouselSteps/>
      <Waitlist/>
      <Why_cartwey/>
      <Get_started/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default Home