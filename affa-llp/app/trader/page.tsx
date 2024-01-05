import Link from "next/link";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Traders() {
  return (
    // <div className="w-full h-screen bg-gradient-to-b from-green-900 to-green-900">
    <div className="w-full h-screen bg-white">
      <Navbar />
      <div className="w-full h-full pt-[50px]">
        <div className="flex justify-center items-center flex-col p-2">
          <div className="w-full h-auto flex justify-between items-center">
            <p className="text-xl font-semibold">Traderes</p>
            <Link href={"/trader/create"}>
              <button className="flex justify-center items-center bg-green-700 p-1 rounded-md font-semibold text-white">
                Create
              </button>
            </Link>
          </div>
          <div className="w-full flex justify-center items-center p-1 mt-3">
            <table className="border-2  text-center shadow-md">
              <thead className="border">
                <tr>
                  <th className=" w-[25px] border">Sl</th>
                  <th className=" border">Name</th>
                  <th className=" border">Scheme</th>
                </tr>
              </thead>
              <tbody className="text-center text-[14px]">
                <tr>
                  <td className="border">1</td>
                  <td className="border w-[100px]">Mohammed Junair junu</td>
                  <td className="border">
                    Affa handleIncrement Affa handleIncrement
                  </td>
                  <td className="flex flex-col gap-1 justify-center items-center p-1 border">
                    <Link href={"/trader/edit"}>
                      <button className="h-[30px] w-[50px] bg-green-500 text-white text-center flex justify-center items-center rounded-md cursor-pointer ">
                        Edit
                      </button>
                    </Link>
                    <button className="h-[30px] w-[60px] bg-red-500 text-white text-center flex justify-center items-center rounded-md cursor-pointer ">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border">1</td>
                  <td className="border w-[100px]">Mohammed Junair junu</td>
                  <td className="border">
                    Affa handleIncrement Affa handleIncrement
                  </td>
                  <td className="flex flex-col gap-1 justify-center items-center p-1 border">
                    <Link href={"/trader/edit"}>
                      <button className="h-[30px] w-[50px] bg-green-500 text-white text-center flex justify-center items-center rounded-md cursor-pointer ">
                        Edit
                      </button>
                    </Link>
                    <button className="h-[30px] w-[60px] bg-red-500 text-white text-center flex justify-center items-center rounded-md cursor-pointer ">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border">1</td>
                  <td className="border w-[100px]">Mohammed Junair junu</td>
                  <td className="border">
                    Affa handleIncrement Affa handleIncrement
                  </td>
                  <td className="flex flex-col gap-1 justify-center items-center p-1 border">
                    <Link href={"/trader/edit"}>
                      <button className="h-[30px] w-[50px] bg-green-500 text-white text-center flex justify-center items-center rounded-md cursor-pointer ">
                        Edit
                      </button>
                    </Link>
                    <button className="h-[30px] w-[60px] bg-red-500 text-white text-center flex justify-center items-center rounded-md cursor-pointer ">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border">1</td>
                  <td className="border w-[100px]">Mohammed Junair junu</td>
                  <td className="border">
                    Affa handleIncrement Affa handleIncrement
                  </td>
                  <td className="flex flex-col gap-1 justify-center items-center p-1 border">
                    <Link href={"/trader/edit"}>
                      <button className="h-[30px] w-[50px] bg-green-500 text-white text-center flex justify-center items-center rounded-md cursor-pointer ">
                        Edit
                      </button>
                    </Link>
                    <button className="h-[30px] w-[60px] bg-red-500 text-white text-center flex justify-center items-center rounded-md cursor-pointer ">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
