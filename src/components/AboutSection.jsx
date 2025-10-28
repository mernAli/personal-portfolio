// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const AboutSection = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const introRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Title animation
//     gsap.fromTo(
//       titleRef.current,
//       { y: 100, opacity: 0 },
//       {
//         y: -200,
//         opacity: 1,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Intro animation
//     gsap.fromTo(
//         introRef.current,
//         { y: 100, opacity: 0, filter: "blur(10px)" },
//         {
//             y: 0,
//             opacity: 1,
//             filter: "blur(0px)",
//             duration: 1.5,
//             scrollTrigger: {
//                 trigger: sectionRef.current,
//                 start: "top 70%",
//                 toggleActions: "play none none reverse",
//             }
//         }
//     )

//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="h-screen relative overflow-hidden bg-gradient-to-b from-black to-purple-900 z-10"
//     >
//       <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
//         <h1
//           ref={titleRef}
//           className="text-4xl md:text-6xl font-bold sm:mb-16 mb-8 md:mb-16 text-center text-white opacity-0"
//         >
//           About Me
//         </h1>
//       </div>

//       <div ref={introRef} className="absolute bottom-0 left-0 w-full flex md:flex-row flex-col justify-between lg:px-24 px-10 items-center md:items-end gap-8 md:gap-12 pb-8 md:pb-16 opacity-0">
//         <h3 className=" text-sm md:text-2xl font-bold text-purple-200 z-50 lg:max-w-[27rem] tracking-wider md:mt-20 sm:mt-[-40rem] mt-[-32rem] ">
//           I’m Ali Aman, a dedicated MERN Stack Developer with a strong
//           foundation in full-stack web development. I specialize in building
//           responsive, high-performance web applications using technologies like
//           JavaScript, React, Node.js, Express, MongoDB, and Tailwind CSS. I also
//           have experience working with Framer Motion for animations, MySQL for
//           database management, and a basic understanding of Python. I’m
//           passionate about creating efficient, user-friendly solutions that
//           blend clean design with seamless functionality, and I’m continuously
//           exploring new technologies to enhance my development skills.
//         </h3>

//         <img className="lg:h-[40rem] md:h-[25rem] h-[20rem] mix-blend-lighten"
//          src="images/MyImage.png" alt="profile" />
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

//second code:

// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const AboutSection = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Title animation - fixed to not go upward
//     gsap.fromTo(
//       titleRef.current,
//       { y: 100, opacity: 0 },
//       {
//         y: -200, 
//         opacity: 1,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Content animation
//     gsap.fromTo(
//       contentRef.current,
//       { y: 50, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         delay: 0.3,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 50%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="h-screen relative overflow-hidden bg-gradient-to-b from-black to-purple-900 z-10"
//     >
//       <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
//         <h1
//           ref={titleRef}
//           className="text-4xl md:text-6xl font-bold mb-8 md:mb-16 text-center text-white opacity-0"
//         >
//           About Me
//         </h1>
//       </div>

//       {/* Content container with proper positioning */}
//       <div
//         ref={contentRef}
//         className="absolute bottom-0 left-0 w-full flex md:flex-row flex-col justify-between lg:px-24 px-5 items-center md:items-end gap-8 md:gap-12 pb-8 md:pb-16 opacity-0"
//       >
//         <h3 className="text-sm md:text-lg lg:text-xl font-medium text-purple-200 max-w-2xl text-center md:text-left">
//              <ul className="list-disc pl-6 space-y-2">
//         <li>🚀 I’m <span className="font-semibold">Ali Aman</span>, a passionate <span className="text-blue-600">MERN Stack Developer</span> driven by creativity and curiosity.</li>
//         <li>🎓 Bachelor’s in Computer Science from <span className="font-semibold">EMEA College of Arts and Science</span>, under Calicut University.</li>
//         <li>💡 Built multiple full-stack projects using <span className="text-green-600">React, Node.js, Express, MongoDB,</span> and Tailwind CSS.</li>
//         <li>✨ I believe in writing clean, efficient code and designing smooth, user-friendly experiences.</li>
//         <li>⚡ A quick learner who loves exploring emerging tools and technologies.</li>
//         <li>💻 Skilled in <span className="text-yellow-600">JavaScript</span>, <span className="text-green-600">Python (Basics)</span>, <span className="text-red-600">C (Basics)</span>, and <span className="text-blue-600">Java (Basics)</span>.</li>
//         <li>🤝 Skilled in problem-solving, teamwork, adaptability, and creativity.</li>
//         <li>🎯 My goal is to grow as a developer and build impactful digital solutions.</li>
//       </ul>
//         </h3>

//         <img
//           className="h-64 md:h-80 lg:h-96 mix-blend-lighten"
//           src="images/Gemini_Generated.png"
//           alt="Ali Aman - MERN Stack Developer"
//         />
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

// Third code: 

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const starRef = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation - fixed to not go upward
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: -200, 
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Content animation
    gsap.fromTo(
      contentRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // star animation with different speed and direction
    starRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1
      const speed = 0.5 + Math.random() * 0.5

      gsap.to(star, {
        x: `${direction * (100 + index * 20)}`,
        y: `${direction * -50 - index * 10 }`,
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
        if( trigger.vars.trigger === sectionRef.current){
          trigger.kill()
        }
      })
    }

  }, []);

  const addToStars = (el) => {
    if(el && !starRef.current.includes(el)){
      starRef.current.push(el)
    }
  }  

  return (
    <section
      id="about"
      ref={sectionRef}
      className="h-screen relative overflow-hidden bg-gradient-to-b from-black to-purple-900 z-10"
    >
      <div className=" absolute insert-0 overflow-hidden">
        {/* Starts */}
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
              top: `${ Math.random() * 100 }%`,
              left:`${ Math.random() * 100 }%`
            }}
          />
        ))}

      </div>
      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold mb-8 md:mb-16 text-center text-white opacity-0"
        >
          About Me
        </h1>
      </div>

      {/* Content container with improved responsiveness */}
      <div
        ref={contentRef}
        className="absolute bottom-0 left-0 w-full flex md:flex-row flex-col justify-between lg:px-24 px-4 md:px-5 items-center md:items-end gap-4 md:gap-8 lg:gap-12 pb-4 md:pb-8 lg:pb-16 opacity-0"
      >
        <div className="w-full md:max-w-2xl text-center md:text-left overflow-hidden">
          <ul className="list-disc pl-4 md:pl-6 space-y-2 md:space-y-3 text-xs md:text-sm lg:text-base">
            <li className="text-justify">
              🚀 I'm <span className="font-semibold">Ali Aman</span>, a passionate <span className="text-blue-400">MERN Stack Developer</span> driven by creativity and curiosity.
            </li>
            <li className="text-justify">
              🎓 Bachelor's in Computer Science from <span className="font-semibold">EMEA College of Arts and Science</span>, under Calicut University.
            </li>
            <li className="text-justify">
              💡 Built multiple full-stack projects using <span className="text-green-400">React, Node.js, Express, MongoDB,</span> and Tailwind CSS.
            </li>
            <li className="text-justify">
              ✨ I believe in writing clean, efficient code and designing smooth, user-friendly experiences.
            </li>
            <li className="text-justify">
              ⚡ A quick learner who loves exploring emerging tools and technologies.
            </li>
            <li className="text-justify">
              💻 Skilled in <span className="text-yellow-400">JavaScript</span>, <span className="text-green-400">Python (Basics)</span>, <span className="text-red-400">C (Basics)</span>, and <span className="text-blue-400">Java (Basics)</span>.
            </li>
            <li className="text-justify">
              🤝 Skilled in problem-solving, teamwork, adaptability, and creativity.
            </li>
            <li className="text-justify">
              🎯 My goal is to grow as a developer and build impactful digital solutions.
            </li>
          </ul>
        </div>

        <img
          className="h-48 md:h-64 lg:h-80 xl:h-96 mix-blend-lighten flex-shrink-0 mt-4 md:mt-0"
          src="images/Gemini_Generated.png"
          alt="Ali Aman - MERN Stack Developer"
        />
      </div>
    </section>
  );
};

export default AboutSection;