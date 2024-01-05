import Link from "next/link";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Dashboard() {
  const number = 1234567;
  const lastFourDigits = String(number).slice(-4); // Get the last four digits
  const hiddenNumber = `***${lastFourDigits}`;
  return (
    // <div className="w-full h-screen bg-gradient-to-b from-green-900 to-green-900">
    <div className="w-full h-screen bg-white">
      <Navbar />
      <div className="w-full h-auto flex flex-col p-2 justify-center items-center">
        <div className="w-[350px]  pt-[50px] flex justify-center">
          <div className="w-full h-full bg-gradient-to-r from-green-700 to-cyan-700 flex justify-center items-center rounded-md">
            <div className="w-full h-full flex justify-between items-center flex-row p-1">
              <div className="w-[50%] h-full flex justify-center items-center flex-col">
                <p className="p-1 text-white text-center font-semibold">
                  Hi,SHIHAN
                </p>
                <p className="p-1 text-white text-center text-sm font-sans">
                  Curent Value
                </p>
                <p className="p-1 text-white text-center text-2xl font-semibold">
                  1,00,000
                </p>
              </div>
              <div className="w-[50%] h-full flex justify-center items-center flex-col">
                <p className="p-1 text-white text-center font-semibold">
                  {hiddenNumber}
                </p>
                <p className="p-1 text-white text-center text-sm font-sans">
                  Invested Value
                </p>
                <p className="p-1 text-white text-center text-2xl font-semibold">
                  50,000
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col justify-center items-center p-1 shadow-xl">
          <div className="w-full flex justify-between items-center m-1">
            <p className="p-1 mt-1 mb-1 text-sm font-semibold text-gray-700">
              My Recent Transactions
            </p>
            <Link href={"/more"}>
              <p className="p-1 mt-1 mb-1 text-sm font-semibold text-gray-700">
                More
              </p>
            </Link>
          </div>
          <table className="w-full border shadow-2xl  text-center p-1 mb-[50px]">
            <thead className="bg-gray-300 ">
              <tr>
                <th className="text-start pl-1">Date</th>
                <th className="text-center">Scheme</th>
                <th className="text-center">Trader</th>
                <th className="text-end pr-1">Amount</th>
              </tr>
            </thead>
            <tbody className=" text-[12px]">
              <tr>
                <td className="w-[100px] text-start pl-1">Dec-14,2024</td>
                <td className="text-center">
                  Affa Ethical Fund Regular Plan Growth
                </td>
                <td>Junair</td>
                <td className="text-green-700 text-end pr-1">15000.00</td>
              </tr>

              <tr>
                <td className="w-[100px] text-start pl-1">Dec-14,2024</td>
                <td className="text-center">
                  Affa Ethical Fund Regular Plan Growth
                </td>
                <td>Junair</td>
                <td className="text-green-700 text-end pr-1">15000.00</td>
              </tr>
              <tr>
                <td className="w-[100px] text-start pl-1">Dec-14,2024</td>
                <td className="text-center">
                  Affa Ethical Fund Regular Plan Growth
                </td>
                <td>Junair</td>
                <td className="text-green-700 text-end pr-1">15000.00</td>
              </tr>
              <tr>
                <td className="w-[100px] text-start pl-1">Dec-14,2024</td>
                <td className="text-center">
                  Affa Ethical Fund Regular Plan Growth
                </td>
                <td>Junair</td>
                <td className="text-green-700 text-end pr-1">15000.00</td>
              </tr>
              <tr>
                <td className="w-[100px] text-start pl-1">Dec-14,2024</td>
                <td className="text-center">
                  Affa Ethical Fund Regular Plan Growth
                </td>
                <td>Junair</td>
                <td className="text-green-700 text-end pr-1">15000.00</td>
              </tr>
              <tr>
                <td className="w-[100px] text-start pl-1">Dec-14,2024</td>
                <td className="text-center">
                  Affa Ethical Fund Regular Plan Growth
                </td>
                <td>Junair</td>
                <td className="text-green-700 text-end pr-1">15000.00</td>
              </tr>
              <tr>
                <td className="w-[100px] text-start pl-1">Dec-14,2024</td>
                <td className="text-center">
                  Affa Ethical Fund Regular Plan Growth
                </td>
                <td>Junair</td>
                <td className="text-green-700 text-end pr-1">15000.00</td>
              </tr>
              <tr>
                <td className="w-[100px] text-start pl-1">Dec-14,2024</td>
                <td className="text-center">
                  Affa Ethical Fund Regular Plan Growth
                </td>
                <td>Junair</td>
                <td className="text-green-700 text-end pr-1">15000.00</td>
              </tr>
              <tr>
                <td className="w-[100px] text-start pl-1">Dec-14,2024</td>
                <td className="text-center">
                  Affa Ethical Fund Regular Plan Growth
                </td>
                <td>Junair</td>
                <td className="text-green-700 text-end pr-1">15000.00</td>
              </tr>
              <tr>
                <td className="w-[100px] text-start pl-1">Dec-14,2024</td>
                <td className="text-center">
                  Affa Ethical Fund Regular Plan Growth
                </td>
                <td>Junair</td>
                <td className="text-green-700 text-end pr-1">15000.00</td>
              </tr>


            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
