import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (

    <div>
    <nav className="top-0 cursor-pointer w-full bg-blue-500 text-white flex justify-center space-x-6 p-4 shadow-lg z-50 ">
      <Link
        to="hero"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="text-xl  font-medium uppercase"
      >
        Home
      </Link>
      <a
        href="https://dexscreener.com/base/0x353e101ade44918239f31b0a310ca25a10042c6c"
        target="_blank"
        className="text-xl  font-medium uppercase"
      >
        Chart
      </a>
      <a
        href="https://x.com/iamkevincoin"
        target="_blank"
        className="text-xl   font-medium uppercase"
      >
        x
      </a>
      <a
        href="https://t.me/iamkevincoin"
        target="_blank"
        className="text-xl  font-medium uppercase"
      >
        Telegram
      </a>
    </nav>
    
    </div>
  );
};

export default Navbar;
