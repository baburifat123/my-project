

const Body = () => {
    return (
        <div className="lg: max-w-[1380px] m-auto lg: mt-[100px] animate__animated animate__fadeInUpBig relative ">
           
            <div className="text-center lg: flex justify-center gap-10">
            <div>
            <h1 className="text-white text-center lg: text-6xl font-bold"> Our Courses_</h1>
            <h1 id="cols"> </h1>
            </div>
            <img className="animate__animated animate__fadeInLeft hidden sm:block" src="triangle.svg" alt="" />
            </div>

            <div id="mb1" className=" lg:flex gap-5 justify-around items-center">
                <div className="ds p-3 lg:p-6 space-y-4 ">
                      <img className="w-[500px] h-[250px] " src="thumbnail.png" alt="" />
                      <h1 className="text-white text-2xl font-bold my-10">Complete Web Development</h1>
                      <button className="p-3 text-sm font-bold bg-fuchsia-500 rounded-lg mr-2 text-white">Les's Code</button>
                </div>
                <div  className="text-white lg: space-y-4">
                     <h1 className=" text-4xl font-bold text-fuchsia-700">Kickstart your journey in <br />Web Development</h1>
                     <h1 className="font-bold">Welcome to Programming Hero! Dive into the world of modern web <br /> development with a focus on MERN stack - MongoDB, Express.js, React, and Node.js <br /> course from the beginning of your journey until you get an internship or a full-time job.</h1>
                    
                        <button className="p-3 text-sm font-bold bg-fuchsia-800 rounded-sm mr-2">Explore</button>
                        <button className="p-3 text-sm font-bold border rounded-sm m-2">Success</button>
                </div>
            </div>
       
        </div>
    );
};

export default Body;