import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const FloatInSection = ({ children }) => {
  const container = useRef();

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".reveal");

      items.forEach((item) => {
        //  Set initial state
        gsap.set(item, { y: 50, opacity: 0 });

        ScrollTrigger.create({
          trigger: item,
          start: "top 90%",

          // 1. Scroll down Logic
          onEnter: () => {
            gsap.to(item, {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              overwrite: "auto",
            });
          },
          // 2. Scroll up logic
          onLeaveBack: () => {
            gsap.to(item, {
              y: 50,
              opacity: 0,
              duration: 0.1,
              ease: "power2.in",
              overwrite: "auto",
            });
          },
        });
      });
    },
    { scope: container }
  );

  return <div ref={container}>{children}</div>;
};

export default FloatInSection;
