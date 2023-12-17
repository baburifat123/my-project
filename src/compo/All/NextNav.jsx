import React, { useEffect, useState } from "react";
import AboutNav from "./Data/AboutNav";
import SerchValue from "./Blog/SerchValue";
import { IoSearch } from "react-icons/io5";
import Footer from "./Footer/Footer";


const NextNav = ({ children }) => {
  const [value, setValue] = useState(null);
  const [filter, setFilter] = useState(null);
  const [buton, setButton] = useState("All")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('Data.json');
        const Data = await response.json();
        setValue(Data);
        setFilter(Data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
  
    fetchData();
  }, []);
  
  const search = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);
    if (searchValue === '') {
      setFilter(null);
    } else {
      const filteredData = value?.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilter(filteredData);
    }
  };

  const butons =(type)=>{
     if(type ==="all"){
      setFilter(filter)
      setButton("all")
      return
     }

     const filteredData = value?.filter((item) =>
        item.type.toLowerCase().includes(buton.toLowerCase())
      );
      setFilter(filteredData);
      setButton(type)
  }
  
  const buto = [
    {
      name:"All",
      type : "all",
    },
    {
      name:"Css",
      type : "css"
    },
    {
      name:"Software QA & Testing",
      type : "Software QA & Testing"
    },
    {
      name:"Database Design",
      type : "Database Design"
    },
    {
      name:"Programming Career",
      type : "Programming Career"
    },
    {
      name:"C Programming",
      type : "C Programming"
    },
    {
      name:"Resume",
      type : "Resume"
    },
    {
      name:"Maxhine Learing",
      type : "Maxhine Learing"
    },
    {
      name:"Git and Github",
      type : "Git and Github"
    },
    {
      name:"Programming",
      type : "Programming"
    }
  ];

  return (
    <>
    
    <div>
      <AboutNav> </AboutNav>
      <div>{children}</div>
      <div>
        <div className=" flex justify-around max-w-[800px] m-auto p-10">
        <div id='o' className="">
            <IoSearch className="text-white absolute z-20 mt-3 text-2xl pl-1 items-center" />
            <input id='s' placeholder="Search.." className="w-[800px] p-3 pl-8 text-lg text-white" onChange={search} type="text" name="" />
          </div>
        </div>
      <div className="max-w-[1250px] m-auto">

      <div className="justify-center grid grid-cols-6 gap-4 my-5">

                {buto.map((b, i) => (
                <div key={i}>
                 <button onClick={()=> butons (b.type)} id="btn"className="text-white my-2 text-base rounded-md w-full h-full"> {b.name}</button>
                </div>
         
         ))}</div>
         
         
       
       <h1 className="text-white text-2xl font-bold">Recent Blogs</h1>
       <div  className= "grid grid-cols-3 justify-center p-3 gap-5 ">
           
            {filter !== null && filter.map((bal, id) => (
           <div id="s" className="text-white p-3 " key={id}>
           
                <div className="oo mt-8">
                  <img id="zoom-div" className="w-[450px] h-[300px] rounded-md" src={bal.image} alt="" />
                </div>
                <div className="">
                  <h1 className=" text-xl font-bold my-2 ">{bal.title}</h1>
                  <h1>{bal.text}</h1>
                  <hr />
                  <h1 className="text-end p-2 font-bold">{bal.date}</h1>
                  </div>
    


           </div>))}
        </div>
       </div>

      </div>
    
    </div>
    <Footer></Footer>
    </>

  );
  
  
};

export default NextNav;
