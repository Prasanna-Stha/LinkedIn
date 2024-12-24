import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserFriends, faBriefcase, faCommentDots, faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "/src/assets/images/LinkedIn_Logo.png";

function Navbar({ profileSrc }) {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { name: "Home", icon: faHome, path: "/" },
    { name: "My Network", icon: faUserFriends, path: "./notifications" },
    { name: "Jobs", icon: faBriefcase, path: "/jobs" },
    { name: "Messaging", icon: faCommentDots, path: "/messaging" },
    { name: "Notifications", icon: faBell, path: "/notifications" },
  ];

  const users = ["Prasanna", "Dipun", "Nimesh", "Dipesh", "Sanij", "Saphal", "Abinash", "Ajju"];

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query.length > 0) {
      const results = users.filter((user) => user.toLowerCase().startsWith(query));
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-50 border-b border-gray-200 shadow-sm z-50">
      <div className="w-[90vw]  mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="items-center hidden sm:flex">
          <img src={Logo} alt="LinkedIn Logo" className="h-10" />
        </div>

        {/* Search Box */}
        <div className="hidden lg:flex relative w-[30%] sm:w-[100%] md:w-[40%]">
          <form className="flex items-center bg-gray-100 border border-gray-300 rounded-md px-3 py-1 w-full">
            <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
            <input type="text" placeholder="Search for something..." className="hidden md:block bg-transparent focus:outline-none w-full text-sm pl-2 py-1" value={searchQuery} onChange={handleSearch} autoComplete="off"/>
          </form>
          {searchResults.length > 0 && (
            <div className="absolute top-6 bg-white border border-gray-300 rounded-md shadow-md mt-2 w-full z-10">
              <ul className="divide-y divide-gray-200 mx-auto">
                {searchResults.map((result, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Navigation Items  [home, message, network, jobs.....] */}
        <ul className="flex items-center space-x-8">
          {navItems.map((item, index) => (
            <li key={index} className="flex flex-col items-center text-gray-500 hover:text-blue-600 text-xs font-medium transition">
              <NavLink to={item.path} className="flex flex-col items-center">
                <FontAwesomeIcon icon={item.icon} className="text-lg mb-1" />
                <span className="hidden md:inline">{item.name}</span>
              </NavLink>
            </li>
          ))}
          <li>
            <a href="#" className="flex flex-col items-center text-gray-500 hover:text-blue-600 text-xs font-medium transition">
              <img src={profileSrc} alt="Profile" className="w-8 h-8 rounded-full object-cover"/>
              <span>Me</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
