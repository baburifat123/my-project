
import AboutNav from "./Data/AboutNav";
import Foot from "./Footer/Footer";
import Abouts from "./about/Abouts";

const About = () => {
    return (
        <div>
          <AboutNav></AboutNav>
       <div className="mt-10 max-w-[1200px] m-auto">
        <Abouts></Abouts>
       
        </div>
        <Foot></Foot>
        </div>
    );
};

export default About;