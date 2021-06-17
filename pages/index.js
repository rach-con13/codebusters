import Head from 'next/head'
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Services from '../components/Services/services';
import About from "../components/About/About";
import Testimonials from "../components/Testimonials/testimonials";
import Banner from "../components/Banner/banner";
import JoinUs from "../components/JoinUs/JoinUs";
import wave from "../public/assets/wave.svg";
export default function Home() {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&family=Staatliches&display=swap" rel="stylesheet" />
    </Head>
    <div  className=" w-5/5 bg-dark pb-6 font-raleway">
      <div style={{background:"#1e1b30"}} className="relative" >
        <img src="/assets/wave.svg"  className="absolute transform-gpu rotate-180 top-full " />
          <Header />
          <Hero />
        </div>
        <div className=" h-full w-10/12 lg:w-9/12 mx-auto z-10 relative">
        <About />
        <Services />
        <JoinUs /> 
        <Testimonials />

      </div>
    </div>
    </>
  )
}
