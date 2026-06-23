import { useState, useEffect, useCallback } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { ReviewCard } from "@/sections/ReviewsSection/components/ReviewCard";

const reviews = [
  {
    review:
      "Chris was outstanding to work with. My home required special handling, and Chris expertly coordinated both the replacement of my existing roof and the new gabled roof for my sunroom. He was thorough, responsive, and proactive, meeting directly with my insurance company and providing all required documentation to ensure coverage went smoothly. I highly recommend Chris for his professionalism, attention to detail, and excellent project management.",
    author: "",
  },
  {
    review:
      "We worked with Cole for a reroof on our new home. He helped schedule us quickly as we needed a new roof for insurance to cover us. He communicated well, was efficient, and did a great job!",
    author: "",
  },
  {
    review:
      "RidgeCrest Roofing's owner, Chris, was outstanding to work with. My home required special handling, and Chris expertly coordinated both the replacement of my existing roof and the new gabled roof for my sunroom. He was thorough, responsive, and proactive, meeting directly with my insurance company and providing all required documentation to ensure coverage went smoothly. I highly recommend Chris and RidgeCrest for their professionalism, attention to detail, and excellent project management.",
    author: "",
  },
  {
    review:
      "First time homeowner. House is almost 40 years old. RidgeCrest provided A+ service and answered every step I had along the way. Roof on my house had been patched multiple times over the years and desperately needed to be completely replaced. RidgeCrest worked with my insurance company directly and I barely had to lift a finger. Our solar panels were removed, roof was torn off and it was all replaced at a lightning pace. The team discovered additional rot under the tiles and immediately had it fixed and they worked out the additional cost with the insurance company. Had it not been for an afternoon rain storm, it probably would've been done the same day.",
    author: "",
  },
  {
    review:
      "Really impressive team and company. Couldn't recommend them any more. We had a pretty serious storm that had damaged our roof, and through recommendations from a friend I reached out to Chris with RidgeCrest Roofing. He showed up quickly and identified numerous issues with our old roof and our claim with the insurance company was approved with no problems. Chris's professionalism, knowledge, attention to detail and customer courtesy was incredible. Plus he's just a nice guy! The roof was replaced beautifully and professionally from RidgeCrest's incredible crew. I highly recommend RidgeCrest and Chris.",
    author: "",
  },
  {
    review:
      "As a new-ish homeowner, I am so thankful we went with RidgeCrest. Cole was such a huge help from the start, patiently explaining the entire process and helping me understand all that needed to be done. He kept in contact, scheduled everything as quickly as possible, and was infinitely more helpful than the insurance company. Our new roof looks so nice! Really can't say enough about how great it was to work with them.",
    author: "",
  },
  {
    review:
      "RidgeCrest Roofing did an excellent job with our roofing project from start to finish thanks to our project manager, Cole. We are very pleased with the work and timeliness in completing the project. Cole was always available to answer questions and assist us all along the way. He made the project very smooth. I fully recommend RidgeCrest Roofing for your home roof project.",
    author: "",
  },
  {
    review:
      "Chris did a great job of keeping me up to date and on track for the roof replacement. Thank you.",
    author: "",
  },
  {
    review:
      "RidgeCrest Roofing did amazing job in replacing the roof at my home. Initially, my home insurance company gave tough time in approving the entire roof replacement. Chris helped me understand the process and filed the necessary documentation for the claim. Additionally, Chris personally monitored the roof replacement and I am thankful to Chris for his outstanding commitment to get the work done to my requirements.",
    author: "",
  },
];

export const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 250);
    },
    [animating],
  );

  const prev = () => goTo((current - 1 + reviews.length) % reviews.length);
  const next = () => goTo((current + 1) % reviews.length);

  const r = reviews[current];

  return (
    <section
      id="testimonials"
      className="box-border caret-transparent outline-[3px] w-[345px] mx-auto py-[72px] md:w-[1120px]"
    >
      <SectionHeader
        label="Client Reviews"
        title="Homeowners Across Jacksonville &amp; St. Marys Trust RidgeCrest"
      />

      <div className="relative mt-10 flex flex-col items-center">
        {/* Card */}
        <div
          className="w-full max-w-2xl transition-opacity duration-250"
          style={{ opacity: animating ? 0 : 1 }}
        >
          <ReviewCard review={r.review} author={r.author} />
        </div>

        {/* Arrow controls */}
        <div className="flex items-center gap-6 mt-6">
          <button
            onClick={prev}
            aria-label="Previous review"
            className="w-10 h-10 rounded-full border border-stone-300 bg-white/80 flex items-center justify-center text-cyan-900 hover:bg-cyan-900 hover:text-white transition-colors shadow-sm"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-5 h-2.5 bg-cyan-900"
                    : "w-2.5 h-2.5 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next review"
            className="w-10 h-10 rounded-full border border-stone-300 bg-white/80 flex items-center justify-center text-cyan-900 hover:bg-cyan-900 hover:text-white transition-colors shadow-sm"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Counter */}
        <p className="mt-3 text-sm text-stone-400">
          {current + 1} / {reviews.length}
        </p>
      </div>
    </section>
  );
};
