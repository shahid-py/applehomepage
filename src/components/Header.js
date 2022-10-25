import { Link }from "react-router-dom"
import { useState } from "react";
import applelogo from "../assets/apple.png"
export function Header() {
   
   
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-0.5 w-6 my-1    z-50 bg-gray-100 relative transition ease transform duration-300`;
  
  return (
    <nav className="bgcolor  w-full z-30  dark:bg-gray-900">
  <div className="w-full   mx-auto grid grid-flow-col py-3 ">
     
  <button
      className="   flex flex-col h-12 w-12 lg:hidden justify-center items-center group"
      onClick={() => setIsOpen(!isOpen) }
     
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-2.5 "
            : "opacity-100 "
        }`}
      />
    
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45  -translate-x-0.5 "
            : "opacity-100"
        }`}
      />
      
    </button>
   { isOpen && (

<>



     <ul className="  lg:hidden z-40 transition absolute bg-black left-0 top-0 text-left textcolor text-sm font-thin  min-h-screen w-full text-justify  mt-22 flex-row   text-l font-medium  slidedownagain ">
     <div class="relative">
	<div class="absolute  flex items-center top-20 left-8 ">
	  <svg class="w-4 h-4 fill-current " viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
	  </svg>
	
      </div>
	<input type="text" placeholder="Search apple.com" class="px-8 ml-6  py-3 w-11/12   rounded-md bggraycolor  mt-16  "/>
    </div>
    <li className="block   border-gray-800 border-t-2   mt-2 ">
          
        </li>
        <li className="block   border-gray-800  mx-12   p-4">
        Store
        </li>
        <li className=" block  border-gray-800 border-t-2 mx-12   p-4">
        Mac
        </li>
        <li className=" block  border-gray-800 border-t-2 mx-12  p-4">
        iPad
        </li>
        <li className=" block  border-gray-800 border-t-2 mx-12  p-4 ">
        iPhone
        </li>
        <li className=" block  border-gray-800 border-t-2 mx-12  p-4 ">
        Watch
        </li>
        <li className=" block  border-gray-800 border-t-2 mx-12  p-4 ">
        Airpods
        </li>
        <li className=" block  border-gray-800 border-t-2 mx-12  p-4 ">
        TV & Home
        </li>
        <li className=" block  border-gray-800 border-t-2 mx-12  p-4 ">
        Only on Apple
        </li>
        <li className=" block  border-gray-800 border-t-2 mx-12  p-4 ">
        Accessories
        </li>
        <li className=" block  border-gray-800 border-t-2 mx-12  p-4 ">
        Support
        </li>
       
        
       
        
      </ul>
      
      </>


   )}
   < img src={applelogo} width={15} className=" z-40 lg:col-start-5 ml-24 w-6 lg:w-4 my-auto col-start-3 "></img>
  
   <div className=" hidden  w-full  lg:flex col-start-6 col-end-12 md:w-auto " >
      

    <ul className=" flex  flex-grow text-xs my-auto textcolor font-thin  gap-12">
    <Link to="#">
            <button className="mt-2">
              Store
            </button>
          </Link>
    <Link to="#" >
            <button className="mt-2">
              Mac
            </button>
          </Link>
    <Link to="#">
            <button className="mt-2">
              ipad
            </button>
          </Link>
          <Link to="#">
            <button className="mt-2">
              iPhone
            </button>
          </Link>
          <Link to="#">
            <button className="mt-2">
              Watch
            </button>
          </Link>
          
          <Link to="#">
            <button className="mt-2">
              Airpod
            </button>
          </Link>
          <Link to="#">
            <button className="mt-2">
              Tv & Homes
            </button>
          </Link>
          <Link to="#">
            <button className="mt-2">
              Only on Apple
            </button>
          </Link>
          <Link to="#">
            <button className="mt-2">
              Accessories
            </button>
          </Link>
          <Link to="#">
            <button className="mt-2">
              Support
            </button>
          </Link>
          <span class="   text-xl font-small textcolor my-auto material-symbols-outlined">
search
</span>
<span class="text-xl textcolor my-auto material-symbols-outlined">

shopping_bag

</span>

    </ul>
  </div>
  <span class=" lg:hidden text-2xl textcolor font-small col-start-5  my-auto ml-24 material-symbols-outlined">

shopping_bag

</span>
 
  
 
 

     
  
  </div>
</nav>

  );
}