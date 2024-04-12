import React, { useState } from "react";
import Button from "./Button";
import aliAvatar from "../Assets/images/avatar-ali.png";
import anishaAvatar from "../Assets/images/avatar-anisha.png";
import richardAvatar from "../Assets/images/avatar-richard.png";
import shanaiAvatar from "../Assets/images/avatar-shanai.png";

const Testimonials = () => {
  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slide components (simplified for demonstration)
  const slides = [
    {
      id: 1,
      name: "Ali Bravo",
      avatar: aliAvatar,
      testimonial:
        "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    },
    {
      id: 2,
      name: "Anisha Li",
      avatar: anishaAvatar,
      testimonial:
        "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    },
    {
      id: 3,
      name: "Richard Watts",
      avatar: richardAvatar,
      testimonial:
        "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
    },
    {
      id: 4,
      name: "Shanai Gough",
      avatar: shanaiAvatar,
      testimonial:
        "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
    },
  ];

  const goToPrevSlide = () => {
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : slides.length - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide < slides.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <section className="section px-10 font-beVietnam md:flex md:flex-col md:gap-7">
      <h2 className="mb-12 text-3xl font-bold text-dark-bue">What they've said</h2>

      <div className="relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`relative w-full overflow-hidden ${
              index === currentSlide ? "block" : "hidden"
            }`}
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
              src={slide.avatar}
              alt="avatar"
            />
            <div className="flex flex-wrap justify-center">
              <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                <h5 className="mb-2 text-lg font-bold text-dark-bue text-center">{slide.name}</h5>
                <p className="mb-6 text-gray-500 dark:text-neutral-300 text-center md:w-1/2 md:m-auto">
                  {slide.testimonial}
                </p>
                <ul className="mb-0 flex justify-center">
                  {/* Render SVG stars based on slide data */}
                </ul>
              </div>
            </div>
          </div>
        ))}
        <button
          className="absolute top-0 bottom-0 -left-10 z-[1] flex w-[15%] items-center justify-center"
          type="button"
          onClick={goToPrevSlide}
        >
          <span className="inline-block h-8 w-20">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="text-[#242d52] dark:text-neutral-300"
            >
              <path
                fill="currentColor"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        <button
          className="absolute top-0 bottom-0 -right-10 z-[1] flex w-[15%] items-center justify-center"
          type="button"
          onClick={goToNextSlide}
        >
          <span className="inline-block h-8 w-20">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="text-[#242d52] dark:text-neutral-300"
            >
              <path
                fill="currentColor"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>

      <Button
        label={"Get Started"}
        styles="w-40 h-9 bg-bright-red text-white"
      />
    </section>
  );
};

export default Testimonials;
