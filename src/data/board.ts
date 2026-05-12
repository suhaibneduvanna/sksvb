import d1 from "@/assets/director-1.jpg";
import d2 from "@/assets/director-2.jpg";
import d3 from "@/assets/director-3.jpg";
import scholar from "@/assets/scholar.jpg";

export type BoardMember = {
  name: string;
  role: string;
  region?: string;
  image: string;
  bio: string;
};

export const directors: BoardMember[] = [
  {
    name: "Moulana Sheikh Aboobacker",
    role: "President & Indian Grand Mufti",
    region: "Calicut, Kerala",
    image: scholar,
    bio: "The spiritual head of the Board, a globally respected scholar guiding the movement's vision for moral and spiritual education.",
  },
  {
    name: "Sayyid Muhammad Koya Thangal",
    role: "General Secretary",
    region: "Calicut, Kerala",
    image: d1,
    bio: "Oversees the Board's national operations, curriculum certification and public examinations.",
  },
  {
    name: "Dr. Abdul Hakeem Faizy",
    role: "Director of Academics",
    region: "Bengaluru, Karnataka",
    image: d2,
    bio: "Leads the Board's pedagogy, teacher training and the design of textbooks across six languages.",
  },
];

export const fullBoard: BoardMember[] = [
  ...directors,
  {
    name: "Moulvi Ahmad Kabeer",
    role: "Treasurer",
    region: "Kochi, Kerala",
    image: d3,
    bio: "Stewards the financial health of the Board and its more than ten thousand affiliated madrasas.",
  },
  {
    name: "Sheikh Yusuf Madani",
    role: "Director of Publications",
    region: "Mumbai, Maharashtra",
    image: d1,
    bio: "Heads the publication of more than 140 textbooks in Arabic, Malayalam, Kannada, Tamil, Urdu and English.",
  },
  {
    name: "Moulvi Ibrahim Saqafi",
    role: "Director of Welfare",
    region: "Delhi",
    image: d2,
    bio: "Coordinates the Board's humanitarian welfare programmes for staff, students and the wider community.",
  },
  {
    name: "Dr. Salim Rahman",
    role: "Director of Teacher Training",
    region: "Bengaluru, Karnataka",
    image: d3,
    bio: "Leads the modern methodology and child psychology programmes for the Board's 50,000 teachers.",
  },
  {
    name: "Sayyid Faisal Bukhari",
    role: "Regional Coordinator — North",
    region: "Delhi",
    image: d1,
    bio: "Supervises madrasas and regional offices across north India and oversees state-level liaison.",
  },
  {
    name: "Moulana Riyaz Ahmed",
    role: "Regional Coordinator — East",
    region: "Kolkata, West Bengal",
    image: d2,
    bio: "Leads outreach and curriculum implementation in eastern India and the Bengal region.",
  },
];
