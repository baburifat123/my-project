import Leyaout from "../Leyout/Leyaout";
import Footer from "./Footer/Footer";
import Body from "./Mains/Body";
import Im from "./Mains/Im";
import Next from "./Mains/Next";
import Succes from "./Mains/Succes";
import Card from "./Mains/card";

import First from "./main/First";
import Second from "./main/Second";

const Home = () => {
 
    return (
      
       <Leyaout> 
         
         <div>
         <First></First>
         <Second></Second>  
          <Body></Body> 
         <Card></Card> 
          <Next></Next>
         <Succes></Succes>
         <Im></Im>
         <Footer></Footer> 
         </div>
      
       </Leyaout>
    
    );
};

export default Home;