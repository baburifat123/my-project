
const Card = () => {
    return (
        <div id="top">
        <div  className="lg: max-w-[1380px] m-auto lg: mt-[100px] animate__animated animate__fadeInUpBig"> 
        <div className=" lg:flex relative gap-7 items-center justify-center  risingText ">

              
               <div id=" rightToLeft" className=" text-white space-y-4 rightToLeft">
                     <h1 className=" text-4xl font-bold text-fuchsia-700">Start your programming <br />journey in CSE Fundamenta</h1>
                     <h1 className="font-bold">Welcome to Phitron! This comprehensive program is designed to <br /> lay the foundation for your Computer Science and Engineering <br />journey. Explore core concepts, problem solving, algorithms, data <br /> structures, cloud computing, and more. Get ready to build a solid <br /> understanding of CSE essentials with our expert-led instruction.</h1>
                    
                        <button className="p-3 text-sm font-bold bg-indigo-300 rounded-sm mr-2 text-sky-800">Explore</button>
                        <button className="p-3 text-sm font-bold border-sky-500 border rounded-sm m-2">Curriculum</button>
                        <img className="hidden sm:block" src="https://www.programming-hero.com/team/blue-square.svg " alt="" />
                </div>
               

               
               <div id="md" className="ds p-6 space-y-4">
                      <img className="" src="phitron-thumbnail.webp" alt="" />
                      <h1 className="text-white text-2xl font-bold">Complete Web Development</h1>
                      <button className="p-3 text-sm font-bold bg-fuchsia-500 rounded-lg mr-2 text-white">Les's Code</button>
                </div>
               

         </div>
           
      
        </div>
        </div>
    );
};

export default Card;