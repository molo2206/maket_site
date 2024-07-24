import { GiDeer, GiHangGlider } from "react-icons/gi";
import { CiFlag1 } from "react-icons/ci";
import { MdOutlinePadding } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div className=" bg-slate-300 bg-cover bg-no-repeat py-24">
        <div className=" lg:flex gap-12 max-w-[1200px] px-6 mx-auto">
          <div className="lg:w-1/2">
            <span data-aos=" fade-up-right">
              <button className=" animate-pulse rounded-lg bg-orange-500 w-20 flex justify-center items-center mb-8">
                <FaPlay className=" text-white" />
                <p className=" text-orange-500 text-xl pb-2"> Are you ready to travel?</p>
              </button>
            </span>
            <p className="text-orange-500 text-xl pb-2">Tevily is a world Leading Online Tour Booking Platform</p>
          </div>
          <div className="">
            <div className=" border border-gray-500 rounded-lg p-10 flex flex-col items-center gap-4 text-orange-500 hover:text-white transition">
              <GiDeer className="" />
              <p className="">Wildlife Tours</p>
            </div>
            <div className="  border border-gray-500 rounded-lg p-10 flex flex-col items-center gap-4 text-orange-500 hover:text-white transition">
              <MdOutlinePadding />
              <p>Parangliding Tours</p>
            </div>
            <div className="  border border-gray-500 rounded-lg p-10 flex flex-col items-center gap-4 text-orange-500 hover:text-white transition">
              <CiFlag1 />
              <p>Adventure Tours</p>
            </div>
            <div className="  border border-gray-500 rounded-lg p-10 flex flex-col items-center gap-4 text-orange-500 hover:text-white transition">
              <GiHangGlider />
              <p>Hand Gliding Tours</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[url(/src/assets/images/brasil.jpg)] bg-contain bg-bottom bg-orange-500 py-[100px]" data-aos="fade-down">
        <div className=" flex lg:flex-nowrap flex-wrap justify-between gap-16 max-w-[1200px] xl:px-0 px-6 mx-auto">
            <p className=" text-[40px] font-bold text-white whitespace-pre">Our parteners</p>
            <div className=" flex flex-wrap gap-8 justify-between w-full">
                <img src="/src/assets/images/parc1.jpg" alt="" />
                <img src="/src/assets/images/parc2.jpg" alt="" />
                <img src="/src/assets/images/parc3.jpg" alt="" />
                <img src="/src/assets/images/parcbrazile.webp" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
