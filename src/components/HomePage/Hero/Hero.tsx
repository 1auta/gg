import { Container } from "@/common/Container";
import Image from "next/image";
import { Input } from "@/common/Input";
import { Button } from "@/common/Button";
import previe from "./static/previe2.jpeg";

export function Hero() {
  return (
    <section>
      <Container>
        <div className="flex justify-between gap-2">
          <div className="mt-20 xs:mt-4">
            <div className="text-6xl leading-normal	font-medium xs:text-[43px] xs:w-full">
              <span>
                Premium <span className="text-[#FC8019]">quality</span>
              </span>
              <span>
                <span className="flex flex-wrap gap-3">
                  Food for your
                  <Image
                    src={require("./static/Component4.png")}
                    alt="Component 4"
                    width={125}
                    height={75}
                    className="xs:w-20"
                  />
                  <span>
                    <p className="text-[#FC8019] sm:hidden">healthy</p>
                  </span>
                </span>
              </span>
              <span className="flex gap-5">
                <Image
                  src={require("./static/Component5.png")}
                  alt="AppleIcon"
                  width={125}
                  height={75}
                  className="xs:w-20 xs:h-15"
                ></Image>
                <span className="text-[#FC8019]">& Daily Life</span>
              </span>
            </div>
            <p className="my-7 w-[44.5rem] xs:w-full text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex flex-wrap justify-between gap-2 ">
              <Input
                placeholder="Enter your delivery location"
                type="text"
                additionalClasses="w-[600px] xs:w-full"
              />
              <Button additionalClasses="w-[145px] rounded-xl bg-black py-4 px-6 ">
                Get Started
              </Button>
            </div>
            <div className="w-full h-1 bg-slate-600 my-5  hidden sm:block"></div>
            <div>
              <div className=" mt-7 sm:mt-5">
                <p>Popular cities in India</p>
                <div className="flex flex-wrap gap-3 mt-7 xs:w-2/3">
                  <p>Hyderabad</p>
                  <p className="text-[#FC8019] opacity: 0.75 transition-transform duration-300 transform-gpu hover:scale-105">
                    Chennai
                  </p>
                  <p>Mumbai</p>
                  <p className="text-[#FC8019] opacity: 0.75 transition-transform duration-300 transform-gpu hover:scale-105">
                    Bangalore
                  </p>
                  <p>Delhi</p>
                  <p className="text-[#FC8019] opacity: 0.75 transition-transform duration-300 transform-gpu hover:scale-105">
                    Kolkata
                  </p>
                </div>
              </div>
              <div className="w-full h-1 bg-slate-600 rounded-2xl my-5 hidden sm:block"></div>
            </div>
          </div>
          <div className="mt-48 lg:hidden	xs:hidden xl: ">
            <Image
              src={previe}
              width={800}
              height={150}
              alt="previe"
              className="xl:hidden rounded-md shadow-2xl transition-transform duration-300 transform-gpu hover:scale-105"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
