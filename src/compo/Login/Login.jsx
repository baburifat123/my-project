
import AboutNav from "../All/Data/AboutNav";

const Login = ({children}) => {
    return (
        <div className="text-white">
            <AboutNav></AboutNav>
            {children}
            <div className="flex justify-between items-center">
            <div className="w-[500px] space-y-7 ml-20" > 

<h1 className="text-2xl font-bold">Login</h1>
<div className="in p-8 rounded-lg items-center">


<div className="flex flex-col">
<input className="w-full p-3 mb-4 " type="email" placeholder="Email" id="infu" />
<input className="w-full p-3" type="password" placeholder="password" id="infu" />
<div className="flex justify-between my-3">
<div className="flex gap-2">
<input className="" type="checkbox" name="" id="" />
<h1>Remember Me</h1>
</div>
<h1 className="h1">Forgot Password</h1>
</div>
</div>
   <div>
   <button id="v" className="w-full p-2 border rounded-md">Login</button>
   <div className="flex justify-center mt-3"> 
   <h1 className="text-center mr-4 ">New user?</h1>
   <h1>Register Here</h1>
   </div>
   </div>
</div>
</div>

                  <div className="mt-44">
                    <img src="h-removebg.png" alt="" />
                  </div>

            </div>
        </div>
    );
};

export default Login;