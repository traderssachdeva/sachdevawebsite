import React from "react";

const Products8 = [
  {
    id: 1,
    name: `Tukda Rice`,
    price: `Rs 50`,
    desc: `Tukda rice is known for its small, round grains and its ability to absorb flavors well. It has a soft and sticky texture when cooked, making it ideal for dishes that require a slightly sticky rice.`,
    src: "/rice.jpg",
  },
  {
    id: 2,
    name: `Basmati Rice`,
    price: `Rs 80`,
    desc: `Basmati rice is a good source of carbohydrates, protein, and B vitamins, and is naturally gluten-free. It is also low in fat and sodium, making it a healthy choice for those watching their calorie.`,
    src: "/rice2.jpg",
  },
  {
    id: 3,
    name: `Premium Rice`,
    price: `Rs 120`,
    desc: ` A high-quality variety of rice that is considered to be superior to other types of rice in terms of its taste, texture, appearance, and nutritional value. Premium rice is grown under strict quality control.`,
    src: "/rice3.jpg",
  },
  {
    id: 4,
    name: `Golden Stella Rice`,
    price: `Rs 75`,
    desc: `Golden Sella basmati has the delicious taste and visual appeal of pure Basmati, but with improved holding ability and resilience to over cooking. We simply parboil our signature basmati in its husk .`,
    src: "/rice4.jpg",
  },
  {
    id: 5,
    name: `Double chabi Rice`,
    price: `Rs 50`,
    desc: ` It is rich in various nutrients such as carbohydrates, fibres, and many more that balances the body in optimal conditions. It absorbs nutrients and easily changes starches to make less sticky dish.`,
    src: "/img5.jpg",
  },
  {
    id: 6,
    name: `Premium Tukda  Rice`,
    price: `Rs 50`,
    desc: `tukda is a grain popular in Indian cooking. Rice is a low-fat complex carbohydrate that is quickly digested and rapidly made available to the muscles and other body systems and is therefore a perfect source of energy. Nutritional Facts. `,
    src: "/img6.jpg",
  },
  {
    id: 7,
    name: `Tukda Rice`,
    price: `Rs 50`,
    desc: `Basmati rice is a good source of carbohydrates, protein, and B vitamins, and is naturally gluten-free. It is also low in fat and sodium, making it a healthy choice for those watching their calorie intake or managing their blood pressure.`,
    src: "/img7.jpg",
  },
  {
    id: 8,
    name: `Brown Rice`,
    price: `Rs 50`,
    desc: `Brown rice is a whole grain rice that has not been stripped of its outer bran layer, unlike white rice. This means that brown rice retains more of its nutritional value, including fiber, vitamins, and minerals such as magnesium and selenium.`,
    src: "/img8.jpg",
  },
];

function Products() {
  return (
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
            Product Collection
          </h2>

          <p class="mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <div class="mt-8 block lg:hidden">
          <button class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
            <span class="text-sm font-medium"> Filters & Sorting </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div class="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <div class="hidden space-y-4 lg:block">
            <div>
              <label
                for="SortBy"
                class="block text-xs font-medium text-gray-700"
              >
                Sort By
              </label>

              <select id="SortBy" class="mt-1 rounded border-gray-300 text-sm">
                <option>Sort By</option>
                <option value="Title, DESC">Title, DESC</option>
                <option value="Title, ASC">Title, ASC</option>
                <option value="Price, DESC">Price, DESC</option>
                <option value="Price, ASC">Price, ASC</option>
              </select>
            </div>

            <div>
              <p class="block text-xs font-medium text-gray-700">Filters</p>

              <div class="mt-1 space-y-2">
                <details class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                  <summary class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                    <span class="text-sm font-medium"> Availability </span>

                    <span class="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div class="border-t border-gray-200 bg-white">
                    <header class="flex items-center justify-between p-4">
                      <span class="text-sm text-gray-700"> 0 Selected </span>

                      <button
                        type="button"
                        class="text-sm text-gray-900 underline underline-offset-4"
                      >
                        Reset
                      </button>
                    </header>

                    <ul class="space-y-1 border-t border-gray-200 p-4">
                      <li>
                        <label
                          for="FilterInStock"
                          class="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterInStock"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <span class="text-sm font-medium text-gray-700">
                            In Stock (5+)
                          </span>
                        </label>
                      </li>

                      <li>
                        <label
                          for="FilterPreOrder"
                          class="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterPreOrder"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <span class="text-sm font-medium text-gray-700">
                            Pre Order (3+)
                          </span>
                        </label>
                      </li>

                      <li>
                        <label
                          for="FilterOutOfStock"
                          class="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterOutOfStock"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <span class="text-sm font-medium text-gray-700">
                            Out of Stock (10+)
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </details>

                <details class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                  <summary class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                    <span class="text-sm font-medium"> Price </span>

                    <span class="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div class="border-t border-gray-200 bg-white">
                    <header class="flex items-center justify-between p-4">
                      <span class="text-sm text-gray-700">
                        The highest price is $600
                      </span>

                      <button
                        type="button"
                        class="text-sm text-gray-900 underline underline-offset-4"
                      >
                        Reset
                      </button>
                    </header>

                    <div class="border-t border-gray-200 p-4">
                      <div class="flex justify-between gap-4">
                        <label
                          for="FilterPriceFrom"
                          class="flex items-center gap-2"
                        >
                          <span class="text-sm text-gray-600">$</span>

                          <input
                            type="number"
                            id="FilterPriceFrom"
                            placeholder="From"
                            class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                          />
                        </label>

                        <label
                          for="FilterPriceTo"
                          class="flex items-center gap-2"
                        >
                          <span class="text-sm text-gray-600">$</span>

                          <input
                            type="number"
                            id="FilterPriceTo"
                            placeholder="To"
                            class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </details>

                <details class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                  <summary class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                    <span class="text-sm font-medium"> Colors </span>

                    <span class="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div class="border-t border-gray-200 bg-white">
                    <header class="flex items-center justify-between p-4">
                      <span class="text-sm text-gray-700"> 0 Selected </span>

                      <button
                        type="button"
                        class="text-sm text-gray-900 underline underline-offset-4"
                      >
                        Reset
                      </button>
                    </header>

                    <ul class="space-y-1 border-t border-gray-200 p-4">
                      <li>
                        <label
                          for="FilterRed"
                          class="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterRed"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <span class="text-sm font-medium text-gray-700">
                            Red
                          </span>
                        </label>
                      </li>

                      <li>
                        <label
                          for="FilterBlue"
                          class="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterBlue"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <span class="text-sm font-medium text-gray-700">
                            Blue
                          </span>
                        </label>
                      </li>

                      <li>
                        <label
                          for="FilterGreen"
                          class="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterGreen"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <span class="text-sm font-medium text-gray-700">
                            Green
                          </span>
                        </label>
                      </li>

                      <li>
                        <label
                          for="FilterOrange"
                          class="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterOrange"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <span class="text-sm font-medium text-gray-700">
                            Orange
                          </span>
                        </label>
                      </li>

                      <li>
                        <label
                          for="FilterPurple"
                          class="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterPurple"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <span class="text-sm font-medium text-gray-700">
                            Purple
                          </span>
                        </label>
                      </li>

                      <li>
                        <label
                          for="FilterTeal"
                          class="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterTeal"
                            class="h-5 w-5 rounded border-gray-300"
                          />

                          <span class="text-sm font-medium text-gray-700">
                            Teal
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div class="lg:col-span-3">
            <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <li>
                <a href="#" class="group block overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt=""
                    class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />

                  <div class="relative bg-white pt-3">
                    <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>

                    <p class="mt-2">
                      <span class="sr-only"> Regular Price </span>

                      <span class="tracking-wider text-gray-900">
                        {" "}
                        £24.00 GBP{" "}
                      </span>
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" class="group block overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt=""
                    class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />

                  <div class="relative bg-white pt-3">
                    <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>

                    <p class="mt-2">
                      <span class="sr-only"> Regular Price </span>

                      <span class="tracking-wider text-gray-900">
                        {" "}
                        £24.00 GBP{" "}
                      </span>
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" class="group block overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt=""
                    class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />

                  <div class="relative bg-white pt-3">
                    <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>

                    <p class="mt-2">
                      <span class="sr-only"> Regular Price </span>

                      <span class="tracking-wider text-gray-900">
                        {" "}
                        £24.00 GBP{" "}
                      </span>
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;