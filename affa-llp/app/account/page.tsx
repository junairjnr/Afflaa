import Image from "next/image";
import profile from "../assets/JUNAIRPHOTO.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Link from "next/link";

export default function Account() {
  return (
    <div className="w-full h-auto ">
      <Navbar />
      <div className="w-full h-auto flex justify-center items-center flex-col pt-[50px]">
        <div className="w-[350px] h-[100px] p-2">
          <div className="w-full h-full bg-gradient-to-r from-green-700 to-cyan-700 flex flex-row justify-center items-center rounded-md">
            <div className="w-[30%] flex justify-center items-center">
              <Image
                alt=""
                src={profile}
                width={50}
                height={50}
                className="rounded-xl object-cover"
              />
            </div>
            <div className="w-[70%] h-full flex justify-center items-start text-white flex-col">
              <p className="text-center text-xl font-semibold pl-2">
                JUNAIR PT
              </p>
              <p className="text-center text-sm pl-4">9539018161</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center p-3">
          <div className="w-full h-auto ">
            <div className="w-full h-full  flex flex-col gap-3 justify-center items-center ">
              <div className="w-full h-full bg-green-50 rounded-md shadow-md">
                <div className="flex justify-center items-start flex-col">
                  <div className="flex flex-col p-3">
                    <p className=" pr-2 font-semibold">
                      Communication Address :-
                    </p>
                    <p className=" pl-2 text-[14px] pt-2 text-center">
                      Datastone Solutions LLP Room #KM IV 828,829 - 2nd Floor
                      Smart Trade City,, Kottakkal, Malappuram, Kerala 676503
                    </p>
                  </div>
                  <div className="flex flex-col p-3">
                    <p className=" pr-2 font-semibold">Permanent Address :-</p>
                    <p className=" pl-2 text-[14px] pt-2 text-center">
                      Datastone Solutions LLP Room #KM IV 828,829 - 2nd Floor
                      Smart Trade City,, Kottakkal, Malappuram, Kerala 676503
                    </p>
                  </div>
                  <div className="flex flex-col p-3">
                    <p className=" pr-2 font-semibold">Bank Account :-</p>
                    <p className=" pl-2 w-[150px] text-[14px] pt-2 text-start">
                      A/C Holder : JUnair
                    </p>
                    <p className=" pl-2 w-[150px] text-[14px] pt-2 text-start">
                      A/C Number : JUnair
                    </p>
                    <p className=" pl-2 w-[150px] text-[14px] pt-2 text-start">
                     Ifsc : JUnair
                    </p>
                    <p className=" pl-2 w-[150px] text-[14px] pt-2 text-start">
                      Branch : JUnair
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-auto flex justify-end items-end pr-2">
                <Link href={"/account/edit"}>
                  <button className="w-[80px] h-[40px] bg-cyan-800 rounded-md text-white underline cursor-pointer shadow-lg">
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
