import { Link } from "react-router-dom";

const detels = [
    {link:"/", name:"Home"},
    {link:"/blog", name:"Blog"},
    {link:"/success", name:"Success"},
    {link:"/login", name:"Loging"},
    
]
const AboutNav = () => {
    return (
        <div  className="flex justify-between px-10 items-center">
              <div>
              <div className="flex items-center">
                <img src="/ph_logo.svg" alt="" />
              <h1 className=" text-xl font-bold text-white">Programming Hero</h1>
      </div>
              </div>

            <div  className="flex gap-5 font-bold text-white" >
           {
            detels.map((nav,id)=> 
            <div key={id} > 
            
                <Link to={nav.link}>{nav.name}</Link>
             
            </div>)
           }
            </div>

        </div>
    );
};

export default AboutNav;