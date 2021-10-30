import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Index from "../Pages/small"
import YourHome from "../Pages/HomePage"
import Community from "../Pages/Community"


const Navigation = () => {
  return (
    <Router>
      <div>
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
              
              <Link to="/" className="uppercase text text-blue-900">
                home page
              </Link>
            </li>
            <li className="sm:p-2">
              <Link to="/your-home"  className="uppercase text text-blue-900">
                your home
              </Link>
            </li>
            <li className="sm:p-2 ">
              <Link  to="/Community" className="uppercase text text-blue-900">
                community
              </Link >
            </li>
          </ul>
        </div>
      </div>

        </div>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/your-home">
            <YourHome />
          </Route>
          <Route path="/Community">
            <Community />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default Navigation;