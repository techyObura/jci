import React, { useState, useEffect } from "react";
import menuItems from "../data/data.js";
import { MdPayment } from "react-icons/md";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiFacebookFill, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [onHover, setOnHover] = useState(false);
  const [active, setActive] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOnHover(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Hide Sidebar on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY);
      if (window.scrollY > 10 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSidebarOpen]);

  //scroll top hide the top menu

  console.log(scrollTop);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollTop]);

  const handleMenuClick = (index) => {
    setActiveMenuIndex(activeMenuIndex === index ? null : index); // Toggle submenu
  };

  return (
    <div className=" w-full z-70 ">
      <div className="bg-black text-slate-400">
        <div className="font-roboto px-2 h-[40px] flex justify-between items-center">
          {/* Welcome message */}
          <div className="">
            <h1>Welcome to JCI Kenya</h1>
          </div>
          {/* Newsletter */}
          <div className=" hidden lg:flex justify-between items-center w-[40vw]">
            <div className=" h-8 w-[1px] bg-gold rounded-md"></div>
            <div className="flex max-w-fit justify-center items-center">
              <span className="mr-2 text-gold">
                <MdPayment size={20} />
              </span>
              Payment
            </div>
            <div className="flex max-w-fit justify-center items-center">
              <span className="mr-2 text-gold">
                {" "}
                <FaPeopleCarryBox size={20} />
              </span>
              JCI Kenya Foundation
            </div>
            <div className="flex max-w-fit justify-center items-center">
              <span className="mr-2 text-gold">
                {" "}
                <FaPeopleGroup size={20} />
              </span>
              <span>JCI Members</span>
            </div>
          </div>
          {/* Social Media */}
          <div className="flex w-[30vw] text-sm  md:w-[20vw] lg:w-[15vw] items-center justify-between lg:pr-[20px]">
            <div className=" h-8 w-[1px] bg-gold rounded-md mr-3 lg:mr-5"></div>
            <div className="w-4 h-4 flex justify-center items-center rounded-sm cursor-pointer">
              <RiFacebookFill />
            </div>
            <div className="w-4 h-4 flex justify-center items-center rounded-sm cursor-pointer">
              <RiTwitterXFill />
            </div>
            <div className="w-4 h-4 flex justify-center items-center rounded-sm cursor-pointer">
              <RiLinkedinFill />
            </div>
            <div className="w-4 h-4 flex justify-center items-center rounded-sm cursor-pointer">
              <RiYoutubeFill size={20} />
            </div>
          </div>
        </div>
      </div>
      <div
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        className={
          onHover || isSidebarOpen || scrollTop
            ? `w-[100%] h-[50px] mt-0 flex z-50 bg-off_black ${
                scrollTop ? "fixed text-gold z-50 top-0  bg-off_black" : ""
              } justify-between items-center transition duration-200`
            : `w-[100%] h-[50px] mt-1 z-50 flex bg-slate-50 ${
                scrollTop ? "fixed top-0 z-50 bg-off_black" : ""
              } justify-between items-center transition duration-200`
        }
      >
        <div
          className={` w-[30%] lg:w-[20%] h-full ${
            onHover || isSidebarOpen || scrollTop ? "text-gold" : "text-navy"
          } font-roboto font-bold text-2xl text-nowrap whitespace-nowrap lg:text-4xl text-center flex justify-center items-center`}
        >
          <h1 className=" text-center ml-4"> JCI KENYA</h1>
        </div>
        <div className="w-[70%] lg:w-[80%] hidden lg:flex justify-center items-center h-full">
          <ul
            className={`w-[70%] hidden lg:flex justify-between items-center text-[18px] font-normal ${
              onHover ? "text-gold" : "text-navy"
            }`}
            onMouseLeave={() => setActiveItem(null)}
          >
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                {/* Main Menu Item */}
                <div
                  className={`hover:text-white transition duration-300 cursor-pointer ${
                    active && "text-white"
                  } ${activeItem === index ? "text-white" : ""}`}
                  onMouseEnter={() => setActiveItem(index)}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  {item.link !== "" ? (
                    <a
                      href={item.link}
                      onMouseLeave={() => setActiveItem(null)}
                    >
                      {item.title}
                    </a>
                  ) : (
                    <p onMouseLeave={() => setActiveItem(null)}>
                      {item.title}
                      <span
                        className={`ml-2 text-sm transform transition-transform ${
                          activeItem === index ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        ▼
                      </span>
                    </p>
                  )}
                </div>

                {/* Dropdown Menu */}
                {item.submenu.length > 0 && (
                  <ul
                    className={`absolute left-0 top-full w-fit ${
                      activeItem === index ? "block" : "hidden"
                    } bg-white shadow-lg rounded-md p-2`}
                    onMouseEnter={() => setActiveItem(index)}
                    onMouseLeave={() => setActiveItem(null)}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className={`px-4 py-2 text-off_black hover:bg-off_black z-50 hover:text-white text-nowrap whitespace-nowrap rounded-md transition duration-300`}
                      >
                        <a href={subItem.link} className="block">
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        {!scrollTop && (
          <div className=" flex lg:hidden mr-6">
            <button
              className={`text-xl focus:outline-none ${
                onHover || isSidebarOpen ? "text-white" : "text-off_black"
              }`}
              onClick={toggleSidebar}
              aria-label="Toggle Sidebar"
            >
              {isSidebarOpen ? <MdClose size={30} /> : <FiMenu size={30} />}
            </button>
          </div>
        )}
      </div>
      {/* Sidebar */}
      <div
        className={` lg:hidden top-0 left-0 w-[100%] ${
          isSidebarOpen ? "h-screen" : "h-0"
        } bg-off_black text-white overflow-hidden transition-[height] duration-500 z-50`}
      >
        <div className="p-6 space-y-4">
          {/* Logo */}

          {/* Navigation Links */}
          <ul className="space-y-3">
            {menuItems.map((item, index) => (
              <li key={index} className="group">
                {/* Main Menu Item */}
                <div onClick={() => handleMenuClick(index)}>
                  {item.submenu.length > 0 ? (
                    <div className="cursor-pointer text-lg text-gray-200 hover:text-gold transition duration-300 flex justify-between items-center">
                      {item.title}
                      <span
                        className={`ml-2 transform transition-transform ${
                          activeMenuIndex === index ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </div>
                  ) : (
                    <div className="cursor-pointer text-lg text-gray-200 hover:text-gold transition duration-300 flex justify-between items-center">
                      <Link to={item.link} onClick={toggleSidebar}>
                        {item.title}
                      </Link>
                    </div>
                  )}
                </div>

                {/* Submenu */}
                {item.submenu.length > 0 && activeMenuIndex === index && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subItem.link || "#"}
                          className="block text-sm text-gray-400 hover:text-gold transition duration-300"
                          onClick={toggleSidebar}
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
