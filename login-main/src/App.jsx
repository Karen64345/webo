import Hero from "./components/Hero";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";

import Login from "./components/Login";

gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    
      <main  className="overflow-x-hidden bg-black">
        <Suspense  
          fallback={
           <div className="fixed inset-0 grid place-items-center bg-black text-white">
            Loading...
           </div>
          }
        >
         <section>
          <Login />
        </section> 

        <section>
          {/* <Navbar /> */}
          {/* <Hero /> */}
        </section> 


      
         
     
     </Suspense>
     </main> 
     
       
  );

}
export default App;
