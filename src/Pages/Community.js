import React from "react";

import city from "../images/comban.jpg";
import card from "../images/card.jpg";
// import cover from "../images/cover.jpg";
const Community = () => {
  return (
    <div>
      <div className="bg-black h-64 w-full mt-10 ">
        <img src={city} className="h-64 w-full"></img>
      </div>
      <div className="flex flex-col  mt-10 items-center  sm:w-full">
        <h1 className="font-bold text-lg">Community</h1>
        <p className=" sm:w-11/12 sm:text-lg lg:w-6/12">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed{" "}
        </p>
        <div className="flex flex-col w-full items-center lg:flex-row lg:w-6/12">
          <div className="bg-blue-900 flex flex-col w-10/12 mt-10 lg:w-2/6 ml-1">
            <img src={card} className="h-60 "></img>
            <h1 className="font-semibold text-white bg-blue-900 self-start lg:p-2">
              Income-based program &gt;
            </h1>
          </div>
          <div className="bg-blue-900 flex flex-col w-10/12 mt-10 lg:w-2/6 ml-1">
            <img src={card} className="h-60 "></img>
            <h1 className="font-semibold text-white bg-blue-900 self-start lg:p-2">
              Income-based program &gt;
            </h1>
          </div>
          <div className="bg-blue-900 flex flex-col w-10/12 mt-10 lg:w-2/6 ml-1">
            <img src={card} className="h-60 "></img>
            <h1 className="font-semibold text-white bg-blue-900 self-start lg:p-2">
              Income-based program &gt;
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full h-96 bg-red-400 mt-10" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1635321349302-f91724057317?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjd8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")',backgroundSize:"cover"}}>
                <div className="w-96 h-80 bg-white mt-3 p-2 bg-opacity-60 rounded-md lg:ml-96" >
                        <h1 className="text-xl font-bold uppercase ">buildings stronger communities together</h1>
                        <p className="font-semibold flex items-start">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit</p>
          <span className="text-indigo-900 font-bold">Learn about more community investments &gt;</span>
                </div>
      </div>
      <div className="w-full h-12 bg-blue-100  flex flex-col justify-around sm:flex-row lg:flex lg:justify-around">
        <div className="flex items-center ">
          
          <p className="text-xs text-black sm:text-base">&copy; 2021 XYZ POWER</p></div>
 <div className="flex items-center w-full justify-around lg:justify-end lg:justify-around lg:w-96">
        <a href="#" className="text-xs text-blue-900 font-semibold  sm:text-base">Media</a>
        <a href="#" className="text-xs text-blue-900 font-semibold  sm:text-base">Legal</a>
        <a href="#" className="text-xs text-blue-900 font-semibold  sm:text-base">Privacy statement</a>
        <a href="#" className="text-xs text-blue-900 font-semibold  sm:text-base">Careers</a>
        <a href="#" className="text-xs text-blue-900 font-semibold  sm:text-base">Site map</a>

      </div>
      </div>
    </div>
  );
};

export default Community;
