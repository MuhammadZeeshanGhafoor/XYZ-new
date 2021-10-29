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
      <div className="w-full  bg-indigo-600">
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
      </div>
      {/* banner */}
      <div className="bg-black h-56 w-full ">
        <img src={banner} className="h-56 w-full"></img>
      </div>
      <div className="w-full  flex justify-center mt-5">
        <div className="w-6/12   flex p-2 justify-between">
          <div className="bg-red-300 h-36 w-48">
            <img src={account}></img>
            <div className="w-full  bg-indigo-600">
              <p className="font-semibold text-white">My aacount </p>
            </div>
          </div>
          <div className="bg-red-300 h-36 w-48 object- ">
            <img src={products} className="h-32 w-48 "></img>
            <div className="w-full  bg-indigo-600">
              <p className="font-semibold text-white">Energy products </p>
            </div>
          </div>
          <div className="bg-red-300 h-36 w-48">
            <img src={money}></img>
            <div className="w-full  bg-indigo-600">
              <p className="font-semibold text-white">Save Money & Energy</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  flex justify-center mt-5">
        <div className="w-6/12   flex p-2 justify-between">
          <div className="bg-red-300 h-36 w-48">
            <img src={meter} className="h-32 w-48"></img>
            <div className="w-full  bg-indigo-600">
              <p className="font-semibold text-white">Meter </p>
            </div>
          </div>
          <div className="bg-red-300 h-36 w-48 object- ">
            <img src={building} className="h-32 w-48 "></img>
            <div className="w-full  bg-indigo-600">
              <p className="font-semibold text-white">
                Building and renovating
              </p>
            </div>
          </div>
          <div className="bg-red-300 h-36 w-48">
            <img src={safety}></img>
            <div className="w-full  bg-indigo-600">
              <p className="font-semibold text-white">safety</p>
            </div>
          </div>
        </div>
      </div>
      {/* text area */}
      <div className="h-full w-full flex justify-center">
        <div className="flex flex-col bg-red-400 w-6/12  ">
          <div className="w-full mt-5  ">
              <h1 className="text-xl text-black font-bold uppercase">finding the right energy products for your home</h1>
            <div className="flex h-40">
            <div >
                <img src={first} className='w-96 p-2'></img>
            </div>
            <div className=" w-6/12  ">
                    <h1 className="text-left truncate ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, </h1><h1> do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h1>
            </div>
            </div>
          </div>

        </div>
        
      </div>
      
    </div>
  );
};

export default HomePage;
