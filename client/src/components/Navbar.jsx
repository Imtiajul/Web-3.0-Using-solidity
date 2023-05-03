import React from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png'


const NavbarItem = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  )

}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const navMenuItem = ["Market", "Exhchange", "Tutorials", "Wallets"]
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center">
        {navMenuItem.map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 rounded-full cursor-pointer hover:bg-[#2546bd]">Login</li>
      </ul>
      {/* mobile menu */}
      <div className="flex relative">
        {/* mobile toggle */}
        {toggleMenu
          ? <AiOutlineClose className="text-white md:hidden cursor-pointer" fontSize={28} onClick={() => setToggleMenu(false)} />
          :
          <HiMenuAlt4 className="text-white md:hidden cursor-pointer" fontSize={28} onClick={() => setToggleMenu(true)} />
        }
        {/* mobile nav */}
        {toggleMenu && (
          <ul className="fixed top-0 -right-1 w-[70vw] list-none rounded-md text-white flex flex-col justify-start items-end h-screen shadow-2xl blue-glassmorphism p-4 animate-slide-in">
            <li className="text-whilte w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {navMenuItem.map((item, index) => (
              <NavbarItem key={item + index} title={item} />
            ))}
            {/* <li className="bg-[#2952e3] py-2 px-7 rounded-full cursor-pointer hover:bg-[#2546bd]" key={'login+11'}>Login</li> */}

          </ul>
      )

        }
    </div>

    </nav >
  )
}

export default Navbar