const items = [
  {
    name: "Darshan Jain",
    title: "Co-Founder, Compitcom Pvt Ltd",
    image:
      "/darshan.jpg",
    body: "I handle all the tech and backend stuff ,whether it’s this or FG LawKit. Not to brag, but yeah… I’m the boss. Bribe me (nicely), and I might just give you the best discount .",
  },
  {
    name: "Vikas Maur",
    title: "Full Stack Developer",
    image:
      "/vikas.jpg",
    body: "Hey! Looking for a full-stack developer? Just drop us a message. We can even help you start your own thing! Oh, and shoutout to Parth—he got me into philosophy. Kinda helps when I’m trying to impress my crush 😅.",
  },
  {
    name: "Dipesh Sharma",
    title: "Frontend Developer",
    image:
      "/dipesh.jpg",
    body: "I’m the guy who can talk to you about Tailwind, Figma, and React! The fun part? I got a CV and SOP course for free :)",
  },
  
];

export default function Page() {
  return (
    <div className="relative flex items-center">
      <div className="relative flex max-w-[100vw] overflow-hidden py-5">
        <div className="flex w-max animate-marquee [--duration:60s] hover:[animation-play-state:paused]">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="h-full px-2.5">
              <div className="relative h-full w-[28rem] rounded-2xl border bg-white/5 px-8 py-6">
                <div className="pb-4 font-light">{item.body}</div>

                <div className="mt-auto flex items-center gap-4">
                  <img src={item.image} className="h-16 w-16 object-cover rounded-full" />

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
