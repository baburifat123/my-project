
const Next = () => {
    return (
        <>
        <div className="lg: max-w-[1380px] m-auto mt-44">
            <div className="flex justify-between items-center">
                <img src="src\Image\circle.svg" alt="" />
                <h1 className="text-white text-6xl grow-0 font-bold">Are you absolute_ Beginner?</h1>
                
                <img src="src\Image\rocket.webp" alt="" />
            </div>
         </div>
            <h1 id="cols"> </h1>
            <div id="sawa">
               <div className="flex gap-x-10 items-center">
                   <img className="w-auto h-[600px]" src="src\Image\mobile.webp" alt="" />
                   <div className="space-y-3">
                    <h1 className="text-6xl font-bold text-white">Our Mobile App</h1>

                    <div id="color" className="flex rounded-lg gap-8">

                        <div  className="border-r">
                            <h1 className="text-5xl font-bold">1.5M+</h1>
                            <p className="text-2xl font-bold" >Worldwide <br />Learners!</p>
                        </div>
                        <div className="border-r">
                           
                           <div className="flex gap-2" >
                           <h1 className="text-5xl font-bold">4.7</h1>
                            <img className="w-10" src="src\Image\star.svg" alt="" />
                           </div>

                         <p className="text-2xl font-bold" >Positive <br />Reviews</p>
                          
                           
                        </div>
                        <div >
                            <h1 className="text-5xl font-bold">12+</h1>
                            <p className="text-2xl font-bold" >Skill based <br />Courses</p>
                        </div>

                    </div>
                    <div className="space-y-10">
                     <h1 className="text-white">Learn programming the fun way with the Programming Hero app! Download now on the App <br /> Store or Google Play.</h1>
                     <div className="flex gap-5">
                        <img src="src\Image\appStore.svg" alt="" />
                        <img src="src\Image\googlePlay.svg" alt="" />
                     </div>
                    </div>
                   </div>
               </div>

            
            </div>
            
     
        </>
    );
};

export default Next;