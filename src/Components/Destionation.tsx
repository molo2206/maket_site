import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CiHeart, CiCamera } from "react-icons/ci";
import {
  MdStar,
  MdCheck,
  MdPeopleOutline,
  MdLocationPin,
  MdArrowRightAlt,
} from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { WiTime3 } from "react-icons/wi";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};



export default function Destionation() {
  const Places = ({ image, country, tours, column }) => {
    return (
      <div
        className={`relative overflow-hidden h-[270px] lg:col-span-${column}`}
      >
        <img
          src={image}
          alt=""
          className=" h-full w-full rounded-lg object-cover hoverImg"
        />
        <p className=" text-3xl text-white font-semibold absolute left-6 bottom-6">
          {country}
        </p>
        <button className=" bg-orange-500 text-white rounded-lg px-4 py-2 text-xs font-semibold absolute top-4 right-4">
          {tours} TOURS
        </button>
      </div>
    );
  };

  const Tours = ({ image, name }) => {
    return (
      <div>
        <div className=" relative overflow-hidden rounded-t-lg">
          <img src={image} alt="" className=" rounded-t-lg hovering" />
          <div className=" absolute flex justify-between top-4 left-4 right-4">
            <p className=" bg-[#14B0C3] rounded-md px-4 py-1 text-white text-sm">
              FEATURED
            </p>
            <button className=" bg-[#00000066] p-1 rounded-md">
              <CiHeart className=" text-white text-xl" />
            </button>
          </div>
        </div>
        <div className=" border border-[#ebe6de] rounded-b-lg relative">
          <div className=" absolute w-full h-5 -top-5 bg-white rounded-t-[20px]">
            <div className=" p-6 pt-0">
              <div className=" flex items-center gap-4 justify-between">
                <span className=" flex justify-center">
                  {[
                    ...Array(5).map((_, index) => (
                      <MdStar key={index} className="text-[#ffa801] text-xl" />
                    )),
                  ]}
                  <p className=" text-[#757783] pl-2">4.6</p>
                </span>
                <span className=" flex gap-2">
                  <div className=" relative">
                    <CiCamera />
                    <button className=" bg-orange-500 text-xs rounded-full text-white w-4 h-4 flex items-center justify-center absolute top-0 right-0">
                      5
                    </button>
                  </div>
                  <IoVideocamOutline size={30} />
                </span>
              </div>
              <h4 className=" text-xl font-semibold py-2 hover:text-orange-500">
                {name}
              </h4>
              <span className=" flex items-center gap-2">
                <MdLocationPin className=" text-orange-500 text-xl" />
                <p className=" text-[#757783] text-sm">
                  Central Park West NY, USA
                </p>
              </span>
              <span className=" text-[#757783] flex py-4">
                From <p>$59.00</p>
              </span>
              <div>
                <span className=" flex items-center gap-2">
                  <WiTime3 size={24} className=" text-orange-500" />
                  <p className=" text-[#757783] text-sm">10 day</p>
                </span>
                <span className=" flex items-center gap-2">
                  <MdPeopleOutline size={24} className=" text-orange-500" />
                  <p className=" text-[#757783] text-sm">50</p>
                </span>
                <a
                  href="#"
                  className=" flex items-center gap-2 text-orange text-sm font-bold mt-2"
                >
                  explore <MdArrowRightAlt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="lg:mt-60 mt-10" data-aos="fade-down">
      <div className="max-w-[1200px] px-6 mx-auto text-center">
        <p className=" text-orange-500 text-xl">Destination Lists</p>
        <h4 className=" font-bold lg:text-[50px] text-[30px] py-4">
          Go exotic places
        </h4>
        <div className=" grid lg:grid-cols-4 grid-cols-1 gap-2">
          <Places
            country="Congo"
            image="/src/assets/images/parc1.jpg"
            tours="4"
            column="1"
          />
          <Places
            country="Rwanda"
            image="/src/assets/images/parc2.jpg"
            tours="6"
            column="2"
          />
          <Places
            country="Uganda"
            image="/src/assets/images/parc3.jpg"
            tours="2"
            column="2"
          />
          <Places
            country="Brazil"
            image="/src/assets/images/parcbrazile.webp"
            tours="5"
            column="2"
          />
        </div>
      </div>
      <br />
      <br />
      <div className="bg-no-repeat py-16">
        <div className=" lg:flex max-w-[1200px] px-6 mx-auto gap-8">
          <div className=" relative lg:w-1/2" data-aos="fade-down">
            <img
              src="/src/assets/images/brasil.jpg"
              className=" rounded-t-lg hovering"
              alt=""
            />
            <div className="absolute top-4 right-4">
              <p className=" text-orange-500 font-semibold text-[80px]">30%</p>
              <p className=" text-[50px] font-semibold -mt-8">Discount</p>
            </div>
            <button className=" bg-white shadow-md px-12 py-4 absolute left-4 top-1/2 rounded-xl">
              <p className=" text-gray-500 font-medium">Book Tour Now</p>
              <p className=" font-semibold text-lg">6688000</p>
            </button>
          </div>
          <div className="lg:w-1/2" data-aos="fade-up">
            <p className="text-orange-500 text-xl">Get to know us</p>
            <h4 className="font-bold lg:text-[50px] text-[30px] py-12">
              Plan Your Trip with Trevily
            </h4>
            <p className=" text-[#757783] leading-8 md-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elis. Veritatis
              iste et minus possimus adipisci illum facilis repellat recusandae
              fugiat qui architecto reiciendis incidunt inventore quis, culpa
              totam necessitatibus quaerat nihil impedit animi quidem obcaecati
            </p>
            <span className="flex items-center gap-4 py-2 font-medium">
              <MdCheck className=" bg-orange-500 text-white rounded-xl" />{" "}
              Invest in your simply neighborhood
            </span>
            <span className="flex items-center gap-4 py-2 font-medium">
              <MdCheck className=" bg-orange-500 text-white rounded-xl" />{" "}
              Invest in your simply neighborhood
            </span>
            <span className="flex items-center gap-4 py-2 font-medium">
              <MdCheck className=" bg-orange-500 text-white rounded-xl" />{" "}
              Invest in your simply neighborhood
            </span>
            <div className="mt-8">
              <button className=" bg-orange-500 text-white text-xs font-bold rounded-md px-8 h-12 items-center hover ">
                BOOK WITH US NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center my-10 px-6" data-aos="fade-down">
        <p className=" text-orange-500 text-xl pb-2">Featured tours</p>
        <h4 className=" lg:text-[50px] text-[30px] font-bold">
          Most popular tours
        </h4>
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
            <Tours
              image="/src/assets/images/parc1.jpg"
              name="Brooklyn Christmas Lights Tour"
            />
            <Tours
              image="/src/assets/images/parc2.jpg"
              name="Discovery Islands  Kayaking"
            />
            <Tours
              image="/src/assets/images/parc3.jpg"
              name="Vocation Peninsula & Caribben"
            />
            <Tours
              image="/src/assets/images/brasil.jpg"
              name="Java & Bali One Life Adventure"
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
