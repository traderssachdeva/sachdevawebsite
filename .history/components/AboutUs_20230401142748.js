import React from "react";

function AboutUs() {
  return (
    <div>
      <div class="2xl:container 2xl:mx-auto lg:py-8 lg:px-20 md:py-8 mb-40 md:px-6 py-4 px-4">
        <div class="w-full lg:w-8/12">
          <img
            class="w-full rounded-lg object-cover h-full"
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="A group of People"
          />
        </div>
        <div class="flex flex-col lg:flex-row justify-between gap-8">
          <div class="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 class="text-3xl text-center my-4 lg:text-5xl font-bold leading-9 text-black pb-4">
              About Us
            </h1>
            <p class="font-normal text-justify -tracking-tighter text-base leading-6 text-black/80">
              Rice is a staple food for over half of the world's population and
              its demand continues to rise. To meet the growing demand for
              quality rice, we at Sachdeva Traders are a leading provider of
              high-quality rice. With a commitment to quality, our enterprise
              sources the finest rice grains from trusted local and
              international farmers.
            </p>

            <p class="font-normal text-justify -tracking-tighter text-base leading-6 text-black/80 my-8">
              We use advanced technology and modern techniques to process the
              rice, ensuring that each grain is of premium quality. Our rice is
              available in different varieties, including long-grain and
              basmati. We take pride in our sustainability practices, and work
              hard to minimize the environmental impact of our enterprise. Our
              enterprise operates with a keen focus on customer satisfaction,
              and we strive to provide excellent services throughout the entire
              process- from sourcing to delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
