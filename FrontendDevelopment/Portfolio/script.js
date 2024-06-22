document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate header
    gsap.from("header", { duration: 1, y: -100, opacity: 0 });

    // Animate nav links
    gsap.from("nav ul li", {
        duration: 1,
        opacity: 0,
        y: -50,
        stagger: 0.2,
        delay: 0.5
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 75%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 1
        });
    });


    // Animate project cards on scroll with stagger
    gsap.from(".project", {
        scrollTrigger: {
            trigger: ".project",
            start: "top 75%",
            toggleActions: "play none none none"
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    });

    // Animate h1 text
    gsap.from("#home h1", {
        duration: 1.5,
        opacity: 0,
        y: -50,
        ease: "bounce"
    });

    // Animate paragraph text in home
    gsap.from("#home p", {
        duration: 1,
        opacity: 0,
        x: -100,
        delay: 1
    });
});