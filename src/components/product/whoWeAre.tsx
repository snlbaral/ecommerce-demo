import React from "react";

function WhoWeAre() {
  return (
    <section className="container my-24 mx-auto md:px-6">
      <div className="mb-32 text-center md:text-left">
        <div className="block rounded-lg">
          <div className="flex flex-wrap items-center">
            <div className="block w-full md:w-4/12 lg:flex justify-center">
              <img
                src="/p-logo.png"
                alt="Trendy Pants and Shoes"
                className="w-1/3 sm:mx-auto rounded-t-lg md:rounded-tr-none md:rounded-bl-lg"
              />
            </div>
            <div className="w-full md:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <div className="mx-auto md:max-w-xl lg:max-w-3xl">
                  <h3 className="mb-6 text-3xl font-bold text-gray-800 dark:text-gray-200">
                    Who We Are
                  </h3>
                </div>
                <p className="mb-6 pb-2 text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit, error amet numquam iure provident voluptate esse quasi,
                  veritatis totam voluptas nostrum quisquam eum porro a pariatur
                  veniam.
                </p>
                <button
                  type="button"
                  className="inline-block rounded-full bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
