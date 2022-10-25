import Watch from "../assets/watch.jpg";
import Applelogo from "../assets/applelogo.png";
import Applewhitelogo from "../assets/applewhite.png";
import ipadpro from "../assets/ipadpro.jpg";
import tv from "../assets/4k.jpeg";
import tvlogo from "../assets/4klogo.jpg";
import Watchseries from "../assets/watchseries.jpg";
import airpods from "../assets/airpods.png";
import card from "../assets/card.png"
import applecard from"../assets/applecard.jpg"

export function Section() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
      <div className=" w-full bg-white  lg:pt-6  ">
        <img src={Applelogo} className="w-32 mx-auto"></img>
        <div className=" mx-auto text-center">
          <div className="text-base lg:text-base text-orange-500  font-medium ">
            ULTRA
          </div>
          <div className="text-xl lg:text-xl text-black mb-1 font-medium ">
            Advetures Awaits.
          </div>
          <div className="mb-12">
            <button className="text-blue-600  font-small lg:text-xl hover:border-b-2 hover:border-blue-600   sm:text-base ">
              Learn more
            </button>

            <span class="material-symbols-outlined text-blue-600 text-left relative  top-2 ">
              chevron_right
            </span>
            <button className="text-blue-600 font-small hover:border-b-2 hover:border-blue-600 lg:text-xl ml-5 sm:text-base ">
              Buy
            </button>
            <span class="material-symbols-outlined text-blue-600 text-left relative top-2 ">
              chevron_right
            </span>
          </div>
        </div>

        <div className=" mx-auto  object-cover   lg:w-full w-full ">
          <img src={Watch} alt="Apple" />
        </div>
      </div>
      <div className=" w-full bg-black   lg:pt-6  ">
        <img src={Applewhitelogo} className="w-32 mx-auto"></img>
        <div className=" mx-auto text-center">
          <div className="text-base lg:text-base text-red-500  font-medium ">
            SERIES 8
          </div>
          <div className="text-xl lg:text-xl text-white mb-1 font-medium ">
            A healthy leap ahead.
          </div>

          <div className="mb-12">
            <button className="text-blue-600  font-small lg:text-xl hover:border-b-2 hover:border-blue-600   sm:text-base ">
              Learn more
            </button>

            <span class="material-symbols-outlined text-blue-600 text-left relative  top-2 ">
              chevron_right
            </span>
            <button className="text-blue-600 font-small hover:border-b-2 hover:border-blue-600 lg:text-xl ml-5 sm:text-base ">
              Buy
            </button>
            <span class="material-symbols-outlined text-blue-600 text-left relative top-2 ">
              chevron_right
            </span>
          </div>
        </div>

        <div className=" mx-auto  object-contain  lg:w-3/5  w-4/5 ">
          <img src={Watchseries} alt="Apple" />
        </div>
      </div>

      <div className=" w-full bg-black   lg:pt-6  ">
        <div className="   text-center">
          <h2 className=" lg:text-4xl text-white text-2xl font-medium ">
            iPad Pro
          </h2>

          <div className="text-2xl lg:text-2xl  text-white  font-medium ">
            Supercharged by M2
          </div>

          <div className="text-xl lg:text-xl  font-small  text-gray-500 mx-auto text-center  ">
            Available starting 10.26
          </div>

          <div className="mb-12">
            <button className="text-blue-600  font-small lg:text-xl hover:border-b-2 hover:border-blue-600   sm:text-base ">
              Learn more
            </button>

            <span class="material-symbols-outlined text-blue-600 text-left relative  top-2 ">
              chevron_right
            </span>
            <button className="text-blue-600 font-small hover:border-b-2 hover:border-blue-600 lg:text-xl ml-5 sm:text-base ">
              Buy
            </button>
            <span class="material-symbols-outlined text-blue-600 text-left relative top-2 ">
              chevron_right
            </span>
          </div>
        </div>

        <div className=" mx-auto  object-contain   w-4/5 ">
          <img src={ipadpro} alt="Apple" />
        </div>
      </div>

      <div className=" w-full bg-white  lg:pt-6  ">
        <img src={tvlogo} className="w-32 mb-1 mx-auto"></img>
        <div className=" mx-auto text-center">
          <div className="text-xl lg:text-2xl lg:mx-44 mx-12 font-small ">
            The Apple experience cinematic in every sense
          </div>
          <div className="text-xl lg:text-xl text-gray-500 mb-1 font-small">
            Available starting 10.6
          </div>
          <div className="mb-12">
            <button className="text-blue-600  font-small lg:text-xl hover:border-b-2 hover:border-blue-600   sm:text-base ">
              Learn more
            </button>

            <span class="material-symbols-outlined text-blue-600 text-left relative  top-2 ">
              chevron_right
            </span>
            <button className="text-blue-600 font-small hover:border-b-2 hover:border-blue-600 lg:text-xl ml-5 sm:text-base ">
              Buy
            </button>
            <span class="material-symbols-outlined text-blue-600 text-left relative top-2 ">
              chevron_right
            </span>
          </div>
        </div>

        <div className=" mx-auto  object-cover   lg:w-3/5 w-3/5 ">
          <img src={tv} alt="Apple" />
        </div>
      </div>

      <div className=" w-full bg-black  lg:pt-6  ">
        <div className=" mx-auto text-center">
          <h2 className=" lg:text-4xl text-white text-3xl font-medium ">
            Airpods Pro
          </h2>

          <div className="text-lg lg:text-2xl  text-white  font-medium ">
            Rebuild from the sounds up
          </div>
          <div className="mb-12">
            <button className="text-blue-600  font-small lg:text-xl hover:border-b-2 hover:border-blue-600   sm:text-base ">
              Learn more
            </button>

            <span class="material-symbols-outlined text-blue-600 text-left relative  top-2 ">
              chevron_right
            </span>
            <button className="text-blue-600 font-small hover:border-b-2 hover:border-blue-600 lg:text-xl ml-5 sm:text-base ">
              Buy
            </button>
            <span class="material-symbols-outlined text-blue-600 text-left relative top-2 ">
              chevron_right
            </span>
          </div>
        </div>

        <div className=" mx-auto  object-cover   w-fit  ">
          <img src={airpods} alt="Apple" />
        </div>
      </div>

      <div className=" w-full bgcoloragain lg:pt-6  ">
        <img src={card} className="w-28 mb-1 mx-auto"></img>
        <div className=" mx-auto text-center">
          <div className="text-xl lg:text-2xl lg:mx-44 mx-12 font-small ">
            Get up to 3% Daily Cash back with every purchase
          </div>
         
          <div className="mb-12">
            <button className="text-blue-600  font-small lg:text-xl hover:border-b-2 hover:border-blue-600   sm:text-base ">
              Learn more
            </button>

            <span class="material-symbols-outlined text-blue-600 text-left relative  top-2 ">
              chevron_right
            </span>
            <button className="text-blue-600 font-small hover:border-b-2 hover:border-blue-600 lg:text-xl ml-5 sm:text-base ">
              Buy
            </button>
            <span class="material-symbols-outlined text-blue-600 text-left relative top-2 ">
              chevron_right
            </span>
          </div>
        </div>

        <div className=" mx-auto  object-cover place-item-baseline  lg:w-3/5 w-4/5 ">
          <img src={applecard} alt="Apple" />
        </div>
      </div>
    </div>
  );
}
