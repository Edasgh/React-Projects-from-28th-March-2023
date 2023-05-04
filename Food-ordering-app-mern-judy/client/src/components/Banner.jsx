import pizza_banner_img from "../assets/images/pizza_banner.png"
import Button from "./elements/Button"

export const Banner=()=>{
    return(
        <div className="FO__banner w-full md:w-2/3 px-7 py-10  mx-auto relative flex items-center justify-between ">
            <div className="FO__banner-description w-full md:w-1/2 p-3 mx-3 ">
           <h2 className="mb-6 text-4xl font-bold text-white">
            Food Ordering Made Easy
           </h2>
           <p className="font-semibold text-lg text-red-600 py-3 ">
            Get Started Today !
           </p>
           <div className="FO__banner-btnContainer my-3 space-x-2">
            <Button>Order Now</Button>
            <a href="/menu" className="text-yellow-400 hover:text-yellow-500 font-bold hover:underline px-3">
                See Menu
                </a>

           </div>
            </div>
            <div className="FO__banner-image w-full md:w-1/2 p-5 flex justify-end">
             <img src={pizza_banner_img} alt="pizza_banner" className="max-h-95"  />
            </div>
        
        </div>
    )
}