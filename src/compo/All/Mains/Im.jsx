
const Im = () => {
    return (
        <div>

         <div className="flex justify-between">
         <img className="animate__animated animate__fadeInLeft" src="triangle.svg" alt="" />
           <img src="https://www.programming-hero.com/team/blue-square.svg " alt="" />
         </div>

           
                <h1 className="text-6xl text-white font-bold text-center my-10">Our Mission_</h1>
            <div className="flex justify-center gap-8 items-center ">
                <img className="w-[750px] h-[450px] rounded-lg" src="team.webp" alt="" />
                   <div className="text-white space-y-8">
                    <h1><span className="text-rose-400">Why:</span> We are passionate about empowering individuals to <br />transform their lives through the power of coding. We <br /> believe that everyone should have access to high-quality, <br /> affordable coding education, regardless of their <br />background or experience.</h1>
                    <h1><span className="text-rose-400">What:</span> We provide a comprehensive range of online <br /> programming courses, from beginner-level Web <br />Development to advanced CSE Fundamentals and <br /> Advanced Programming Courses. Our courses are designed <br />to be engaging, effective, and tailored to the needs of  <br />today's learners.</h1>
                    <h1><span className="text-rose-400">How:</span> We nurture our students in a personalized and <br />supportive environment that fosters confidence and success. Our friendly and <br /> dedicated instructors are always <br /> available to guide and mentor our students, ensuring they <br /> receive the support they need to achieve their coding <br /> goals.</h1>
                </div>
                
            </div>
        </div>
    );
};

export default Im;