"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import quote from "../public//assets/icon/quotes.png";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});


const testimonials = [
  {
    id: 1,
    quote:
      "Flair Technologies transformed our vision into a scalable platform in record time. Their expertise in both technical execution and strategic thinking made all the difference.",
    name: "Sarah Okonkwo",
    title: "CEO, TechNova",
    image: "/avatar1.jpg",
  },
  {
    id: 2,
    quote:
      "Working with Flair was a game-changer. They didn't just build our product—they helped us navigate the entire technical landscape as non-technical founders.",
    name: "David Mensah",
    title: "Founder, PayFlow",
    image: "/avatar2.jpg",
  },
  {
    id: 3,
    quote:
      "The quality of code and architecture Flair delivers is exceptional. Our infrastructure has scaled seamlessly from MVP to handling millions of transactions monthly.",
    name: "Amina Hassan",
    title: "CTO, LogiTrack",
    image: "/avatar3.jpg",
  },
  {
    id: 4,
    quote:
      "Flair doesn't just write code — they think in systems. From architecture to scaling strategy, they operate at a level that gives founders serious confidence.",
    name: "Michael Adeyemi",
    title: "Founder, ScaleStack",
    image: "/avatar4.jpg",
  },
];

export default function Testimonials() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 700,
    slidesToShow: 3,
    centerPadding: "0",
    arrows: false,
    align: "center",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          autoplaySpeed: 3000,
        },

      }
    ],
  };
  const responsiveSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <section className="relative py-24 px-6 bg-[#FFFFFF] dark:bg-black overflow-hidden transition-colors duration-500">

      {/* Dark Glow Background */}
      <div className="hidden dark:block absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#FFC078]/20 to-black opacity-90" />
      </div>

      <div className="relative max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-black dark:text-white">
          What Our Clients Say
        </h2>

        <p className="mt-4 text-sm md:text-lg text-gray-600 dark:text-[#d4a94d] text-balance">
          Trusted by founders and teams building the next generation of digital products.
        </p>
      </div>

      <div className="hidden md:block relative max-w-7xl mx-auto py-3">
        <Slider {...settings}>
          {testimonials.map((item) => (
            <div key={item.id} className="px-4">
              <div
                className="testimonial-card rounded-xl p-5
                  bg-white dark:bg-[#e9e9e9]
                  border border-gray-200 dark:border-transparent
                  shadow-md transition-all duration-500"
              >
                <Image
                  src={quote}
                  alt="Quote"
                  className="w-10 h-10"
                />

                <p className="leading-relaxed text-gray-800 font-medium">
                  {item.quote}
                </p>

                <div className="flex items-center gap-4 mt-5">
                  <div className="w-14 h-14 relative rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="block md:hidden relative max-w-7xl mx-auto py-3">
        <Slider {...responsiveSettings}>
          {testimonials.map((item) => (
            <div key={item.id} className="px-2">
              <div
                className="testimonial-card rounded-xl p-5
                  bg-white dark:bg-[#e9e9e9]
                  border border-gray-200 dark:border-transparent
                  shadow-md transition-all duration-500"
              >
                <Image
                  src={quote}
                  alt="Quote"
                  className="w-10 h-10"
                />

                <p className="leading-relaxed text-gray-800 font-medium">
                  {item.quote}
                </p>

                <div className="flex items-center gap-4 mt-5">
                  <div className="w-14 h-14 relative rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Custom Styling for Center Effect */}

    </section>
  );
}
