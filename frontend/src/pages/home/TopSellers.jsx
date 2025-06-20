import React, { useEffect, useState } from "react";
import BookCard from "../books/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination ,  Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/global.css";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";


// genre
const categories = [
  "Choose a genre",
  "programming",
  "fiction",
  "nonfiction",
  "maths",
  "sport",
];

const TopSellers = () => {
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");


  const {data: books = []} = useFetchAllBooksQuery();
  // console.log(books)

  // fiteredbooks
  const filteredBooks =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter(
          (book) =>
            book.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  // console.log(filteredBooks);

  return (
    <>
      {/* flex flex-col items-center gap-8 px-4 py-8 mx-4 my-6 
            sm:flex-row sm:mx-6 sm:my-6
            md:mx-12 md:my-8
            lg:mx-20 lg:my-10
            xl:mx-24 xl:my-12
            sm:text-3xl text-2xl font-bold font-primary */}


      {/* ring-teal-200 */}
      <div className="py-10 bg-white shadow-top rounded-lg px-5 m-5">
        <h2 className="text-3xl font-semibold mb-6 dark:text-black">Top Picks This Week</h2>

        {/* category filtering */}
        <div className="mb-8 flex items-center">
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            name="category"
            id="category"
            className="bg-[#bcc4a1] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#808570]"
          >
            {categories.map((category, index) => (
              <option
                key={index}
                value={category}
                className="text-gray-700 bg-gray-200"
              >
                {category}
              </option>
            ))}
          </select>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            375: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            425: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            1180: {
              slidesPerView: 2,
              spaceBetween: 50,
            }
          }}
          modules={[Pagination , Navigation]}
          className="mySwiper"
        >
          {
            filteredBooks.length > 0 && filteredBooks.map((book, index) => (
              <SwiperSlide key={index}>            
                <BookCard book={book} />
              </SwiperSlide>
            ))
          }

        </Swiper>
      </div>
    </>
  );
};

export default TopSellers;
