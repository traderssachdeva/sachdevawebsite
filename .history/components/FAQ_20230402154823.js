import React from "react";
const keyfeatures = [
  {
    id: 1,
    name: "How is our rice produced ?",
    desc: ` We use sustainable farming practices to produce our rice, which includes reducing water usage and minimizing the use of pesticides and fertilizers. `,
  },

  {
    id: 3,
    name: "Pan India Shipping",
    desc: `we also offer pan India shipping, allowing customers from all over India to access your high-quality rotten rice grains.`,
  },
  {
    id: 2,
    name: "Pan India Shipping",
    desc: `we also offer pan India shipping, allowing customers from all over India to access your high-quality rotten rice grains.`,
  },

  {
    id: 5,
    name: " The different types of rice we offer?",
    desc: ` We offer a variety of rice types, including long-grain, medium-grain, and short-grain rice. Each type of rice has different characteristics and is suited to different dishes. `,
  },
  {
    id: 6,
    name: "Where do you source your rice from? Do you work directly with farmers?",
    desc: `We work with a network of farmers from different regions to source our rice. We prioritize working with local farmers and establishing long-term relationships to ensure a consistent supply of high-quality rice. We also visit the farms regularly to ensure that our standards for sustainability and quality are being met.`,
  },
  {
    id: 4,
    name: "Pan India Shipping",
    desc: `we also offer pan India shipping, allowing customers from all over India to access your high-quality rotten rice grains.`,
  },
];

export default function FAQ() {
  return (
    <div className=" bg-gray-900  sm:pb-24 py-8">
      <h2 className="text-4xl md:text-4xl lg:text-5xl  font-bold  capitalize mb-8 text-center text-white">
        Common Concerns
      </h2>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 my-8 xl:gap-x-8">
        {keyfeatures.map((keyfeature) => (
          <div key={keyfeature.id}>
            <div className="max-w-xs flex flex-col  md:flex-row    mx-auto  my-8 overflow-hidden md:max-w-sm rounded-md cursor-pointer">
              <div className=" flex flex-col md:flex-col   justify-center items-center mx-auto">
                <div className="">
                  <a className="block mt-1 text-xl  text-gray-200 hover:underline">
                    {keyfeature.name}
                  </a>

                  <p className="mt-3 capitalize text-justify text-[16px]    text-white/60 -tracking-tighter">
                    {keyfeature.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
