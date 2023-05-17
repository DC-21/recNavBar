import React from 'react';
import Button from './Button';

const Navbar = () => {
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'Blog', link: '/' },
    { name: 'Services', link: '/' },
    { name: 'About', link: '/' },
  ];
  const handleSearch = (searchTerm) => {
    // Perform search logic using the search term
    console.log('Performing search for:', searchTerm);
    // Add your own search implementation here
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-center bg-white py-4">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-indigo-900 container bg--200 py-2 p-4">
          <span className="text-2xl text-black-600 mr-1 pt-2">
            <ion-icon name="play-circle-outline"></ion-icon>
          </span>
          DiCE
        </div>
        <SearchBar onSearch={handleSearch} />
        <ul className="md:flex md:items-center ml-4">
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl px-2 py-1" // Added padding here
            >
              <a
                href={link.link}
                className="text-blue-900 text-lg font-semibold px-4 py-2 hover:bg-blue-200 duration-500 rounded-md"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
