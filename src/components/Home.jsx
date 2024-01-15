import React from "react";
import star from "./../assets/img/star.png";

const Home = () => {
  return (
    <div className="font-mario-hollow">
      <div className="sectionTop flex flex-wrap sm:flex-col">
        <p className="sm:text-lg text-sm ">I AM</p>
        <div className="flex sm:text-3xl text-red-500 text-[2rem]">
          <div className="flex flex-wrap">
            <p className="sm:inline">PRANJAL &nbsp;</p>
            <p className="sm:inline">BARNWAL</p>
          </div>
          <div className="sm:inline">
            <img
              className="h-[6rem] mt-[-1.9rem]"
              src={star}
              alt=""
            />
          </div>
        </div>
        <p className="sm:mt-[-2rem] mt-[-2rem] sm:text-lg text-sm ">AND I DO</p>
      </div>

      <div className="w-[10rem] relative right-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 800 800"
          className="absolute top-[-4rem] left-[-6rem]"
        >
          <g
            stroke-width="5"
            stroke="hsl(0, 0%, 0%)"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="71.5 8"
            transform="matrix(0.9455185755993168,0.32556815445715664,-0.32556815445715664,0.9455185755993168,124.0198315431359,-108.43469202258939)"
          >
            <path
              d="M257.5570991039276 253.2994842529297Q238.5570991039276 593.2994842529297 543.5570991039276 539.2994842529297 "
              marker-end="url(#SvgjsMarker2525)"
            ></path>
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
              <polygon
                points="0,11.5 5.75,5.75 0,0 11.5,5.75"
                fill="hsl(0, 0%, 0%)"
              ></polygon>
            </marker>
          </defs>
        </svg>
      </div>
      <div className="sectionBottom leading-8 h-full w-full flex items-center justify-center flex-col ml-[-7rem] mt-[4rem]">
        <p>Web Development</p>
        <p>App Development</p>
        <p>Data Structures</p>
        <p>Algorithms</p>
      </div>
    </div>
  );
};

export default Home;
