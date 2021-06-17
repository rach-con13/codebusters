import Head from 'next/head'
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Services from '../components/Services/services';
import About from "../components/About/About";
import Testimonials from "../components/Testimonials/testimonials";
import Banner from "../components/Banner/banner";
import JoinUs from "../components/JoinUs/JoinUs";
export default function Home() {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600&family=Staatliches&display=swap" rel="stylesheet" />
    </Head>
    <div  className=" w-5/5 bg-dark pb-6 font-raleway">
      <div style={{background:'#110E20'}}>
          <Header />
          <Hero />
        </div>
        <div className=" h-full w-10/12 lg:w-9/12 mx-auto">
        <About />
        <Services />
        <JoinUs />
        <Testimonials />
        <Banner />
      </div>
    </div>
    </>
  )
}
