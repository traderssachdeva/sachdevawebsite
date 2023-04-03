import React from "react";
const keyfeatures = [
  {
    id: 1,
    name: "Quality Products",
    desc: `Dheeraj Enterprises provides high-quality rotten rice grains
      that are carefully sourced and screened to ensure freshness
      and quality.`,
    img: "/products.png",
  },

  {
    id: 5,
    name: " Wide Selection",
    desc: ` we offers a wide selection of rotten rice grains that are
      suitable for various agricultural uses, animal feed,
      composting, and more.
      `,
    img: "/selection.png",
  },
  {
    id: 6,
    name: "Pan India Shipping",
    desc: `we also offer pan India shipping, allowing customers from all over India to access your high-quality rotten rice grains.`,
    img: "/shipping.png",
  },
];

export default function FAQ() {
  return (
    <div className="my-40">
      <h2 className="text-4xl md:text-4xl lg:text-5xl   capitalize mb-8 text-center text-black">
        why to choose us ?
      </h2>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
        {keyfeatures.map((keyfeature) => (
          <div key={keyfeature.id}>
            <div className="max-w-xs flex flex-col  md:flex-row    mx-auto  my-8 overflow-hidden md:max-w-sm rounded-md cursor-pointer">
              <div className=" flex flex-col md:flex-col   justify-center items-center mx-auto">
                <div className="p-8">
                  <a className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                    {keyfeature.name}
                  </a>

                  <p className="mt-2 text-justify  tracking-tight   text-black/80">
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