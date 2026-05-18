import d1 from "@/assets/director-1.jpg";
import d2 from "@/assets/director-2.jpg";
import d3 from "@/assets/director-3.jpg";
import scholar from "@/assets/scholar.jpg";

export type BoardMember = {
  name: string;
  role: string;
  image: string;
};

export const directors: BoardMember[] = [
  {
    name: "H.E. Sayed Ali Bafaqee Thangal",
    role: "President",
    image: d1,
  },
  {
    name: "H.E. Sheikh Abubakr Ahmad",
    role: "General Secretary",
    image: d2,
  },
  {
    name: "H.E. Attakoya Thangal Kumbol",
    role: "Treasurer",
    image: d3,
  },
];

export const fullBoard: BoardMember[] = [
  ...directors,
  // {
  //   name: "Moulvi Ahmad Kabeer",
  //   role: "Treasurer",
  //   image: d3,
  // },
  // {
  //   name: "Sheikh Yusuf Madani",
  //   role: "Director of Publications",
  //   image: d1,
  // },
  // {
  //   name: "Moulvi Ibrahim Saqafi",
  //   role: "Director of Welfare",
  //   image: d2,
  // },
  // {
  //   name: "Dr. Salim Rahman",
  //   role: "Director of Teacher Training",
  //   image: d3,
  // },
  // {
  //   name: "Sayyid Faisal Bukhari",
  //   role: "Regional Coordinator — North",
  //   image: d1,
  // },
  // {
  //   name: "Moulana Riyaz Ahmed",
  //   role: "Regional Coordinator — East",
  //   image: d2,
  // },
];
