import AboutNav from "./Data/AboutNav";
import Footer from "./Footer/Footer";
const arry = [
  {
    name:'MD. ASRAFUZZAMAN SUVON',
    image : 'https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1621098027648.jpg',
    type: 'Junior Frontend Engineer, Artificial Void',
    text:'Programming Hero has helped me in many ways to develop my career. They taught me how to work professionally in the programming sector. How to learn and achieve by wo'
  
  },
  {
    name:'lorem sumlorem',
    image:'https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1660140457639.jpg',
    type: 'Junior Frontend Engineer, Artificial Void',
    text:'Programming Hero has helped me in many ways to develop my career. They taught me how to work professionally in the programming sector. How to learn and achieve by wo'
  },
  {
    name:'lorem gilloremfd',
    image:'https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1638420043484.jpg',
    type:'lorem lorem lorem ',
    text:'Programming Hero has helped me in many ways to develop my career. They taught me how to work professionally in the programming sector. How to learn and achieve by wo'
  },
  {
    name:'lorem sum lorem you',
    image:'https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1627885984709.jpg',
    type:'font end dev',
    text:'Programming Hero has helped me in many ways to develop my career. They taught me how to work professionally in the programming sector. How to learn and achieve by wo'
  },
  {
    name:'rifat',
    image:'https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1627752024351.jpg',
    type:'full stk dev',
    text:'Programming Hero has helped me in many ways to develop my career. They taught me how to work professionally in the programming sector. How to learn and achieve by wo'
  },
  {
    name:'lorem lorme',
    image:'https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1613735826005.jpg ',
    type:'lorem lorem',
    text:'Programming Hero has helped me in many ways to develop my career. They taught me how to work professionally in the programming sector. How to learn and achieve by wo'
  }
]


const Succes = ({children}) => {
  return (
    
<div>
 <AboutNav> </AboutNav>
 {
  children
 }
 <div className="my-10">
  
 <h1 className="text-6xl text-white text-center mb-3 font-bold">Successful Students</h1>
 <h1 className="text-white text-center text-base">আমাদের কোর্স থেকে শিখে যারা বিভিন্ন জায়গায় চাকরি/ইন্টার্ন পেয়েছে তাদের মধ্যে কয়েকজন এর প্রোফাইল <br /> নিচে দেয়া হলো</h1>
 </div>
 <div className="grid grid-cols-2 flex-wrap space-y-4 ">
  {
    arry.map((data,id)=>
    <div key={id}>

  <div  className=" w-[550px] m-auto items-center">
         <div className="flex items-center gap-3 ">
           <img className="w-[270px] h-[250px] "  src={data.image} alt="" />
           <h1 className="text-white">{data.text}</h1>
        </div>
        <div id="colors" className="text-white flex justify-between  rounded-b-2xl items-center">
        <div className="pl-2">
        <h1>{data.name}</h1>
          <h1>{data.type}</h1>
        </div>
       <div  className="bg-purple-600 p-3 rounded-lg" >
       <h1>Batch7</h1>
       </div>
        </div>
      </div>
 
       
       
    </div>)
  }
 </div>
 <Footer></Footer>
</div>
  );
};

export default Succes;
