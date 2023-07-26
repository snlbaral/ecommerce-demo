import React from "react";
import StarRating from "../ui/starRating";

const testimonials = [
  {
    name: "John Doe",
    image: "p-logo.png",
    job: "Web Developer",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
  },
  {
    name: "John Doe",
    image: "p-logo.png",
    job: "Web Developer",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
    stars: 5,
  },
  {
    name: "John Doe",
    image: "p-logo.png",
    job: "Web Developer",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
    stars: 4,
  },
];

function Testimonials() {
  return (
    <section className="container my-24 mx-auto md:px-6">
      <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
        <h3 className="mb-6 text-3xl font-bold text-neutral-800 dark:text-neutral-200">
          Testimonials
        </h3>
        <p className="mb-6 pb-2 md:mb-12 md:pb-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
      </div>

      {/* <!-- Container for the Testimonials --> */}
      <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
        {/* <!-- Testimonial --> */}
        {testimonials.map((testimonial, index) => {
          return (
            <div className="mb-12 md:mb-0" key={index}>
              <div className="mb-6 flex justify-center">
                <img
                  src="p-logo.png"
                  className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                />
              </div>
              <h5 className="mb-4 text-xl font-semibold">John Doe</h5>
              <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
                Web Developer
              </h6>
              <p className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="inline-block h-7 w-7 pr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                </svg>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
              {testimonial.stars ? (
                <div className="flex justify-center">
                  <StarRating rating={testimonial.stars} />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Testimonials;
