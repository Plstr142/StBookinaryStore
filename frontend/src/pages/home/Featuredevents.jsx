import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import events1 from "../../assets/events/news-1.png";
import events2 from "../../assets/events/news-2.png";
import events3 from "../../assets/events/news-3.png";
import events4 from "../../assets/events/news-4.png";

import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "@/global.css";


const events = [
  {
    id: 1,
    title: "Global Climate Summit Calls for Urgent Action",
    description:
      "World leaders gather at the Global Climate Summit to discuss urgent strategies to combat climate change, focusing on reducing carbon emissions and fostering renewable energy solutions.",
    image: events1,
  },
  {
    id: 2,
    title: "Breakthrough in AI Technology Announced",
    description:
      "A major breakthrough in artificial intelligence has been announced by researchers, with new advancements promising to revolutionize industries from healthcare to finance.",
    image: events2,
  },
  {
    id: 3,
    title: "New Space Mission Aims to Explore Distant Galaxies",
    description:
      "NASA has unveiled plans for a new space mission that will aim to explore distant galaxies, with hopes of uncovering insights into the origins of the universe.",
    image: events3,
  },
  {
    id: 4,
    title: "Stock Markets Reach Record Highs Amid Economic Recovery",
    description:
      "Global stock markets have reached record highs as signs of economic recovery continue to emerge following the challenges posed by the global pandemic.",
    image: events4,
  },
];

const Featuredevents = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [1, 1.2, 1],
        opacity: [1, 0.5, 1],
        transition: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        },
      });
    } else {
      controls.stop(); // หยุดเมื่อไม่อยู่ใน viewport
    }
  }, [inView, controls]);

  return (
    <>
      <div className="py-16 px-15 bg-[#bcc4a1] border border-transparent rounded-none">
        <h2 className="text-3xl font-semibold mb-6 text-black dark:white">
          Featured Events
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {events.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-12 bg-[#bcc4a1]">
                {/* content */}
                <div className="py-4">
                  <Link to={`/events/${item.id}`}>
                    <h3 className="text-lg font-medium hover:text-blue-500 mb-4 dark:text-black">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="w-8 h-[2px] bg-[#808570] mb-5"></div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>

                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black text-white">
        {/* Gradient background animated */}
        {/* <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 opacity-70 blur-2xl" /> */}
        <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-r from-[#808570] via-[#000000] to-[#bcc4a1] opacity-70 blur-2xl" />

        {/* Content on top */}
        <div className="relative z-10 p-10 rounded-xl backdrop-blur-md bg-white/10 shadow-xl">
          <h1 className="text-4xl font-bold text-center mb-4">
            🚀 Cool Animated Gradient
          </h1>
          <p className="text-center text-lg text-white/80">
            This background moves & glows like a neon light.
          </p>
        </div>
      </div>
    </>
  );
};

export default Featuredevents;
