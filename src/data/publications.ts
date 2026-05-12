export type Publication = {
  id: string;
  title: string;
  classLevel: string; // e.g. "1", "8", "10", "+1"
  syllabus: "Shafi" | "Hanafi" | "Common";
  language: "Arabic" | "Malayalam" | "Kannada" | "Tamil" | "Urdu" | "English";
  subject: string;
  description: string;
  // Visual cover style
  palette: number;
};

const subjects = ["Aqeedah", "Fiqh", "Tareekh", "Akhlaq", "Tajweed", "Arabic Reader", "Moral Studies"];

function gen(): Publication[] {
  const items: Publication[] = [];
  const classes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "+1", "+2"];
  const syllabi: Publication["syllabus"][] = ["Shafi", "Hanafi", "Common"];
  const languages: Publication["language"][] = ["Arabic", "Malayalam", "Kannada", "Tamil", "Urdu", "English"];
  let i = 0;
  for (const cls of classes) {
    for (const syl of syllabi) {
      const subject = subjects[i % subjects.length];
      const lang = languages[i % languages.length];
      items.push({
        id: `pub-${cls}-${syl}-${i}`,
        title: `${subject} — Class ${cls}`,
        classLevel: cls,
        syllabus: syl,
        language: lang,
        subject,
        description: `Official ${syl === "Common" ? "common" : syl + " school"} ${subject.toLowerCase()} textbook for class ${cls}, in ${lang}.`,
        palette: i % 6,
      });
      i++;
    }
  }
  return items;
}

export const publications: Publication[] = gen();

export const classOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "+1", "+2"];
export const syllabusOptions: Publication["syllabus"][] = ["Shafi", "Hanafi", "Common"];

export const palettes = [
  { from: "oklch(0.30 0.17 268)", to: "oklch(0.52 0.26 295)" }, // indigo→violet
  { from: "oklch(0.35 0.15 30)", to: "oklch(0.55 0.18 50)" }, // terracotta
  { from: "oklch(0.30 0.12 200)", to: "oklch(0.50 0.16 220)" }, // teal
  { from: "oklch(0.32 0.14 150)", to: "oklch(0.50 0.16 165)" }, // forest
  { from: "oklch(0.40 0.18 350)", to: "oklch(0.55 0.20 10)" }, // rose
  { from: "oklch(0.30 0.10 80)", to: "oklch(0.55 0.14 90)" }, // gold
];
