import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Succes = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
      };



    return (
        <div className="text-white">
               <div className="text-6xl text-white text-center font-bold my-20">
                   <h1>  Success_ Story</h1>
                   <h1 id="cols"> </h1>
               </div>

              <div id='slide-container' className="flex gap-5  ">
             
                   

                  
              <div id='content'  className="bg-gray-500 rounded-lg p-5 slider">
                <div className="flex  items-center justify-between ">
                    <h1 className="text-6xl">“</h1>
                    <h1 className="text-xl p-2 bg-purple-500 rounded-lg">Batch 6</h1>
                </div>
                     Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Accusantium <br /> nobis ipsum libero magni qui  <br />maxime earum ut quae atque! Dolore.
                     <div className="flex items-center">
                        <img className="w-[80px] h-[80px] rounded-full" src="https://i.ibb.co/5YXRgJc/1685703514873-Chayti-Saha.png" alt="" />
                        <div>
                            <h1>Lorem, ipsum dolor.</h1>
                            <p>Front End Developer</p>
                        </div>
                     </div>
               </div>
              
               <div id='content' className="bg-gray-500 rounded-lg p-5">
                <div className="flex  items-center justify-between">
                    <h1 className="text-6xl">“</h1>
                    <h1 className="text-xl p-2 bg-purple-500 rounded-lg">Batch 5</h1>
                </div>
                     Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Accusantium <br /> nobis ipsum libero magni qui  <br />maxime earum ut quae atque! Dolore.
                     <div className="flex items-center">
                        <img className="w-[80px] h-[80px] rounded-full" src="https://i.ibb.co/5YXRgJc/1685703514873-Chayti-Saha.png" alt="" />
                        <div>
                            <h1>Lorem, ipsum dolor.</h1>
                            <p>Front End Developer</p>
                        </div>
                     </div>
               </div>
               <div id='content' className="bg-gray-500 rounded-lg p-5">
                <div className="flex  items-center justify-between">
                    <h1 className="text-6xl">“</h1>
                    <h1 className="text-xl p-2 bg-purple-500 rounded-lg">Batch 5</h1>
                </div>
                     Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Accusantium <br /> nobis ipsum libero magni qui  <br />maxime earum ut quae atque! Dolore.
                     <div className="flex items-center">
                        <img className="w-[80px] h-[80px] rounded-full" src="https://i.ibb.co/5YXRgJc/1685703514873-Chayti-Saha.png" alt="" />
                        <div>
                            <h1>Lorem, ipsum dolor.</h1>
                            <p>Front End Developer</p>
                        </div>
                     </div>
               </div>
               <div id='content' className="bg-gray-500 rounded-lg p-5">
                <div className="flex  items-center justify-between">
                    <h1 className="text-6xl">“</h1>
                    <h1 className="text-xl p-2 bg-purple-500 rounded-lg">Batch 7</h1>
                </div>
                     Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Accusantium <br /> nobis ipsum libero magni qui  <br />maxime earum ut quae atque! Dolore.
                     <div className="flex items-center">
                        <img className="w-[80px] h-[80px] rounded-full" src="https://i.ibb.co/5YXRgJc/1685703514873-Chayti-Saha.png" alt="" />
                        <div>
                            <h1>Lorem, ipsum dolor.</h1>
                            <p>Front End Developer</p>
                        </div>
                     </div>
               </div>

               
        
              </div>
        </div>
    );
};

export default Succes;