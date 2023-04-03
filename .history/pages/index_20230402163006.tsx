import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import KeyFeatures from "../components/KeyFeatures";
import AboutUs from "../components/AboutUs";

import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

import Products from "../components/Products";
import FAQ from "../components/FAQ";

const Home: NextPage = () => {
  return (
    <div className=" bg-[#EEEEEE]">
      <Head>
        <title>Textile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <Banner />

      <section id="features">
        <KeyFeatures />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="contact">
        <ContactUs />
      </section>

      <Footer />

      {/* <p>hello world</p> */}
    </div>
  );
};

export default Home;
