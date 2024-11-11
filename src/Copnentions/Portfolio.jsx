import React from "react";
import leptop from "../assets/Portfolio/leptop.jpg";
import ecoomerce from "../assets/Portfolio/react-ecoomerce.png";
import whimMusice from "../assets/Portfolio/whim music.png"
import leetch from "../assets/Portfolio/leetchChatApp.png"

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: leetch,
      href_demo:"",
      href_code:"https://github.com/Karan778862/leetchChat.git",
    },
    {
      id: 2,
      src: ecoomerce ,
      href_demo:"https://startling-muffin-aee98b.netlify.app/",
      href_code:"https://github.com/Karan778862/React-Ecommerce-API",
    },
    {
      id: 3,
      src: whimMusice,
      href_demo:"https://digitub.netlify.app",
      href_code:"",
    },
    {
      id: 4,
      src: leptop,
      href_demo:"",
      href_code:"",
    },
    {
      id: 5,
      src: leptop,
      href_demo:"",
      href_code:"",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-gray-800 to-black text-white w-full md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 ms:px-0">
          {portfolio.map(({ id, src, href_code, href_demo}) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                href={href_demo}
                target="_blank">
                  Demo
                </a>
                <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                href={href_code}
                target="_blank">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
