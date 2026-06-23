import { useState, useCallback } from "react";
import { WorkGalleryItem } from "@/sections/WorkSection/components/WorkGalleryItem";

// Ordered best-to-least: wide aerial/overview shots first, then detail shots
const PHOTOS: {
  imageUrl: string;
  imageAlt: string;
  objectFit?: "cover" | "contain";
}[] = [
  {
    imageUrl:
      "https://c.animaapp.com/mqq6fwidBfIC09/img/uploaded-asset-1782184656287-0.png",
    imageAlt:
      "Completed reroof with architectural shingles and green surroundings",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mqq6fwidBfIC09/img/uploaded-asset-1782184656322-1.jpeg",
    imageAlt: "Aerial view of completed Jacksonville reroof with pine trees",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mqq6fwidBfIC09/img/uploaded-asset-1782184656374-2.png",
    imageAlt: "Completed shingle roof replacement on residential home",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mqq6fwidBfIC09/img/uploaded-asset-1782184752468-0.png",
    imageAlt:
      "Front view of completed roof replacement on Florida home with dark architectural shingles",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mqq6fwidBfIC09/img/uploaded-asset-1782184752477-1.jpeg",
    imageAlt:
      "Aerial view of completed shingle reroof with ridge vents and lush tree backdrop",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mqq6fwidBfIC09/img/uploaded-asset-1782184752486-2.jpeg",
    imageAlt: "Newly installed skylights on a clean gray shingle roof",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mqq6fwidBfIC09/img/uploaded-asset-1782184834565-0.jpeg",
    imageAlt:
      "Aerial view of completed gray shingle roof with skylights and oak trees",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mqq6fwidBfIC09/img/uploaded-asset-1782184834573-1.jpeg",
    imageAlt:
      "Close-up of newly installed skylights on gray architectural shingle roof",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mqq6fwidBfIC09/img/uploaded-asset-1782185565255-0.jpeg",
    imageAlt:
      "Aerial view of completed hip roof with waterfront pool and canal backdrop",
    objectFit: "contain",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mqq6fwidBfIC09/assets/6A9DAFA8-9D23-4E0C-A04E-0859A4D03E51.png",
    imageAlt: "Roof project showing precise valley installation",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mqq6fwidBfIC09/assets/3E2A9698-0E5D-44DC-9BB5-B7137B4EB485.png",
    imageAlt: "Roofing craftsmanship detail by RidgeCrest",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mqq6fwidBfIC09/assets/05A848A9-4E8E-4EC7-9BE6-F63CE2186AFB.png",
    imageAlt: "Roof ridge line and shingle alignment detail",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mqq6fwidBfIC09/assets/03526555-EF96-416E-AD5C-A0E29060D210.png",
    imageAlt: "Roof project progress image RidgeCrest Roofing",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mqq6fwidBfIC09/assets/9CA7BA07-130E-4440-AF93-E91390F44A48.jpeg",
    imageAlt: "Residential roof before final cleanup",
  },
];

export const WorkGallery = () => {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + PHOTOS.length) % PHOTOS.length);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % PHOTOS.length);
  }, []);

  const goTo = useCallback((i: number) => setCurrent(i), []);

  return (
    <div className="mt-7 select-none">
      {/* Main slide */}
      <div
        className="relative w-full overflow-hidden rounded-[18px] shadow-[rgba(7,59,90,0.12)_0px_8px_20px_0px] border border-sky-950/10"
        style={{ aspectRatio: "16/9" }}
      >
        {PHOTOS.map((photo, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-500 ease-in-out"
            style={{
              opacity: i === current ? 1 : 0,
              pointerEvents: i === current ? "auto" : "none",
            }}
          >
            <WorkGalleryItem
              imageUrl={photo.imageUrl}
              imageAlt={photo.imageAlt}
              objectFit={photo.objectFit}
            />
          </div>
        ))}

        {/* Prev button */}
        <button
          onClick={prev}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-sky-950 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-sky-950 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all duration-200 hover:scale-105"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7.5 5L12.5 10L7.5 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Counter */}
        <div className="absolute bottom-3 right-4 bg-black/40 text-white text-sm px-3 py-1 rounded-full font-medium">
          {current + 1} / {PHOTOS.length}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4 flex-wrap">
        {PHOTOS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`rounded-full transition-all duration-200 ${
              i === current
                ? "bg-orange-500 w-6 h-2.5"
                : "bg-sky-950/20 hover:bg-sky-950/40 w-2.5 h-2.5"
            }`}
          />
        ))}
      </div>

      {/* Thumbnail strip */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {PHOTOS.map((photo, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
              i === current
                ? "border-orange-500 scale-105 shadow-md"
                : "border-transparent opacity-60 hover:opacity-90"
            }`}
          >
            <img
              src={photo.imageUrl}
              alt={photo.imageAlt}
              className="w-full h-full object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
