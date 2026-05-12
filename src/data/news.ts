import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import scholar from "@/assets/scholar.jpg";
import hero from "@/assets/hero-classroom.jpg";
import books from "@/assets/books.jpg";

export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  body: string[];
};

export const news: NewsItem[] = [
  {
    slug: "annual-conference-2026",
    title: "Annual Educational Conference convenes 5,000 scholars in Calicut",
    excerpt:
      "Teachers, scholars and dignitaries gathered for the Board's flagship annual conference, charting the future of moral education.",
    date: "2026-04-22",
    category: "Events",
    image: event1,
    body: [
      "More than five thousand teachers, scholars and well-wishers gathered at the Islamic Educational Board's annual conference in Calicut, Kerala, to discuss the future of moral and spiritual education in India.",
      "The Indian Grand Mufti Moulana Sheikh Aboobacker delivered the keynote address, calling on educators to nurture a generation that is patriotic, principled and respectful of every faith.",
      "The two-day programme included sessions on teacher training, child psychology, environmental ethics and the use of technology in classrooms across more than ten thousand affiliated madrasas.",
    ],
  },
  {
    slug: "new-textbook-launch",
    title: "Board launches revised moral curriculum for grades 8 to 10",
    excerpt:
      "A new series of textbooks for upper primary and secondary classes was unveiled, available in six Indian languages.",
    date: "2026-03-14",
    category: "Publications",
    image: books,
    body: [
      "The Islamic Educational Board has released a fully revised moral curriculum for grades 8, 9 and 10. The new series — published in Arabic, Malayalam, Kannada, Tamil, Urdu and English — places renewed emphasis on environmental ethics, secular vision and religious harmony.",
      "Each textbook has been peer-reviewed by senior scholars and tested in selected madrasas across Kerala, Karnataka and Tamil Nadu before this national rollout.",
    ],
  },
  {
    slug: "teacher-training-program",
    title: "50,000 teachers complete the Board's modern methodology programme",
    excerpt:
      "A milestone for the Board's continuous professional development programme covering classroom craft and child psychology.",
    date: "2026-02-02",
    category: "Training",
    image: event2,
    body: [
      "The Board has reached the milestone of 50,000 teachers trained in modern teaching methodology and child psychology. The programme covers classroom management, inclusive learning and ethical pedagogy.",
      "Regional centres in Delhi, Mumbai, Kolkata and Bengaluru continue to host monthly cohorts.",
    ],
  },
  {
    slug: "graduation-ceremony",
    title: "Annual graduation honours top 200 students across India",
    excerpt:
      "The Board recognised outstanding students from across its affiliated madrasas with a unified, centralised certification.",
    date: "2026-01-19",
    category: "Events",
    image: event3,
    body: [
      "The Board's centralised public examination culminated in a graduation ceremony recognising the top 200 students from its affiliated madrasas across the country.",
      "Certificates were issued under the Board's unified system, ensuring that every graduate's qualification carries equal recognition nationwide.",
    ],
  },
  {
    slug: "parent-motivation-classes",
    title: "Parent motivation classes expand to twelve new districts",
    excerpt:
      "The Board's periodic parent motivation classes are expanding their reach to families in twelve additional districts.",
    date: "2025-12-08",
    category: "Community",
    image: hero,
    body: [
      "The periodic parent motivation classes — designed to align home and school in the moral upbringing of children — are now expanding to twelve new districts across Kerala and Karnataka.",
      "The sessions cover communication, value formation, and the role of parents in fostering religious harmony.",
    ],
  },
  {
    slug: "scholar-address",
    title: "Grand Mufti's message: education must heal, not divide",
    excerpt:
      "In his Eid address, Indian Grand Mufti Sheikh Aboobacker reiterated the Board's commitment to communal harmony.",
    date: "2025-11-02",
    category: "Leadership",
    image: scholar,
    body: [
      "In his Eid message, Indian Grand Mufti Moulana Sheikh Aboobacker reaffirmed the Board's foundational commitment to religious harmony and the elimination of communalism through education.",
      "He invited every parent and teacher to renew their pledge to nurture a patriotic, cultured generation that respects every member of society.",
    ],
  },
];

export function getNewsBySlug(slug: string) {
  return news.find((n) => n.slug === slug);
}
