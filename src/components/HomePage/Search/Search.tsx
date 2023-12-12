import Image from "next/image";
import searchIcon from "@/components/HomePage/Search/static/Vector.svg";
import { Input } from "@/common/Input";
import { Button } from "@/common/Button";

export function Search() {
  return (
    <section>
      <div className="h-[200px] bg-[#FC8019] w-full flex flex-wrap text-white justify-center items-center gap-6 mt-40 xs:gap-1 xs:mt-5">
        <div className="flex gap-6">
          <p className="font-bolt text-2xl">Search by Restaurant</p>
          <Image src={searchIcon} alt="searchIcon" width={20} height={20} />
        </div>
        <div className="flex flex-wrap gap-5 xs:px-1">
          <Input
            additionalClasses="w-[570px] bg-[#FC8019] border border-white text-white placeholder-white placeholder-opacity-20 xs:w-full "
            type="text"
            placeholder="Enter item or restaurant you are looking for"
          />
          <Button>Search Now</Button>
        </div>
      </div>
    </section>
  );
}
