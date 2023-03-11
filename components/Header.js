import React from "react";
import {
  HomeIcon,
  Squares2X2Icon,
  TruckIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
function Header() {
  return (
    <div>
      <nav className="bg-white text-black">
        <div className="mx-auto max-w-7xl ">
          <div className=" cursor-pointer flex flex-row  justify-center h-20 items-center ">
            <div className="  space-x-2 items-center flex flex-row  justify-center lg:justify-center">
              <img
                className="h-10 w-10 object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2yg1Rc3HSuX8QnxjOSJYjN3TnLCkOeHO4QwZ9OsrmpPhCHgwdgh0mkrN2Cm1JePhavGc&usqp=CAU"
                alt=""
              />

              <a
                href="/"
                className="text-black cursor-pointer  capitalize text-2xl"
              >
                Dheeraj Enterprises
              </a>
            </div>
            <div className=" hidden capitalize md:inline-flex flex-1 items-center justify-end mr-32 sm:items-stretch ">
              <div className="hidden  sm:block">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    class="bg-[#3A98B9] text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Products
                  </a>

                  <a
                    href="#about"
                    className="text-black/80 hover:bg-[#3A98B9] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    About us
                  </a>

                  <a
                    href="#ordernow"
                    className="text-black/80  hover:bg-[#3A98B9] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" sm:hidden    w-full  fixed left-0 bottom-0">
          <div className="flex bg-white h-16  rounded-t-md  text-black px-20  justify-evenly cursor-pointer  flex-row items-center ">
            <ul className=" whitespace-nowrap list-none text-sm flex justify-between space-x-4 py-2 px-4 sm:px-8 sm:space-x-8 ">
              <div className="navbar">
                <HomeIcon className="navBtn  h-5 w-5 " />

                <li> Home</li>
              </div>

              <div className="navbar">
                <UserIcon className="h-5 w-5 " />
                <li>About</li>
              </div>

              <div className="navbar">
                <TruckIcon className="h-5 w-5 " />
                <li> Order now </li>
              </div>

              <div className="navbar">
                <Squares2X2Icon className="navBtn h-5 w-6" />
                <li>Features</li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
