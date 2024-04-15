const TestimonialsDesktop = ({ slides }) => {
  return (
    <div className="md:flex md:justify-center md:items-center md:p-10 gap-7 md:h-[450px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className=""
        >
          <div class="">
            <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
              <div class="flex items-center justify-center gap-4 relative">
                <img
                  alt=""
                  src={slide.avatar}
                  class="size-14 rounded-full object-cover absolute bottom-10 left-auto"
                />

                <div>
                  <p className="mt-0.5 text-lg text-center font-medium text-gray-900">
                    {slide.name}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-700">{slide.testimonial}</p>
            </blockquote>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TestimonialsDesktop;
