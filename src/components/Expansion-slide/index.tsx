import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.module.scss";

gsap.registerPlugin(ScrollTrigger);

interface ContentSectionProps {
  imageSrc: string;
  imageAlt: string;
  sectionClass: string;
  reverse?: boolean;
  backgroundColor?: string;
}

export default function ContentSection({
  imageSrc,
  imageAlt,
  sectionClass,
  reverse = false,
  backgroundColor = "#000",
}: ContentSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
  if (!sectionRef.current) return;

  const section = sectionRef.current;
  const border = section.querySelector(
    ".content-section__border-frame"
  ) as HTMLElement;

  if (!border) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "bottom bottom",
      end: "+=400",  // Shorter duration - unpins immediately after animation
      scrub: true,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  // Animate border to zero
  tl.to(border, {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,    
    borderBottomWidth: 0,   
    ease: "power2.out",
    duration: 1,
  });

  return () => {
    ScrollTrigger.getAll().forEach(t => t.kill());
  };
}, []);


  return (
    <section ref={sectionRef} style={{ backgroundColor }}>
      <div className={`content-section__container ${reverse ? "reverse" : ""}`}>
        <div
          ref={imageContainerRef}
          className="content-section__image-container"
        >
          <img
            ref={imageRef}
            src={imageSrc}
            alt={imageAlt}
            className="content-section__image"
          />
          <div className="content-section__border-frame" style={{ borderColor: backgroundColor }} />
        </div>
      </div>
    </section>
  );
}