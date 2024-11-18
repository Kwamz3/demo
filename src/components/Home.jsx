import React, { useState, useEffect } from "react";
import { Badge, Flex } from "@radix-ui/themes";
import {
  BrowserRouter as Router,
  Routes,
  Route, useNavigate, Outlet, useLocation
} from "react-router-dom";
import FAQ from "./FAQ";
import WIS from "./WIS";
import Policies from "./Policies";
import Promos from "./Promos";
import About from "./About";
import { useParams } from "react-router-dom";


import { v4 as uuidv4 } from 'uuid';

function Home() {
  const navigate = useNavigate();
  const userId = uuidv4();
  const path = useLocation();
  const normalizedPath = path.pathname.replace(/\/+$/, "");

  const handleOnNext = () => {
    switch (normalizedPath) {
      case '':
        navigate(`/services/1`);
        break;
      // case '/faq':
      //   navigate(`/services/1`);
      //   break;
      case `/services/1`:
        navigate('/wis');
        break;
      case '/wis':
        navigate('/policies');
        break;
      case '/policies':
        navigate('/promos');
        break;
      case '/promos':
        navigate('/about');
        break;
      case '/about':
        // navigate('/faq');
        break;
      // default:
      //   navigate('/faq');
      //   break;
    }
  };



  return (

    <>
      <div className={`flex flex-row max-sm: overflow-hidden `}>
        <section className='h-screen bg-blue-500 text-white w-3/5 flex flex-col justify-center items-center p-5'>
          <div className='p-5 h-96 w-full flex flex-row justify-center gap-3'>
            <div
              className='border border-slate-300 p-10 bg-cover w-32'
              style={{ backgroundImage: 'url("/split1.jpg")' }}></div>
            <div
              className='border border-slate-300 p-10 relative bottom-10 bg-cover w-32'
              style={{ backgroundImage: 'url("/split2.jpg")' }}></div>
            <div
              className='border border-slate-300 p-10 bg-cover w-32'
              style={{ backgroundImage: 'url("/split3.jpg")' }}></div>
            <div
              className='border border-slate-300 p-10 relative bottom-10 bg-cover w-32'
              style={{ backgroundImage: 'url("/split4.jpg")' }}></div>
          </div>
          <h1 className='text-4xl font-semibold'>BigInt</h1>
          <p className='text-center text-wrap mt-2'>
            Your number one international <br />
            financial auditing platform
          </p>
        </section>


        <section className='bg-slate-50 text-black h-screen w-4/5 py- p-10 flex flex-col overflow-y-auto'>
          {/* routes-WIS,policices,faq,promos,about */}
          <h1>{normalizedPath}</h1>
          {normalizedPath === "" ? <FAQ /> : <Outlet />}
          <Flex
            direction={"row"}
            justify={"between"}
            align={"end"}
            className=''>
            <Badge color='orange'>Read more</Badge>
            {/* step1: FAQ
            step2:Services
            step3:Policies
            step4:Promos
             */}
            <button className='mt-10 bg-blue-500 text-white px-6 py-2 rounded-md self-end hover:bg-blue-600'
              // use switch to navigate to the next page based on step
              onClick={() => handleOnNext()}>
              Next
              {/* change route  */}
            </button>
          </Flex>
        </section>
      </div>


    </>

  );
}

export default Home;
