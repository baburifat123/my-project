import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div id="footer">
        <div  className="text-white flex justify-around my-14 space-y-6 p-10">
            <div>
               <h1>Level-4, 34, Awal Centre, Banani, Dhaka</h1>
               <h1>Support: web@programming-hero.com</h1>
               <h1>(Available : 10:00am to 07:00pm)</h1>
            </div>
            <div>
                     <h1>Home</h1>
                     <h1>About</h1>
                   <h1>Success</h1>
                   <h1>Products</h1>
                   
            </div>
            <div>
            <h1 className="text-lg">Follow Us</h1>
            <div  className="flex gap-6 text-2xl">
            <FaFacebook></FaFacebook>
             <FaInstagram></FaInstagram>
             <FaLinkedin></FaLinkedin>
             <FaYoutube></FaYoutube>
            </div>
            
            </div>
        </div>
        <div className="flex justify-around   text-white"> 
            <div>
            <h1>Pay With</h1>
            <img src="src\SSL-commerz.webp" alt="" /> 
            </div>
            <div className="items-end">
                <h1>@Programming Hero 2023</h1>
            </div>
        </div>
        </div>
    );
};

export default Footer;