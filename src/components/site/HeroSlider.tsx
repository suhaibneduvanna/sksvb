import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import hero from "@/assets/hero-classroom.jpg";
import students from "@/assets/hero-students.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";

const slides = [
  { src: students, alt: "Young students engaged in classroom activities" },
  { src: hero, alt: "Madrasa classroom" },
  { src: event1, alt: "Annual conference" },
  { src: event2, alt: "Morning class in session" },
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
