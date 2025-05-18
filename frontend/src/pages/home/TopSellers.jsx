import React, { useEffect, useState } from "react"

// genre
const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"]

const TopSellers = () => {

  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

  useEffect(() => {
    fetch('books.json')
    .then(res => res.json())
    .then((data) => setBooks(data))
  }, [])

  // fiteredbooks
  const filteredBooks = selectedCategory === "Choose a genre" ? books: books.filter(book => book.category.toLowerCase()  === selectedCategory.toLowerCase())

  console.log(filteredBooks)

  

  return (
    <>
      {/* flex flex-col items-center gap-8 px-4 py-8 mx-4 my-6 
            sm:flex-row sm:mx-6 sm:my-6
            md:mx-12 md:my-8
            lg:mx-20 lg:my-10
            xl:mx-24 xl:my-12
            sm:text-3xl text-2xl font-bold font-primary */}
      <div className="py-10">
        <h2 className="text-3xl font-semibold mb-6">Top Picks This Week</h2>


        {/* category filtering */}
        <div className="mb-8 flex items-center">
          <select 
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category" id="category" className="bg-[#bcc4a1] rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#808570]">
            {
              categories.map((category, index) => (
                <option key={index} value={category} className="text-gray-700 bg-gray-200">{category}</option>
              ))   
            }
          </select>
        </div>


        {
          filteredBooks.map((book, index) => (
            <div>{book.title}</div>
          ))
        }

      </div>
    </>
  );
};

export default TopSellers;
