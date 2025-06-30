const items = [
  {
    name: "Charvi",
    title: "Co-Founder, FG Lawkit",
    image:
      "/charvi.jpg",
    body: " I make sure every compliance is double-checked—nothing gets past me. Need legal advice? Just DM us on our socials!",
  },
  {
    name: "Archit Jain",
    title: "CEO, Compitcom Pvt Ltd",
    image:
      "/archit.webp",
    body: "I personally ensure every detail is flawless—no compromises here. Looking to elevate your digital presence? Just DM us on our socials!",
  },
  {
    name: "Teesha Sharma",
    title: "Graphic Designer",
    image:
      "/teesha.jpg",
    body: "Hey there! I create, play, and have fun with design. My besties? Canva, Illustrator, and Premiere Pro. We make cool stuff together—hope you like it! P.S. I'm secretly learning German… shhh",
  },
];

export default function Page() {
  return (
    <div className="relative mb-16 flex items-center lg:mb-28">
      <div className="relative flex max-w-[100vw] overflow-hidden py-5">
        <div className="flex w-max animate-marquee [--duration:60s] hover:[animation-play-state:paused]">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="h-full px-2.5">
              <div className="relative h-full w-[28rem] rounded-2xl border bg-white/5 px-8 py-6">
                <div className="pb-4 font-light">{item.body}</div>

                <div className="mt-auto flex items-center gap-4">
                  <img src={item.image} className="h-9 w-9 rounded-full" />

                  <div className="flex flex-col text-sm">
                    <div className="">{item.name}</div>

                    <div className="">{item.title}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
