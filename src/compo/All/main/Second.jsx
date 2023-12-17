import Bt from "./Bt";

const Second = () => {
    
    return (
      <div>
          <div className="flex justify-between lg: max-w-[1380px] m-auto  relative ">
             <div>
                <img className="rotating-images hidden sm:block" src="public\tailwind.svg" alt="" />
             <div id="dd"></div>
              </div>
              <div>
                    <div>
                    <p id="col" className=" text-lg text-center lg:mt-8 p-5">We're on a mission to provide personalized learning and empower <br /> individuals to kick-start their careers.</p>
                    <div className="text-center text-xl font-bold mt-3">
                    <div id="dd"></div>
                    <button id="t" className="text-white container mt-4 "> Explore</button>
                    <div id="dd"></div>
                    </div>
                    </div>
              </div>
              <div className="flex ">
              <img className="zoomable-image hidden sm:block" src="public\dsd.svg" alt="" />
              <div id="dd"></div>
              </div>
            
        </div>
               <div className="">
               <Bt></Bt>
               </div>
               <img className="city w-full h-[200px]" src="public\city.webp" alt="" />
           
      </div>
    );
};

export default Second;