import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";

const ProjectSection = () => {

    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const titleLineRef = useRef(null);
    const triggerRef = useRef(null)
    const horizontalRef = useRef(null);

    // project images data
    // FIX: Added liveUrl field to each project.
    // Projects without a live link have liveUrl: null — their title stays
    // as plain text. Projects with a URL get a clickable <a> tag.
    const projectImages = [
        {
            id: 1,
            title: "Imagify",
            imageSrc: "/images/Imagify.png",
            liveUrl: null, // Add your live URL here if available
        },
        {
            id: 2,
            title: "Dubai-Geenie",
            imageSrc: "/images/DubaiGeenie.png",
            liveUrl: null, // Add your live URL here if available
        },
        {
            id: 3,
            title: "Turf-And-Pool",
            imageSrc: "/images/TurfAndPool.jpg",
            liveUrl: null, // Add your live URL here if available
        },
        {
            id: 4,
            title: "Portfolio",
            imageSrc: "/images/Portfolio.png",
            liveUrl: null, // Add your live URL here if available
        },
        {
            id: 5,
            title: "Job Portal",
            imageSrc: "/images/JobPortal.png",
            liveUrl: "https://react-job-portal-ohsk.vercel.app/",
        },
    ]

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            titleRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
                scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" }
            }
        )

        gsap.fromTo(
            titleLineRef.current,
            { width: "0%", opacity: 0 },
            {
                width: "100%", opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.3,
                scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" }
            }
        )

        gsap.fromTo(
            triggerRef.current,
            { y: 100, rotationX: 20, opacity: 0 },
            {
                y: 0, rotationX: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2,
                scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none reverse" }
            }
        )

        gsap.fromTo(
            sectionRef.current,
            { backgroundPosition: "50% 0%" },
            {
                backgroundPosition: "50% 100%", ease: "none",
                scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: true }
            }
        )

        const horizontalScroll = gsap.to(".panel", {
            xPercent: -100 * (projectImages.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: () => `+=${horizontalRef.current.offsetWidth}`,
                pin: true,
                scrub: 1,
                snap: {
                    snapTo: 1 / (projectImages.length - 1),
                    duration: { main: 0.2, max: 0.3 },
                    delay: 0.1,
                },
                invalidateOnRefresh: true,
            }
        })

        const panels = gsap.utils.toArray(".panel")
        panels.forEach((panel) => {
            const image = panel.querySelector(".project-image")
            const imageTitle = panel.querySelector(".project-title")

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: panel,
                    containerAnimation: horizontalScroll,
                    start: "left right",
                    end: "right left",
                    scrub: true,
                }
            })

            tl.fromTo(image, { scale: 0, rotate: -20 }, { scale: 1, rotate: 1, duration: 0.5 })

            if (imageTitle) {
                tl.fromTo(imageTitle, { y: 40 }, { y: -100, duration: 0.3 }, 0.2)
            }
        })

    }, [projectImages.length])

    return (
        <section
            ref={sectionRef}
            id="horizontal-section"
            className="relative py-20 bg-slate-100 overflow-hidden bg-gradient-to-b from-purple-900 to-black"
        >
            {/* Section title */}
            <div className="container mx-auto px-4 mb-16 relative z-10">
                <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-white">
                    Featured Project
                </h2>
                <div ref={titleLineRef} className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0"></div>
            </div>

            {/* Horizontal scroll section */}
            <div ref={triggerRef} className="overflow-hidden opacity-0">
                <div ref={horizontalRef} className="horizontal-section flex md:w-[500%] w-[520%]">
                    {/* Note: 5 projects = md:w-[500%] w-[520%] */}

                    {projectImages.map((project) => (
                        <div
                            key={project.id}
                            className="panel relative flex items-center justify-center"
                        >
                            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 sm:p-8 md:p-12">
                                <img
                                    className="project-image max-w-full max-h-full rounded-2xl object-cover"
                                    src={project.imageSrc}
                                    alt={project.title}
                                />

                                {/* FIX: If the project has a liveUrl, wrap the title in an <a> tag
                                    that opens in a new tab. Otherwise render plain text.
                                    pointer-events-none is removed so the link is actually clickable. */}
                                {project.liveUrl ? (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-title flex items-center gap-3 md:text-3xl text-white mt-6 z-50 text-nowrap hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {project.title} <SlShareAlt />
                                    </a>
                                ) : (
                                    <h2 className="project-title flex items-center gap-3 md:text-3xl text-white mt-6 z-50 text-nowrap hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
                                        {project.title} <SlShareAlt />
                                    </h2>
                                )}
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </section>
    )
}

export default ProjectSection