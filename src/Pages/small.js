import React from "react";

import skban from "../images/skban.jpg";





const MainPage = () => {
  return (
    <div>
      <div className="w-full  bg-blue-900   ">
        <ul className="flex w-full justify-end text-white sm:flex sm:justify-around sm:p-4 sm:text-3xl lg:text-xs lg:justify-end lg:p-0">
          <li className="px-1 border-r-2 border-l-2 border-white   ">
            <a href="#" >
              Outage center
            </a>
          </li>
          <li className="border-l-2 px-1 border-r-2  border-white   ">
            <a href="#" className="  ">
              Pay your bill
            </a>
          </li>
          <li className="border-l-2  px-1 border-r-2  border-white   ">
            <a href="#" className="  ">
              Start,stop move service
            </a>
          </li>
          <li className="border-l-2  px-1 border-r-2  border-white   ">
            <a href="#" className=" ">
              Contact us
            </a>
          </li>
        </ul>
      </div>
      <div className="h-14 w-full  flex-col justify-around sm:flex sm:flex-row">
        <div>
          <h1 className="text-2xl uppercase font-bold mt-3 text-blue-900">
            xyz power
          </h1>
        </div>
        <div className ="sm:flex sm:justify-between">
          <ul className="flex justify-around mt-3 font-semibold ">
            <li className="sm:p-2">
              <a href="#" className="uppercase text text-blue-900">
                home page
              </a>
            </li>
            <li className="sm:p-2">
              <a href="#" className="uppercase text text-blue-900">
                your home
              </a>
            </li>
            <li className="sm:p-2 ">
              <a href="#" className="uppercase text text-blue-900">
                community
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-black h-56 w-full mt-10  ">
        <img src={skban} className="h-56 w-full "></img>
      </div>

      <div className="w-full bg-blue-300  flex  justify-center items-center  ">
        <div className="flex   items-center justify-around  sm:flex-col lg:flex lg:flex-row ">
          <div className="w-full h-full flex flex-col justify-around sm:flex sm:flex-row sm:justify-between">
            <button className="bg-white w-24 h-11 text-sm text-blue-900 m-3 font-semibold sm:w-32 ">
            login/Register 
          </button>
          <button className="bg-white w-24 h-11 text-sm text-blue-900 m-3 font-semibold sm:w-32">
            billing
          </button>
          <button className="bg-white w-24 h-11 text-sm text-blue-900 m-3 font-semibold sm:w-32">
            Initiative
          </button>
          </div>
          <div className="w-full h-full flex flex-col  justify-around sm:flex sm:flex-row  ">
          <button className="bg-white w-24 h-11 text-sm text-blue-900 m-3 font-semibold sm:w-32">
            Customer service
          </button>
          <button className="bg-white w-24 h-11 text-sm text-blue-900 m-3 font-semibold sm:w-32">
            Report an outage
          </button>
          <button className="bg-white w-24 h-11 text-sm text-blue-900 m-3 font-semibold sm:w-32">
            Live map
          </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center  ">
        <div className="w-11/12   flex flex-col mt-5 justify-between sm=flex sm:flex-row  ">
          <div className="w-full  h-full mt-3">
            <h1 className="text-xl font-bold">Today's energy stats</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea 
            </p>
            <div className="bg-black w-full h-56"><h1 className="text-white">Chart</h1></div>
            
          <button className="bg-blue-900 text-white font-semibold text-xs w-32 h-10 self-center mb-3">Learn more about today's power</button>
          </div>

          <div className="w-full bg-gray-200 h-full mt-3 flex flex-col justify-between sm:ml-3">
            <h1 className="text-xl font-bold uppercase mt-5">by the numbers</h1>
            <p className="text-xs font-semibold">How's we are making difference</p>
            <h1 className="text-xl font-bold uppercase mt-5">33% less carbon since 2005</h1>
            <p className="text-xs font-semibold">We're all ahead of our national goal of a 30%.</p>
            <h1 className="text-xl font-bold uppercase mt-5">17% wind energy</h1>
            <p className="text-xs font-semibold">Our province has one of the highest integrations of wind in North America.</p>
            <h1 className="text-xl font-bold uppercase mt-5">Upto 140 batteries in homes accross province</h1>
            <p className="text-xs font-semibold">We're exploring innovative technology like batteries to help bring more clean energy to grid.</p>
            <h1 className="text-xl font-bold uppercase mt-5">61% clean energy by 2020</h1>
            <p className="text-xs font-semibold">We are on our to greener future to our province.</p>
            <button className="bg-blue-900 text-white font-semibold text-xs w-32 h-5 self-center mb-3 mt-2">Learn more about us</button>
          </div>
        </div>
      </div>
      <div className="w-full h-12 bg-blue-100 mt-12 flex flex-col justify-around sm:flex-row lg:flex lg:justify-around">
        <div className="flex items-center ">
          
          <p className="text-xs text-black ">&copy; 2021 XYZ POWER</p></div>
 <div className="flex items-center w-full justify-around lg:justify-end lg:justify-around lg:w-96">
        <a href="#" className="text-xs text-blue-900 font-semibold">Media</a>
        <a href="#" className="text-xs text-blue-900 font-semibold">Legal</a>
        <a href="#" className="text-xs text-blue-900 font-semibold">Privacy statement</a>
        <a href="#" className="text-xs text-blue-900 font-semibold">Careers</a>
        <a href="#" className="text-xs text-blue-900 font-semibold">Site map</a>

      </div>
      </div>
     
    </div>
  );
};

export default MainPage;