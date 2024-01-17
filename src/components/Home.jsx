import React from "react";
import star from "./../assets/img/star.png";

const Home = () => {
  return (
    <div className="font-mario-hollow ml-10">
      <div className="sectionTop h-full flex flex-wrap flex-col">
        <p className="sm:text-lg text-sm ">I AM</p>
        <div className="flex my-2 sm:text-3xl text-red-500 text-[2rem] items-center">
          <div className="flex">
            <p className="w-[250px] sm:w-[500px]"><span className="font-mario-filled">PRANJAL</span> BARNWAL</p>
          </div>
          <div className="flex mt-[-3rem] sm:mt-0">
            <img
              className="h-[6rem]"
              src={star}
              alt=""
            />
          </div>
        </div>
        <p className="sm:text-lg text-sm">AND I DO</p>
      </div>

      <div className="w-[10rem] relative right-3">
      <svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  xmlns:svgjs="http://svgjs.dev/svgjs"
  viewBox="0 0 800 800"
  className="absolute top-[-4rem] left-[-6rem]"
>
  <g
    strokeWidth={5}
    stroke="hsl(0, 0%, 0%)"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeDasharray="71.5 8"
    transform="matrix(0.9455185755993168,0.32556815445715664,-0.32556815445715664,0.9455185755993168,124.0198315431359,-108.43469202258939)"
  >
    <path
      d="M257.5570991039276 253.2994842529297Q238.5570991039276 593.2994842529297 543.5570991039276 539.2994842529297 "
      markerEnd="url(#SvgjsMarker2525)"
    />
  </g>
  <defs>
    <marker
      markerWidth="11.5"
      markerHeight="11.5"
      refX="5.75"
      refY="5.75"
      viewBox="0 0 11.5 11.5"
      orient="auto"
      id="SvgjsMarker2525"
    >
      <polygon points="0,11.5 5.75,5.75 0,0 11.5,5.75" fill="hsl(0, 0%, 0%)" />
    </marker>
  </defs>
</svg>

      </div>

      <div className="sectionBottom leading-8 h-full w-full flex ml-[4rem] flex-col mt-[4rem]">
        <p className="hover:text-red-400">Web Development</p>
        <p className="hover:text-red-400">App Development</p>
        <p className="hover:text-red-400">Data Structures</p>
        <p className="hover:text-red-400">Algorithms</p>
      </div>
    </div>
  );
};

export default Home;