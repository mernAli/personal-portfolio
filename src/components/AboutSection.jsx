// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const AboutSection = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const introRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     //Title animation
//     gsap.fromTo(
//       titleRef.current,
//       { y: 100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 40%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     //Intro animation
//     gsap.fromTo(
//         introRef.current,
//         { y: 100, opacity: 0, filter: "blur(10px)"},
//         {
//             y: 0,
//             filter: "blur(0px)",
//             opacity: 1,
//             duration: 1.5,
//             scrollTrigger: {
//                 trigger: sectionRef.current,
//                 start: "top 40%",
//                 toggleActions: "play none none reverse",

//             }
//         }
  
//     )

//   });

//   return (
//     <section ref={sectionRef} className="min-h-screen relative bg-gradient-to-b from-black to-slate-500 flex flex-col py-20">
//       <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center ">
//         <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold sm:mb-16 text-center text-white opacity-0">
//           About Me
//         </h1>
//       </div>


//       <div ref={ introRef} className="absolute lg:bottom-[-20rem] md:bottom-[-10rem] bottom-[-20rem] left-0 w-full flex md:flex-row flex-col  lg:px-24 px-5 opacity-100">
//         <h3 className="text-sm md:text-2xl font-bold text-purple-200 z-50 lg:max-w-[45rem] max-w-[27rem] tracking-wider md:mt-0 sm:mt-[-40rem] mt-[-30rem]">
//           ✨ Hello, I’m Ali Aman, a curious mind passionate about blending
//           creativity with technology.
//           <br /> 💻 As a MERN developer, I enjoy turning
//           complex ideas into smooth, user-friendly digital experiences. <br />🚀 I’ve
//           built projects like Imagify (AI image generator), Turf & Pool
//           (real-time booking platform), and DubaiGeeni (AI travel companion). <br />⚡
//           My toolkit includes React, Node.js, Express, MongoDB, Tailwind, Framer
//           Motion, Spline, and AI prompt engineering. <br />🎯 Known for
//           problem-solving, adaptability, and teamwork, I thrive in environments
//           where challenges spark innovation. <br />🌟 For me, every line of code is
//           not just logic — it’s a chance to create something impactful and
//           imaginative.
//         </h3>

//         <img className="lg:h-[40rem] md:h-[25rem] h-[20rem] mix-blend-lighten" src="images/My-AI-Picture.png" alt="profile-image" />
//       </div>
//     </section>
//   );
// };

// export default AboutSection;


// imprived version suggested by deepseek ai 
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Intro animation
    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        filter: "blur(0px)",
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        }
      }
    );

  //stars animation with different speeds and directions
  starsRef.current.forEach((star, index) => {
    const direction = index % 2 === 0 ? 1 : -1; 
    const speed = 0.5 + Math.random() * 0.5; 

    gsap.to(star, {
      x: `${direction * (100 + index * 20)}`,
      y: `${direction * -50 - index * 10}`,
      rotation: direction * 360,
      ease: "none",
      ScrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: speed,
      
      }
    })
  })

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.vars,trigger === sectionRef.current) {
        trigger.kill();
      }
    }); 
  }

  }, []);

 

  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) {
      starsRef.current.push(el);
    }

  }


  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen bg-gradient-to-b from-black to-slate-500 flex flex-col py-20 overflow-hidden"
    >

      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        {[...Array(10)].map((_, i) => (
          <div
            ref={addToStars}
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${10 + i * 3}px`,
              height: `${10 + i * 3}px`,
              backgroundColor: "white",
              opacity: 0.2 + Math.random() * 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,

            }}
          />
        ))}

      </div>
      {/* Title Section */}
      <div className="container overflow-hidden mx-auto px-4 h-full flex flex-col items-center justify-center flex-1">
        <h1 
          ref={titleRef} 
          className=" text-4xl md:text-6xl font-bold mb-8 md:mb-16 text-center text-white opacity-0"
        >
          About Me
        </h1>
      </div>

      {/* Content Section with Grid */}
      <div 
        ref={introRef}
        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 lg:px-24 opacity-100"
      >
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <h3 className="text-sm md:text-lg lg:text-xl text-purple-200 tracking-wide leading-relaxed">
            <span className="block mb-4">✨ Hello, I'm Ali Aman, a curious mind passionate about blending creativity with technology.</span>
            <span className="block mb-4">💻 As a MERN developer, I enjoy turning complex ideas into smooth, user-friendly digital experiences.</span>
            <span className="block mb-4">🚀 I've built projects like Imagify (AI image generator), Turf & Pool (real-time booking platform), and DubaiGeeni (AI travel companion).</span>
            <span className="block mb-4">⚡ My toolkit includes React, Node.js, Express, MongoDB, Tailwind, Framer Motion, Spline, and AI prompt engineering.</span>
            <span className="block mb-4">🎯 Known for problem-solving, adaptability, and teamwork, I thrive in environments where challenges spark innovation.</span>
            <span className="block">🌟 For me, every line of code is not just logic — it's a chance to create something impactful and imaginative.</span>
          </h3>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <img 
            className="h-64 md:h-80 lg:h-96 xl:h-[40rem] mix-blend-lighten object-contain" 
            src="images/My-AI-Picture.png" 
            alt="Ali Aman - MERN Developer"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;