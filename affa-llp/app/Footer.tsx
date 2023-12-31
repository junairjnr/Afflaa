import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BiSolidHome } from "react-icons/bi";
import { FaSackDollar } from "react-icons/fa6";
import { IoGift, IoPerson } from "react-icons/io5";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gradient-to-b from-green-700 to-green-700 w-full h-[50px] fixed bottom-0 left-0 z-10">
        <div className="w-full h-full flex justify-around items-center flex-row p-3">
          <Link href={"/dashboard"}>
            <div className="flex justify-center items-center flex-col text-white p-1">
              <BiSolidHome size={20} />
              <p className="font-semibold text-xs fill-white">Home</p>
            </div>
          </Link>
          <Link href={"/buildwealth"}>
            <div className="flex justify-center items-center flex-col text-white p-1">
              <FaSackDollar size={20} />
              <p className="font-semibold text-xs">Build Wealth</p>
            </div>
          </Link>
          <Link href={"/offer"}>
            <div className="flex justify-center items-center flex-col text-white p-1">
              <IoGift size={20} />
              <p className="font-semibold text-xs">Offers</p>
            </div>
          </Link>
          <Link href={"/account"}>
            <div className="flex justify-center items-center flex-col text-white p-1">
              <IoPerson size={20} />
              <p className="font-semibold text-xs">Account</p>
            </div>
          </Link>
        </div>
      </footer>
    </div>
  );
}
