import React from 'react';
import { useRef, useState } from 'react';
const TrendingNowDropdowns = () => {
    const buttonRef = useRef(null);  // Reference for the button to match the width of the dropdown
    const toggleCountries = () => {
        setCountryIsVisible(!countryIsVisible);
    };
    const [country, setCountry] = useState('India');
    const [countryIsVisible, setCountryIsVisible] = useState(false);

    const countrySelector = (country) => {
        setCountry(country);
        setCountryIsVisible(false); // Close the dropdown after selecting a country
    };
  return (
    <div>
      <button
                    ref={buttonRef}  // Attach the button ref here
                    type="button"
                    className=" py-2 px-6 pr-8 text-white border-2 border-white bg-transparent relative"
                    onClick={toggleCountries}
                >
                    {country}
                    <i className="fa-solid fa-angle-down absolute right-3 top-3"></i>
                </button>

                {/* Dropdown menu */}
                <div
                    className={`${
                        countryIsVisible ? 'block' : 'hidden'
                    } absolute bg-white mt-2 left-0 border-2`}
                    style={{
                        minWidth: buttonRef.current ? buttonRef.current.offsetWidth : 'auto', // Match width with button
                    }}
                >
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-800 hover:text-white"
                        onClick={() => countrySelector('India')}
                    >
                        India
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-800 hover:text-white border-none outline-none"
                        onClick={() => countrySelector('Global')}
                    >
                        Global
                    </a>
                </div>
    </div>
  );
};

export default TrendingNowDropdowns;
