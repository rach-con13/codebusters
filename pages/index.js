import Head from 'next/head'
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Services from '../components/Services/services';
import About from "../components/About/About";
import Testimonials from "../components/Testimonials/testimonials";
import JoinUs from "../components/JoinUs/JoinUs";
import Footer from "../components/Footer/footer";
import AuthForm from '../components/Auth/AuthForm';
import wave from "../public/assets/wave.svg";
export default function Home() {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&family=Staatliches&display=swap" rel="stylesheet" />
    </Head>
    <div  className="relative pb-6 w-5/5 bg-dark font-raleway">
    
      <div style={{background:"#1e1b30"}} className="relative" >
        <img src="/assets/wave.svg"  className="absolute rotate-180 transform-gpu top-full " />
          <Header />
          <Hero />
        </div>
        <div className="relative z-10 w-10/12 h-full mx-auto lg:w-9/12">
        <About />
        <Services />
        <JoinUs /> 
        <Testimonials />
     

      </div>
      <Footer />
    </div>
    </>
  )
}
