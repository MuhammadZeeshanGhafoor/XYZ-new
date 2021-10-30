import React from "react";

import banner from "../images/banner1.jpg";
import account from "../images/acc.jpg";
import money from "../images/money.jpg";
import products from "../images/products.jpg";
import meter from "../images/meter.jpg";
import building from "../images/bulding.jpg";
import safety from "../images/safety.jpg";
import first from "../images/first.jpg";
import second from "../images/secn.jpg";
const HomePage = () => {
  return (
    <div>
      {/* <div className="w-full  bg-indigo-600">
        <ul className="flex w-full justify-end text-white ">
          <li>
            <a href="#" className="text-sm ">
              Outage center
            </a>
          </li>
          <li>
            <a href="#" className="text-sm ml-3">
              Pay your bill
            </a>
          </li>
          <li>
            <a href="#" className="text-sm ml-3">
              Start,stop move service
            </a>
          </li>
          <li>
            <a href="#" className="text-sm ml-3">
              Contact us
            </a>
          </li>
        </ul>
      </div>
      <div className="h-14 w-full  flex justify-around">
        <div>
          <h1 className="text-2xl uppercase font-bold mt-3 text-indigo-600">
            xyz power
          </h1>
        </div>
        <div>
          <ul className="flex justify-between mt-3 font-semibold">
            <li className="">
              <a href="#" className="uppercase text text-indigo-600">
                home page
              </a>
            </li>
            <li className="flex ml-10">
              <a href="#" className="uppercase text text-indigo-600">
                your home
              </a>
            </li>
            <li className="flex ml-10">
              <a href="#" className="uppercase text text-indigo-600">
                community
              </a>
            </li>
          </ul>
        </div>
      </div> */}
      {/* banner */}
      <div className="bg-black h-56 w-full mt-10 ">
        <img src={banner} className="h-56 w-full"></img>
      </div>
      {/* Cards */}
      <div className="w-full flex  flex-col   justify-between items-center mt-12 sm:flex-row lg:flex-col">
        <div className="flex flex-col items-center w-8/12  lg:flex-row lg:justify-around">
          <div className="bg-blue-900 flex flex-col w-10/12 mt-10 ">
            <img src={account} className="h-60 sm:96 lg:h-60 "></img>
            <h1 className="font-semibold text-white bg-blue-900 self-start p-2 ">
              Manage Account &gt;{" "}
            </h1>
          </div>
          <div className="bg-blue-900 flex flex-col w-10/12 mt-10 lg:ml-1">
            <img src={products} className="h-60"></img>
            <h1 className="font-semibold text-white bg-blue-900 self-start p-2">
              Energy Products &gt;{" "}
            </h1>
          </div>
          <div className="bg-blue-900 flex flex-col w-10/12 mt-10 lg:ml-1">
            <img src={money} className="h-60"></img>
            <h1 className="font-semibold text-white bg-blue-900 self-start p-2">
              Save Money &amp; Energy &gt;{" "}
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:w-8/12 ">
          <div className="bg-blue-900 flex flex-col w-10/12  mt-10 lg:w-2/6 ml-1">
            <img src={meter} className="h-60"></img>
            <h1 className="font-semibold text-white bg-blue-900 self-start p-2 ">
              Smart Meters &gt;{" "}
            </h1>
          </div>
          <div className="bg-blue-900 flex flex-col w-10/12 mt-10 lg:w-2/6 ml-1">
            <img src={building} className="h-60"></img>
            <h1 className="font-semibold text-white bg-blue-900 self-start p-2">
              Building &amp; Renovating &gt;{" "}
            </h1>
          </div>
          <div className="bg-blue-900 flex flex-col w-10/12 mt-10 lg:w-2/6 ml-1">
            <img src={safety} className="h-60 "></img>
            <h1 className="font-semibold text-white bg-blue-900 self-start lg:p-2">
              Safety &gt;{" "}
            </h1>
          </div>
        </div>
      </div>
      {/* sect */}
        <div className="flex flex-col w-full items-center  mt-10">
          <h1 className="text-xl font-bold uppercase p-3">
            finding the right energy products for your home
          </h1>
          <div className="flex flex-col w-10/12 lg:flex-row">
            <img src={first} className="lg:w-96"></img>
            <p className="text-sm font-semibold items-start sm:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur
            </p>
          </div>
        </div>
      
        <div className="flex flex-col w-full items-center  mt-10 py-1">
          <div className="flex flex-col w-10/12 lg:flex-row">
            <img src={second} className="lg:w-96 lg:h-64"></img>
            <p className="text-sm font-semibold items-start sm:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur
            </p>
          </div>
        </div>
        {/* help sec */}
        <div className="w-full bg-gray-200 ">
          <h1 className="text-xl font-bold uppercase p-3">need some additional help?</h1>
          <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:justify-around">
            <div className="bg-white w-44 h-20 border-2 border-gray-300 py-3 mt-3 mb-3">
              <h1 className="text-base uppercase font-semibold">find quick answers</h1>
              <h1 className="text-sm uppercase text-indigo-800 font-semibold">Browser our FAQ</h1>
            </div>
            <div className="bg-white w-44 h-20 border-2 border-gray-300 py-3 mt-3 mb-3">
              <h1 className="text-base uppercase font-semibold">contact us</h1>
              <h1 className="text-sm uppercase text-indigo-800 font-semibold">by email or phone</h1>
            </div>
            <div className="bg-white w-44 h-20 border-2 border-gray-300 py-3 mt-3 mb-3">
              <h1 className="text-base uppercase font-semibold">self-service form</h1>
              <h1 className="text-sm uppercase text-indigo-800 font-semibold">View our customer service page</h1>
            </div>
          </div>

        </div>
        <div className="w-full h-12 bg-blue-100 mt-12 flex flex-col justify-around sm:flex-row lg:flex lg:justify-around">
        <div className="flex items-center ">
          
          <p className="text-xs text-black ">&copy; 2021 XYZ POWER</p></div>
 <div className="flex items-center w-full justify-around lg:justify-end lg:justify-around lg:w-96 ">
        <a href="#" className="text-xs text-blue-900 font-semibold sm:text-base">Media</a>
        <a href="#" className="text-xs text-blue-900 font-semibold sm:text-base">Legal</a>
        <a href="#" className="text-xs text-blue-900 font-semibold sm:text-base">Privacy statement</a>
        <a href="#" className="text-xs text-blue-900 font-semibold sm:text-base">Careers</a>
        <a href="#" className="text-xs text-blue-900 font-semibold sm:text-base">Site map</a>

      </div>
      </div>
    </div>
  );
};

export default HomePage;
