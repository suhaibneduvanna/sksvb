import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import hero from "@/assets/hero-classroom.jpg";
import slide from "@/assets/slide.jpg";
import smartEventus from "@/assets/slider-smart-eventus.jpg";
import painting from "@/assets/slider-painting.jpg";
import painting2 from "@/assets/slider-painting-2.jpg";

const slides = [
  { src: painting2, alt: "Student activities" },
  { src: smartEventus, alt: "Smart Eventus Award Ceremony" },
  { src: slide, alt: "Young students engaged in classroom activities" },

];

export function HeroSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4500, stopOnInteraction: false }),
  ]);

  return (
    <div className="relative w-full overflow-hidden">
      <div ref={emblaRef} className="w-full overflow-hidden">
        <div className="flex w-full">
          {slides.map((s, i) => (
            <div key={i} className="relative flex-[0_0_100%] min-w-0 w-full">
              <img
                src={s.src}
                alt={s.alt}
                className="w-full h-[60vh] md:h-[80vh] lg:h-[85vh] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
