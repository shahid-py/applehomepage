import HeroImage from "../assets/hero.jpg"
import Iphone from "../assets/iphone14.jpg"
import Iphone14 from "../assets/iphone.jpg"

export function Hero () {
return(
<>


      <div className=" w-full bg-white grid grid-flow-row lg:grid-flow-col grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 lg:pt-6  ">
        
        <div className="order-2 lg:order-1  mx-auto  lg:mx-96  lg:w-3/5 w-4/5 ">
              <img  
              src={HeroImage}
              alt="Apple"/>
            </div>
      
            
          <div className="order-1  lg:order-2  flex-grow mt-6 lg:mt-36 mb-12 lg:mb-2   md:ml-44 sm:ml-36  lg:ml-24 ">
          <h2 className=" lg:text-6xl text-4xl font-medium ml-32" >iPad</h2>
       <div className="text-xl lg:text-3xl mb-1 lg:mb-2 ml-6 lg:ml-0 font-medium ">Lovable. Drawable. Magical</div>
       <div className="text-base lg:text-2xl  font-small  text-gray-500  ml-16 lg:ml-12  ">Available starting 10.26</div>
       <div className="">

    <button  className="text-blue-600 hover:border-b-2 hover:border-blue-600 font-small lg:text-xl  ml-12 sm:text-base ">
   
      Learn more
  
    </button>
    <span class="material-symbols-outlined text-blue-600 text-left relative top-2 ">
chevron_right
</span>
    <button  className="text-blue-600 font-small hover:border-b-2 hover:border-blue-600  lg:text-xl  ml-2 sm:text-base ">
   
      Order Now
  
    </button>
    <span class="material-symbols-outlined text-blue-600 text-left relative top-2 ">
chevron_right
</span>
    </div>
       </div>
       </div>


       <div className=" w-full bg-black    lg:pt-6  ">
       <div className=" mx-auto text-center">
          <h2 className=" lg:text-6xl text-white text-2xl font-medium " >iPhone 14 Pro</h2>
       <div className="text-xl lg:text-3xl text-white mb-1 font-medium ">Pro. Beyond</div>

       <div className="">

    <button  className="text-blue-600  font-small lg:text-xl hover:border-b-2 hover:border-blue-600   sm:text-base ">
   
    Learn more
  
    </button>
  
      <span class="material-symbols-outlined text-blue-600 text-left relative  top-2 ">
chevron_right
</span>
    <button  className="text-blue-600 font-small hover:border-b-2 hover:border-blue-600 lg:text-xl ml-5 sm:text-base ">
   
      Buy
  
    </button>
    <span class="material-symbols-outlined text-blue-600 text-left relative top-2 ">
chevron_right
</span>
    </div>
       </div>

        
        <div className=" mx-auto lg:w-3/5 w-4/5 ">
              <img  
              src={Iphone}
              alt="Apple"/>
            </div>
      </div>




       
       <div className=" w-full bgcoloragain   lg:pt-6  ">
       <div className=" mx-auto text-center">
          <h2 className=" lg:text-6xl text-black text-4xl font-medium " >iPhone 14</h2>
       <div className="text-xl lg:text-3xl text-black mb-1 font-medium ">Big and Bigger</div>

       <div className="">

    <button  className="text-blue-600  font-small lg:text-xl hover:border-b-2 hover:border-blue-600   sm:text-base ">
   
    Learn more
  
    </button>
  
      <span class="material-symbols-outlined text-blue-600 text-left relative  top-2 ">
chevron_right
</span>
    <button  className="text-blue-600 font-small hover:border-b-2 hover:border-blue-600 lg:text-xl ml-5 sm:text-base ">
   
      Buy
  
    </button>
    <span class="material-symbols-outlined text-blue-600 text-left relative top-2 ">
chevron_right
</span>
    </div>
       </div>

        
        <div className=" mx-auto    lg:w-3/5 w-4/5 ">
              <img  
              src={Iphone14}
              alt="Apple"/>
            </div>
      
            
        
       </div>
       
</>

)
}