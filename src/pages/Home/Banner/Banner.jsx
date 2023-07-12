// import { Rating } from "@smastrom/react-rating";

// import "@smastrom/react-rating/style.css";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-rose-100 py-8">
      <div className="my-4 mx-auto pl-10">
        <h1 className="font-extrabold text-4xl mt-10">
          LET&apos;S <span className="text-6xl text-orange-400">Play</span>
        </h1>
        <h3 className="font-bold text-6xl">
          {" "}
          <span className="text-orange-400">All</span> Day
        </h3>
        <ul className="bg-orange-400 h-40 w-36 text-3xl pt-10 font-bold mt-10 ">
          <li className=" h-8 w-56 ml-16 ">
            <span></span> Most Funny
          </li>
          <li className=" h-8 w-56 ml-16 pt-3">Amazing Toys </li>
        </ul>

        <div className="mt-20 font-bold text-3xl">
          <button className="btn bg-orange-400">
            Shop Now <FaArrowRight />
          </button>
          {/* grid grid-cols-1 md:grid-cols-2<Rating style={{ maxWidth: 180 }} value={5} readOnly /> */}
        </div>
      </div>
      <div className="">
        <img
          style={{ height: "500px", width: "650px" }}
          className="rounded-xl sm:mr-0 md:mr-14 sm:pr-0 md:pr-10"
          src="https://i.ibb.co/BsmH2zz/Untitled-design.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
