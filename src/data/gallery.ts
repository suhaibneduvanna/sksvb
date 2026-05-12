import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import hero from "@/assets/hero-classroom.jpg";
import scholar from "@/assets/scholar.jpg";
import books from "@/assets/books.jpg";

export type GalleryItem = {
  src: string;
  caption: string;
  category: "Events" | "Classrooms" | "Leadership" | "Publications";
};

export const gallery: GalleryItem[] = [
  { src: event1, caption: "Annual conference at Calicut", category: "Events" },
  { src: event2, caption: "Morning class in session", category: "Classrooms" },
  { src: event3, caption: "Graduation ceremony", category: "Events" },
  { src: hero, caption: "Madrasa classroom", category: "Classrooms" },
  { src: scholar, caption: "The Indian Grand Mufti", category: "Leadership" },
  { src: books, caption: "Textbook collection", category: "Publications" },
  { src: event1, caption: "Audience at the convention", category: "Events" },
  { src: event2, caption: "Students at study", category: "Classrooms" },
  { src: event3, caption: "Awarding the top scholars", category: "Events" },
];
