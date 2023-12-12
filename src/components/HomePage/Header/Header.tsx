import { Container } from "@/common/Container";
import Image from "next/image";
import { Input } from "@/common/Input";
import { Button } from "@/common/Button";

export function Header() {
  return (
    <header className="">
      <Container>
        <nav className="flex justify-between px-10 sm:px-2">
          <div className="flex gap-2 items-center">
            <Image
              src={require("./static/Subtract.png")}
              alt="Subtract"
              width={23}
              height={20}
            />
            <span className="text-3xl font-bolt">FitMe</span>
          </div>
          <div className="flex gap-3">
            <div className="relative border border-black rounded-xl sm:hidden lg:hidden">
              <Input
                type="text"
                placeholder="Enter item or restaurant you are looking for"
                additionalClasses="w-[352px] border-none py-4 px-6 "
              />
              <Button additionalClasses="border-none bg-white">
                <Image
                  src={require("./static/Vector.svg")}
                  alt="Search"
                  width={20}
                  height={20}
                  className="absolute right-5 top-1/3 "
                />
              </Button>
            </div>
            <Button additionalClasses="border-none bg-white">
              <Image
                src={require("./static/Bag.svg")}
                alt="Bag"
                width={30}
                height={30}
              />
            </Button>
            <Button additionalClasses="py-4 px-6">Sign In</Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
