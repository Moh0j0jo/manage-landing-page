import Button from "./Button";
import React, { useState, useEffect } from 'react';
import aliAvatar from "../Assets/images/avatar-ali.png";
import anishaAvatar from "../Assets/images/avatar-anisha.png";
import richardAvatar from "../Assets/images/avatar-richard.png";
import shanaiAvatar from "../Assets/images/avatar-shanai.png";
import TestimonialsMobile from "./TestimonialsMobile";
import TestimonialsDesktop from "./TestimonialsDesktop";

const Testimonials = () => {
  // State to track the current slide

  const [showWide, setShowWide] = useState(window.innerWidth > 1024);
  useEffect(() => {
    const handleResize = () => {
        // Update state based on screen width
        setShowWide(window.innerWidth > 1024);
    };

    // Set up event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
}, []);

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



  return (
    <section className="section px-10 font-beVietnam md:flex md:flex-col md:gap-7 md:mb-28">
      <h2 className="mb-12 text-3xl font-bold text-dark-bue lg:text-6xl">What they've said</h2>

      {showWide ? 
        
        <TestimonialsDesktop slides={slides}/>:
        <TestimonialsMobile slides={slides}/>
      }
      <Button
        label={"Get Started"}
        styles="w-40 h-9 bg-bright-red text-white hover:opacity-50"
      />
    </section>
  );
};

export default Testimonials;
