import Image from "next/image";
import profilePic from '../../public/me.jpg';
import Carousel from "@/components/carousel_display/Carousel";

export default function Home() {
  return (
    <div>
      <div className="grid grid-rows grid-cols-2 justify-items-center p-8 pb-5 gap-5 sm:p-20 h-screen">
        <div className="flex flex-col gap-8 col-start-1 sm:items-center w-full">
            <div className="grid grid-rows-3 flex-col sm:flex-row">
              <h1 className="row-start-1 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-normal"> Hey There! </h1>
              <div className="row-start-2">
                <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl"> My name is Rayner Susanto </h2>
              </div>
              <div className="row-start-3 max-h-[100px] max-w-[30rem]">
                <div>
                  <h2 className="text-5xl pb-5">I am a</h2>
                  <Carousel />
                </div>

              </div>
            </div>
        </div>

        <div className="flex flex-col col-start-2">
          <div className="w-110 h-110 rounded-full overflow-hidden relative">
            <Image 
              src={profilePic} 
              alt="My Profile Picture" 
              width={1000}
              className="object-cover w-full h-full"
              />
          </div>
        </div>
      </div>
    </div>
  );
}
