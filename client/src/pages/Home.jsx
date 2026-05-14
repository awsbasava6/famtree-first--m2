import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [bgImage, setBgImage] = useState("/images/sunshine.jpg");
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const images = ["/images/sunshine.jpg", "/images/sunset.jpg"];
    let index = 0;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        index = (index + 1) % images.length;
        setBgImage(images[index]);
        setFade(true);
      }, 1000);
    }, 21000);

    return () => clearInterval(interval);
  }, []);

  const cards = [
    { title: "Childhood", desc: "Capture those first steps, words, and magical moments.", image: "/images/childhood_with_babies.jpg", color: "bg-pink-100/90" },
    { title: "School", desc: "Document learning adventures and friendships.", image: "/images/school_with_children.jpg", color: "bg-blue-100/90" },
    { title: "College", desc: "Celebrate independence and learning.", image: "/images/college_with_students.jpg", color: "bg-green-100/90" },
    { title: "Graduate", desc: "Academic accomplishments and future goals.", image: "/images/graduation_with_graduates.jpg", color: "bg-yellow-100/90" },
    { title: "Career", desc: "Professional growth and milestones.", image: "/images/career_with_professionals.jpg", color: "bg-orange-100/90" },
    { title: "Marriage", desc: "Partnership, love, and shared future.", image: "/images/marriage_with_couple.jpg", color: "bg-rose-100/90" },
    { title: "Health", desc: "Wellness journeys and balanced living.", image: "/images/health_with_people.jpg", color: "bg-emerald-100/90" },
    { title: "Wealth", desc: "Growth and financial wisdom.", image: "/images/wealth_with_people.jpg", color: "bg-lime-100/90" },
    { title: "Achievements", desc: "Celebrate milestones and success.", image: "/images/achievements_with_people.jpg", color: "bg-cyan-100/90" },
    { title: "Friends", desc: "Meaningful bonds and shared joy.", image: "/images/friends_with_people.jpg", color: "bg-indigo-100/90" },
    { title: "Children", desc: "Growth and memories with children.", image: "/images/children_with_family.jpg", color: "bg-violet-100/90" },
    { title: "Retired", desc: "Golden years of wisdom and joy.", image: "/images/retired_with_couple.jpg", color: "bg-teal-100/90" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* HERO SECTION */}
      <div
        className={`relative w-full h-[33vh] transition-opacity duration-[1500ms] ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white/80 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Your Life Journey
          </h1>
          <p className="text-gray-700 text-center max-w-2xl px-4">
            Preserve memories through all stages of life and build a digital legacy.
          </p>
        </div>
      </div>

      {/* CARDS GRID */}
      <div className="flex-1 py-10 px-8 bg-white/40">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Link
              key={index}
              to={`/category/${card.title.toLowerCase()}`}
              className={`flex items-center rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition ${card.color}`}
            >
              <div className="w-2/5 h-36">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 w-3/5">
                <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                <p className="text-sm">{card.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

