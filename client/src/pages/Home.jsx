import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
	  const [bgImage, setBgImage] = useState("/images/sunshine.jpg");
	  const [fade, setFade] = useState(true);

	  useEffect(() => {
		      const images = ["/images/sunshine.jpg", "/images/sunset.jpg"];
		      let index = 0;

		      const interval = setInterval(() => {
			            setFade(false); // start fade out
			            setTimeout(() => {
					            index = (index + 1) % images.length;
					            setBgImage(images[index]);
					            setFade(true); // fade in new image
					          }, 1000);
			          }, 21000);

		      return () => clearInterval(interval);
		    }, []);

	  const cards = [
		      {
			            title: "Childhood",
			            desc: "Capture those first steps, words, and magical moments that shape who we become.",
			            image: "/images/childhood_with_babies.jpg",
			            link: "/childhood",
			            color: "bg-pink-100/90",
			          },
		      {
			            title: "School",
			            desc: "Document learning adventures, friendships, and joyful experiences from early education.",
			            image: "/images/school_with_children.jpg",
			            link: "/school",
			            color: "bg-blue-100/90",
			          },
		      {
			            title: "College",
			            desc: "Celebrate the transformative years of independence, learning, and lifelong friendships.",
			            image: "/images/college_with_students.jpg",
			            link: "/college",
			            color: "bg-green-100/90",
			          },
		      {
			            title: "Graduate",
			            desc: "Mark the pride and anticipation of academic accomplishments and future possibilities.",
			            image: "/images/graduation_with_graduates.jpg",
			            link: "/graduate",
			            color: "bg-yellow-100/90",
			          },
		      {
			            title: "Career",
			            desc: "Track your professional growth, milestones, and the evolution of your identity through work.",
			            image: "/images/career_with_professionals.jpg",
			            link: "/career",
			            color: "bg-orange-100/90",
			          },
		      {
			            title: "Marriage",
			            desc: "Celebrate partnership, love, and building a shared future with your life companion.",
			            image: "/images/marriage_with_couple.jpg",
			            link: "/marriage",
			            color: "bg-rose-100/90",
			          },
		      {
			            title: "Health",
			            desc: "Document wellness journeys, milestones, and the dedication to balanced living.",
			            image: "/images/health_with_people.jpg",
			            link: "/health",
			            color: "bg-emerald-100/90",
			          },
		      {
			            title: "Wealth",
			            desc: "Record growth, wisdom, and the foundation that supports future generations.",
			            image: "/images/wealth_with_people.jpg",
			            link: "/wealth",
			            color: "bg-lime-100/90",
			          },
		      {
			            title: "Achievements",
			            desc: "Showcase accomplishments that highlight perseverance and personal triumphs.",
			            image: "/images/achievements_with_people.jpg",
			            link: "/achievements",
			            color: "bg-cyan-100/90",
			          },
		      {
			            title: "Friends",
			            desc: "Celebrate meaningful bonds and joyful experiences shared with friends.",
			            image: "/images/friends_with_people.jpg",
			            link: "/friends",
			            color: "bg-indigo-100/90",
			          },
		      {
			            title: "Children",
			            desc: "Cherish the growth, laughter, and memories with your children through time.",
			            image: "/images/children_with_family.jpg",
			            link: "/children",
			            color: "bg-violet-100/90",
			          },
		      {
			            title: "Retired",
			            desc: "Embrace leisure and wisdom, celebrating the golden years of fulfillment and joy.",
			            image: "/images/retired_with_couple.jpg",
			            link: "/retired",
			            color: "bg-teal-100/90",
			          },
		    ];

	  return (
		      <div className="min-h-screen flex flex-col">
		        {/* Top Section (Sunshine/Sunset Background) */}
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
		            <h1 className="text-4xl font-bold text-gray-800 mb-2 drop-shadow-lg">
		              Your Life Journey
		            </h1>
		            <p className="text-gray-700 text-center max-w-2xl px-4">
		              Preserve your memories through all stages of life. Build a digital
		              legacy that connects generations and celebrates your unique story.
		            </p>
		          </div>
		        </div>

		        {/* Bottom Section (Life Stages Grid) */}
		        <div className="flex-1 bg-white/40 backdrop-blur-0 py-10 px-8 overflow-auto">
		          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
		            {cards.map((card, index) => (
				                <Link
				                  to={card.link}
				                  key={index}
				                  className={`flex items-center rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-transform ${card.color}`}
				                >
				                  <div className="w-2/5 h-36 flex-shrink-0">
				                    <img
				                      src={card.image}
				                      alt={card.title}
				                      className="w-full h-full object-cover"
				                    />
				                  </div>
				                  <div className="p-4 w-3/5">
				                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
				                      {card.title}
				                    </h3>
				                    <p className="text-sm text-gray-700">{card.desc}</p>
				                  </div>
				                </Link>
				              ))}
		          </div>
		        </div>
		      </div>
		    );
};

export default Home;

