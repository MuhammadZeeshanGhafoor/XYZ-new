import React from "react";

import skban from "../images/skban.jpg";

const MainPage = () => {
  return (
    <div>
      <div className="w-full  bg-indigo-600  ">
        <ul className="flex w-full justify-end text-white ">
          <li>
            <a href="#" className="text-sm mr-3  ">
              Outage center
            </a>
          </li>
          <li>
            <a href="#" className="text-sm mr-3 ">
              Pay your bill
            </a>
          </li>
          <li>
            <a href="#" className="text-sm mr-3 ">
              Start,stop move service
            </a>
          </li>
          <li>
            <a href="#" className="text-sm mr-3 ">
              Contact us
            </a>
          </li>
        </ul>
      </div>
      <div className="h-14 w-full  flex-col justify-around">
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
      </div>
      <div className="bg-black h-56 w-full mt-10 lg:w-32 ">
        <img src={skban} className="h-56 w-full lg:w-32"></img>
      </div>

      <div className="w-full bg-blue-100 h-20 flex justify-center items-center  ">
        <div className="flex  items-center justify-around w-3/5 ">
          <div className="w-full h-full flex justify-around ">
            <button className="bg-white w-24 h-11 text-sm text-indigo-600 border-2 font-semibold ">
              login/Register to My account
            </button>
            <button className="bg-white w-24 h-11 text-sm text-indigo-600 border-2 font-semibold">
              billing
            </button>
            <button className="bg-white w-24 h-11 text-sm text-indigo-600 border-2 font-semibold">
              Initiative
            </button>
          </div>
          <div className="w-full h-full flex justify-around sm:flex sm:flex-col lg:flex-row ">
            <button className="bg-white w-24 h-11 text-sm text-indigo-600 border-2 font-semibold">
              Customer service
            </button>
            <button className="bg-white w-24 h-11 text-sm text-indigo-600 border-2 font-semibold">
              Report an outage
            </button>
            <button className="bg-white w-24 h-11 text-sm text-indigo-600 border-2 font-semibold">
              Live map
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center  ">
        <div className="w-7/12   flex mt-5 justify-between">
          <div className="w-7/12 bg-yellow-500 h-full mt-3">
            <h1 className="text-xl font-bold">Today's energy stats</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea
            </p>
            <div className="bg-black w-full h-56">
              <h1 className="text-white">Chart</h1>
            </div>
          </div>
          <div className="w-2/6 bg-gray-200 h-full mt-3 flex flex-col justify-between">
            <h1 className="text-xl font-bold uppercase mt-3">by the numbers</h1>
            <p className="text-xs font-semibold">
              How's we are making difference
            </p>
            <h1 className="text-xl font-bold uppercase mt-3">
              33% less carbon since 2005
            </h1>
            <p className="text-xs font-semibold">
              We're all ahead of our national goal of a 30%.
            </p>
            <h1 className="text-xl font-bold uppercase mt-3">
              17% wind energy
            </h1>
            <p className="text-xs font-semibold">
              Our province has one of the highest integrations of wind in North
              America.
            </p>
            <h1 className="text-xl font-bold uppercase mt-3">
              Upto 140 batteries in homes accross province
            </h1>
            <p className="text-xs font-semibold">
              We're exploring innovative technology like batteries to help bring
              more clean energy to grid.
            </p>
            <h1 className="text-xl font-bold uppercase mt-3">
              61% clean energy by 2020
            </h1>
            <p className="text-xs font-semibold">
              We are on our to greener future to our province.
            </p>
            <button className="bg-indigo-800 text-white font-semibold text-xs w-32 h-5 self-center mb-3">
              Learn more about us
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-12 bg-indigo-200 mt-12 flex justify-around">
        <div className="flex items-center">
          <p className="text-xs text-indigo-600 ">&copy; 2021 XYZ POWER</p>
        </div>
        <div className="flex items-center w-96 justify-between">
          <a href="#" className="text-xs text-indigo-700 font-semibold">
            Media
          </a>
          <a href="#" className="text-xs text-indigo-700 font-semibold">
            Legal
          </a>
          <a href="#" className="text-xs text-indigo-700 font-semibold">
            Privacy statement
          </a>
          <a href="#" className="text-xs text-indigo-700 font-semibold">
            Careers
          </a>
          <a href="#" className="text-xs text-indigo-700 font-semibold">
            Site map
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
