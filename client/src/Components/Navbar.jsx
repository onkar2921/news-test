import React, { useState, useContext } from "react";
import { NewsContext } from "../Context/NewsContextProvider";
import { useLocation ,Link} from 'react-router-dom';

export default function Navbar() {

  const location = useLocation();

  const currentPath = location.pathname;

  const {  searchNews } = useContext(NewsContext);

  const [text, setText] = useState("");

  const handleSearch = () => {
    if (text.length > 0) {
      searchNews(text);
     ; 
     setText("") 
    }
  };
  

  return (<div className="h-16 bg-gradient-to-r from-violet-200 to-pink-200 flex flex-col md:flex-row items-center justify-between p-4 mb-10">
  <Link to="/">
  <div className="text-2xl text-black font-bold text-center md:text-left">
    Hacker News
  </div>
  </Link>
  {currentPath==="/" &&

    <div className="flex items-center space-y-2 md:space-y-0 md:space-x-4">
    <input
      type="text"
      placeholder="Search"
      className="rounded-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-gray-100 border-2 border-transparent focus:outline-none focus:ring focus:border-blue-500"
      onChange={(e) => setText(e.target.value)}
      />
    <button
      className="bg-gradient-to-r from-blue-200 to-cyan-200 text-black px-4 py-2 rounded-full font-bold"
      onClick={handleSearch}
      >
      Search
    </button>
  </div>
    }
</div>
  );
}
