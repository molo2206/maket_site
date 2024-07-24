import { MdSearch, MdOutlineParagliding } from "react-icons/md";
import "react-multi-carousel/lib/styles.css";
import { GiDeer, GiFishingBoat, GiHangGlider } from "react-icons/gi";
import { CiFlag1 } from "react-icons/ci";
import { WiTime3 } from "react-icons/wi";
import { FaPeopleCarry } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import Carousel from "react-multi-carousel";

function Hero() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className=" relative bg-black lg:h-[80vh]" data-aos="fade-down" data-aos-delay="300" data-aos-duration="300">
      <video autoPlay muted loop className=" absolute z-10 w-full h-full lg:top-0 -top-[12vh] object-cover opacity-55">
        <source src="/src/assets/video/media.mp4" type="video/mp4" />
      </video>
      <div className=" flex flex-col items-center justify-center relative z-10 lg:h-full h-screen max-w-[1200px] px-6 lg:pt-0 pt-16 mx-auto">
        <p className=" text-3xl text-orange-500">Let's explore</p>
        <h4 className=" lg:text-[52px] text-3xl text-white">Where whould you Like To Go?</h4>
        <p className=" text-white text-2xl my-8">Checkout Beautiful Places Around the World</p>
        <div className=" bg-white grid lg:grid-cols-5 grid-cols-1 rounded-lg w-full">
          <span className=" flex items-center py-7 border-r border-gray-500 relative pl-4">
            <MdOutlineParagliding className=" text-4xl text-orange-500" />
            <span className=" flex flex-col justify-center absolute h-full left-16 right-2">
              <p className=" text-gray-500 text-sm"> Location</p>
              <select className=" text-sm font-bold w-full" name="" id="">
                <option value="">Destinations</option>
                <option value="">Africa</option>
                <option value="">Morocco</option>
                <option value="">Nigeria</option>
                <option value="">Tanzania</option>
              </select>
            </span>
          </span>
          <span className=" flex items-center py-7 border-r border-gray-500 relative pl-4">
            <FaPeopleCarry className=" text-4xl text-orange-500"  />
            <span>
              <p className="text-gray-500 text-sm" >Type</p>
              <select className=" text-sm font-bold w-full" name="" id="">
                <option value="">Destinations</option>
                <option value="">Adventure</option>
                <option value="">Beach</option>
                <option value="">Cruises Tours</option>
                <option value="">Discovery</option>
                <option value="">Historical</option>
              </select>
            </span>
          </span>
          <span className=" flex items-center py-7 border-r border-gray-500 relative pl-4">
            <WiTime3 className=" text-4xl text-orange-500" />
            <span className=" flex flex-col justify-center absolute h-full left-16 right-2">
              <p className="text-gray-500 text-sm">Date From</p>
              <input type="date" placeholder="" className="text-sm font-bold w-full" />
            </span>
          </span>
          <span className=" flex items-center py-7 border-r border-gray-500 relative pl-4">
            <FaPeopleGroup className=" text-4xl text-orange-500"  />
            <span className=" flex flex-col justify-center absolute h-full left-16 right-2">
              <p className="text-gray-500 text-sm">Guests</p>
              <input type="text" placeholder="0" className=" font-semibold placeholder:text-black outline-none" />
            </span>
          </span>
          <button className=" bg-orange-500 text-white flex items-center gap-4 py-6 outline-none border-none rounded-r-lg font-semibold text-sm">
            <MdSearch size={20} className=" text-4xl text-orange-500"  /> SEARCH
          </button>
        </div>
        <img src="/src/assets/images" alt="" className=" my-4" />
        <p className=" text-white font-semibold text-[28px]">Or browse the selected type</p>
      </div>
      <div className="py-2 relative z-10 max-w-[1200px] px-6 mx-auto">
        <Carousel
          partialVisbile={false}
          swipeable={true}
          draggable={false}
          responsive={responsive}
          ssr={true}
          infinite
          autoPlay={true}
          arrows={true}
          keyBoardControl={true}
          itemClass="carouselItem"
        >
          <div className=" shadow-xl bg-white p-8 rounded-lg flex flex-col justify-center items-center gap-4">
            <GiDeer className=" rounded-full w-20 h-20 p-4 bg-[#e5faf5] hover:bg-orange-500 hover:text-white" />
            <p className=" font-bold">Wildlife</p>
          </div>
          <div className=" shadow-xl bg-white p-8 rounded-lg flex flex-col justify-center items-center gap-4">
            <MdOutlineParagliding className=" rounded-full w-20 h-20 p-4 bg-[#26B2EC24] text-[#06aff6] hover:bg-orange-500 hover:text-white" />
            <p className=" font-bold">Paragliding</p>
          </div>
          <div className=" shadow-xl bg-white p-8 rounded-lg flex flex-col justify-center items-center gap-4">
            <CiFlag1 className="rounded-full w-20 h-20 p-4 bg-[#f5ecfd] text-[#9e60e5] hover:bg-orange-500 hover:text-white"/>
            <p className=" font-bold">Adventure</p>
          </div>
          <div className=" shadow-xl bg-white p-8 rounded-lg flex flex-col justify-center items-center gap-4">
            <GiHangGlider className=" rounded-full w-20 h-20 p-4  bg-[#fff4de] text-[#f6b23b] hover:bg-orange-500 hover:text-white"/>
            <p className=" font-bold">Hang Gliding</p>
          </div>
          <div className=" shadow-xl bg-white p-8 rounded-lg flex flex-col justify-center items-center gap-4">
            <GiFishingBoat className=" rounded-full w-20 h-20 p-4  bg-[#D036321C] text-[#d03632] hover:bg-orange-500 hover:text-white" />
            <p className=" font-bold">Sight</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Hero;
