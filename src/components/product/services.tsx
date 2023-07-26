import React from "react";

const services = [
  {
    title: "Lorem",
    description:
      "Laudantium totam quas cumque pariatur at doloremque hic quos quia eius. Laudantium totam quas cumque pariatur at doloremque hic quos quia eius.",
  },
  {
    title: "Lorem",
    description:
      "Laudantium totam quas cumque pariatur at doloremque hic quos quia eius. Laudantium totam quas cumque pariatur at doloremque hic quos quia eius.",
  },
  {
    title: "Lorem",
    description:
      "Laudantium totam quas cumque pariatur at doloremque hic quos quia eius. Laudantium totam quas cumque pariatur at doloremque hic quos quia eius.",
  },
];

function Services() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-20 text-3xl font-bold">Why choose us?</h2>
        <div className="grid lg:grid-cols-3 lg:gap-x-12">
          {services.map((service, index) => {
            return (
              <div className="mb-16 lg:mb-0" key={index}>
                <div className="block h-full rounded-lg bg-white dark:bg-neutral-900">
                  <div className="flex justify-center">
                    <div className="-mt-8 inline-block rounded-full p-4 bg-gray-800 text-primary shadow-md">
                      <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        stroke="currentColor"
                      >
                        <path
                          d="M29.0999 5.75H13.4499C12.1999 5.75 11.1499 6.8 11.1499 8.05V8.4H4.2999C3.8499 8.4 3.4499 8.65 3.2499 9.05L0.749902 14.1C0.649902 14.25 0.649902 14.45 0.649902 14.65V22.45C0.649902 22.95 1.0499 23.35 1.5499 23.35H2.9999C3.2499 25.15 4.7999 26.5 6.6499 26.5C8.4999 26.5 10.0499 25.1 10.2999 23.35H12.0499H20.9999C21.2499 25.15 22.7999 26.5 24.6499 26.5C26.4999 26.5 28.0499 25.1 28.2999 23.35H30.1499C30.8499 23.35 31.3999 22.8 31.3999 22.1V8C31.3999 6.75 30.3499 5.75 29.0999 5.75ZM4.6499 10.1H11.1999V13.6H2.8999L4.6499 10.1ZM6.5999 24.7C5.4999 24.7 4.6499 23.8 4.6499 22.75C4.6499 21.7 5.5499 20.8 6.5999 20.8C7.6499 20.8 8.5499 21.7 8.5499 22.75C8.5499 23.8 7.6999 24.7 6.5999 24.7ZM6.5999 19.05C4.9999 19.05 3.5999 20.1 3.0999 21.55H2.3999V15.4H11.1999V21.55H10.1499C9.5999 20.1 8.2499 19.05 6.5999 19.05ZM24.6499 24.7C23.5499 24.7 22.6999 23.8 22.6999 22.75C22.6999 21.7 23.5999 20.8 24.6499 20.8C25.6999 20.8 26.5999 21.7 26.5999 22.75C26.5999 23.8 25.6999 24.7 24.6499 24.7ZM29.6499 21.55H28.1499C27.6499 20.1 26.2499 19.05 24.6499 19.05C23.0499 19.05 21.6499 20.1 21.1499 21.55H12.8999V8C12.8999 7.7 13.1499 7.45 13.4499 7.45H29.0999C29.3999 7.45 29.6499 7.7 29.6499 8V21.55Z"
                          fill="#3056D3"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-4 text-lg font-medium">Lorem</h5>
                    <p className="text-neutral-500 dark:text-neutral-300">
                      Laudantium totam quas cumque pariatur at doloremque hic
                      quos quia eius. Laudantium totam quas cumque pariatur at
                      doloremque hic quos quia eius.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Services;
