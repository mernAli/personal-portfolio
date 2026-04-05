import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactSection = () => {
  const circleRef = useRef(null);
  const sectionRef = useRef(null);
  const initialTextRef = useRef(null);
  const finalTextRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.getAll().forEach((st) => {
      if (st.vars.trigger === sectionRef.current) {
        st.kill(true);
      }
    });

    gsap.set(circleRef.current, { scale: 1 });
    gsap.set(initialTextRef.current, { opacity: 1 });
    gsap.set(finalTextRef.current, { opacity: 0 });
    gsap.set(buttonRef.current, { opacity: 0, y: 20 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    });

    tl.to(circleRef.current, { scale: 5, backgroundColor: "#9333EA", ease: "power1.inOut", duration: 0.5 }, 0);
    tl.to(initialTextRef.current, { opacity: 0, ease: "power1.out", duration: 0.2 }, 0.1);
    tl.to(circleRef.current, { scale: 17, backgroundColor: "#E9D5FF", duration: 0.5 }, 0.5);
    tl.to(finalTextRef.current, { opacity: 1, ease: "power2.in", duration: 0.2 }, 0.7);
    tl.to(buttonRef.current, { opacity: 1, y: 0, ease: "power2.in", duration: 0.2 }, 0.8);

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === sectionRef.current) {
          st.kill(true);
        }
      });
    };
  }, []);

  // YOUR EMAIL HERE — replace with your actual Gmail address
  const YOUR_EMAIL = "aliamandev@gmail.com";
  const SUBJECT = encodeURIComponent("Hiring Inquiry");
  const BODY = encodeURIComponent("Hi Ali, I'd like to connect with you! And this connection is made through the contact button on your portfolio website.");

  // This opens Gmail compose in a new tab — works even without a desktop mail app
  const gmailComposeURL = `https://mail.google.com/mail/?view=cm&to=${YOUR_EMAIL}&su=${SUBJECT}&body=${BODY}`;

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <section
        id="contact"
        ref={sectionRef}
        className="flex items-center justify-center bg-black relative"
        style={{ height: "100vh", overflow: "visible" }}
      >
        {/* Expanding circle */}
        <div
          ref={circleRef}
          className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full flex items-center justify-center relative shadow-violet-300/50 shadow-lg bg-gradient-to-r from-violet-400 to-pink-200"
        >
          <p
            ref={initialTextRef}
            className="text-black font-bold text-base sm:text-lg md:text-xl absolute inset-0 flex items-center justify-center text-center"
          >
            SCROLL DOWN
          </p>
        </div>

        {/* Final text overlay — positioned over the expanded circle */}
        <div
          ref={finalTextRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 opacity-0"
          style={{ pointerEvents: "none" }}
        >
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's Connect!
          </h1>
          <p className="text-black text-sm sm:text-base md:text-lg max-w-xl mb-8 leading-relaxed">
            I'm always open to new opportunities, collaborations, and meaningful
            conversations. If you're looking for a passionate developer who loves
            to learn, solve problems, and build impactful projects, I'd be excited
            to connect with you.
          </p>
        </div>

        {/* Gmail compose link — opens Gmail in a new tab, works without any desktop mail app */}
        <a
          ref={buttonRef}
          href={gmailComposeURL}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-[20%] px-8 py-3 rounded-xl bg-black text-white font-bold hover:bg-white hover:text-black border-2 border-black transition-all duration-300 opacity-0 z-50"
        >
          Contact Me
        </a>

      </section>
    </div>
  );
};

export default ContactSection;