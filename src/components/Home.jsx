import React, { useState } from "react";
import { Badge, Flex } from "@radix-ui/themes";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import FAQ from "./FAQ";
import WIS from "./WIS";
import Policies from "./Policies";
import Promos from "./Promos";
import About from "./About";
// import {useRouter}

function Home() {

  return (
    <>
      <div className='flex flex-row max-sm: overflow-hidden'>
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

        {/* routes-WIS,policices,faq,promos,about */}
        <section className='bg-slate-50 text-black h-screen w-4/5 py- p-10 flex flex-col overflow-y-auto'>
          <Routes >
            <Route path="/wis" element={<WIS />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/promos" element={<Promos />} />
            <Route path="/about" element={<About />} />
            <Route path='/faq' element={<FAQ />} />
          </Routes>
          <Flex
            direction={"row"}
            justify={"between"}
            align={"end"}
            className=''>
            <Badge color='orange'>Read more</Badge>
            <button className='mt-10 bg-blue-500 text-white px-6 py-2 rounded-md self-end hover:bg-blue-600'>
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
