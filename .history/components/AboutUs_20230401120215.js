import React from "react";

function AboutUs() {
  return (
    <div>
      <div class="2xl:container 2xl:mx-auto lg:py-8 lg:px-20 md:py-8 mb-40 md:px-6 py-4 px-4">
        <div class="flex flex-col lg:flex-row justify-between gap-8">
          <div class="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 class="text-3xl text-center my-4 lg:text-5xl font-bold leading-9 text-black pb-4">
              About Us
            </h1>
            <p class="font-normal text-base leading-6 text-black/80">
              Rice is a staple food for over half of the world's population and
              its demand continues to rise. To meet the growing demand for
              quality rice, we at Dheeraj Enterprises are a leading provider of
              high-quality rice. With a commitment to quality, our enterprise
              sources the finest rice grains from trusted local and
              international farmers. We use advanced technology and modern
              techniques to process the rice, ensuring that each grain is of
              premium quality. Our rice is available in different varieties,
              including long-grain and basmati. We take pride in our
              sustainability practices, and work hard to minimize the
              environmental impact of our enterprise. Our enterprise operates
              with a keen focus on customer satisfaction, and we strive to
              provide excellent services throughout the entire process- from
              sourcing to delivery. Our efficient distribution network ensures
              that our rice is delivered to customers in a timely manner, and we
              offer competitive pricing without compromising on quality. Choose
              Dheeraj Enterprises for your rice needs, and be assured of
              high-quality rice that is sustainable, affordable, and delivered
              on time. Our rice is not only a delicious and nutritious addition
              to meals but also plays an important role in supporting local
              farmers and their families. We are committed to providing products
              that contribute positively to our communities and the wider
              society.
            </p>
          </div>
          <div class="w-full lg:w-8/12">
            <img
              class="w-full rounded-lg object-cover h-full"
              src="/about-us.jpg"
              alt="A group of People"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
