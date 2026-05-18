import { createFileRoute } from "@tanstack/react-router";
import { Play } from "lucide-react";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Videos — Islamic Educational Board" },
      { name: "description", content: "Watch the latest videos, lectures, and events from the Islamic Educational Board." },
    ],
  }),
  component: VideosPage,
});

const videos = [
  {
    id: "1",
    title: "Islamic Educational Board Annual Conference 2024",
    youtubeId: "eIhIO9nHf0Y", // Placeholder, will be replaced with actual video IDs
    date: "May 2024",
  },
  {
    id: "2",
    title: "Guidance for Teachers in Madrasas",
    youtubeId: "Z9V_FNFnIxM",
    date: "April 2024",
  },
  {
    id: "3",
    title: "Message from the Grand Mufti",
    youtubeId: "g27zdvStf9I",
    date: "March 2024",
  },
  {
    id: "4",
    title: "Public Examination Highlights",
    youtubeId: "5xJnItyQESQ",
    date: "February 2024",
  },
  {
    id: "5",
    title: "Moral Education in the Modern Era",
    youtubeId: "DuOc6gqC2iw",
    date: "January 2024",
  },
  {
    id: "6",
    title: "Curriculum Updates and Syllabus Discussion",
    youtubeId: "TltDeicvfJA",
    date: "December 2023",
  },
];

function VideosPage() {
  return (
    <>
      <section className="container-x pt-26 md:pt-34 pb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Media</span>
        <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold text-primary text-balance max-w-4xl">
          Watch & <span className="italic font-light">Learn.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Explore our collection of lectures, event highlights, and educational guidelines on our official YouTube channel.
        </p>
      </section>

      <section className="container-x pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {videos.map((video) => (
            <div key={video.id} className="group flex flex-col">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-secondary shadow-soft mb-4">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                  title={video.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-semibold text-accent uppercase tracking-wider mb-2">
                <Play className="size-3" />
                {video.date}
              </div>
              <h3 className="font-display text-xl text-primary leading-snug group-hover:text-accent transition-colors">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
