import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setOverlayVisible(!isOverlayVisible);
  };

  useEffect(() => {
    if (showMenu) {
      // Deshabilitar scroll y desactivar la interacción táctil
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      // Habilitar scroll y activar la interacción táctil
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    }

    // Limpiar el efecto al desmontar el componente
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    };
  }, [showMenu]);

  return (
    <div className="-mx-4 h-20 sticky top-0 z-50 bg-bodyColor flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="pl-4">
        <img src={logo} alt="logo" className="w-14" />
      </div>
      <div className="pr-4">
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={toggleMenu}
          className="text-2xl mdl:hidden bg-black w-12 h-12 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <>
            <div
              className="fixed inset-0 bg-black opacity-50 z-10"
              onClick={toggleMenu}
            ></div>
            <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide -ml-4 z-20">
              <div className="flex flex-col gap-8 py-2 pl-4">
                <div className="flex items-center justify-between">
                  <img className="w-14" src={logo} alt="logo" />
                  <span
                    onClick={() => setShowMenu(false)}
                    className="top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-3xl cursor-pointer"
                  >
                    <MdClose />
                  </span>
                </div>
                <ul className="flex flex-col gap-4">
                  {navLinksdata.map((item) => (
                    <li
                      key={item._id}
                      className="text-xl font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                    >
                      <Link
                        onClick={() => setShowMenu(false)}
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
