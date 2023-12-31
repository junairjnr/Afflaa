"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "./assets/affanav.png";
import { MdLogout, MdMoreVert, MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import { BiSolidUserPlus } from "react-icons/bi";
import { PiShieldPlusFill } from "react-icons/pi";
import Scheme from "./assets/investLogo.png";
import Invest from "./assets/investment.png";
import { RiCloseLine } from "react-icons/ri";

export default function Navbar() {
  const [showPop, setShowPop] = useState(false);
  const [showClose, setShowClose] = useState(false);
  return (
    <div className="">
      <nav className="w-full h-[30px] fixed top-0 left-0 z-10">
        <div className=" bg-gradient-to-b from-green-600 to-green-600  flex justify-between items-center  relative border-b border-white">
            <Link href={"/dashboard"}> 
          <div className=" flex justify-center items-center p-2 gap-2">
              <Image
                onClick={() => setShowPop(false)}
                alt=""
                src={logo}
                width={30}
                className="fill-blue-900 drop-shadow-md"
              />
            <p className="text-white">Affa International Llp</p>
          </div>
            </Link>
          <div className="flex justify-center  fill-white items-center rounded-full">
            {!showPop && (
              <MdMoreVert
                className="fill-white"
                onClick={() => setShowPop(true)}
                size={35}
              />
            )}
            {showPop && (
              <RiCloseLine
                className="fill-white mr-2"
                onClick={() => setShowPop(false)}
                size={30}
              />
            )}
          </div>
        </div>
        {showPop && (
          <div className="w-[160px] h-[180px] bg-white  ring-1 ring-red-600 shadow-xl rounded-md flex justify-center flex-col absolute top- right-1 ">
            <div className="w-full h-auto flex flex-col gap-2">
              <Link href={"/trader"}>
                <p className="w-full p-1 flex pl-4 items-center gap-3 cursor-pointer  hover:bg-gray-50 text-base border-b ">
                  <BiSolidUserPlus size={25} />
                  Trader
                </p>
              </Link>
              <Link href={"/schemes"}>
                <p className="w-full p-1 flex pl-4 items-center gap-3 cursor-pointer  hover:bg-gray-50 text-base border-b ">
                  {/* <PiShieldPlusFill  size={25} /> */}
                  <Image alt="" src={Scheme} height={25} width={25} />
                  Schemes
                </p>
              </Link>
              <Link href={"/investment"}>
                <p className="w-full p-1 flex pl-4 items-center gap-3 cursor-pointer  hover:bg-gray-50 text-base border-b ">
                  {/* <PiShieldPlusFill  size={25} /> */}
                  <Image alt="" src={Invest} height={25} width={25} />
                  Investment
                </p>
              </Link>
              <Link href={"/login"}>
                <button
                  // onClick={handleLogOut}
                  className="w-full p-1 flex pl-4 items-center gap-3 cursor-pointer  hover:bg-gray-50 text-base "
                >
                  <MdLogout size={25} />
                  Logout
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
