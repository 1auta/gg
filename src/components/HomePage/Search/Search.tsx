"use client";

import React, { useState } from "react";
import Image from "next/image";
import searchIcon from "@/components/HomePage/Search/static/Vector.svg";
import { Button } from "@/common/Button";

export function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      searchTerm
    )}`;
    window.open(googleSearchUrl, "_blank");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section>
      <div className="h-[200px] bg-[#FC8019] w-full flex flex-wrap text-white justify-center items-center gap-6 mt-40 xs:gap-1 xs:mt-5">
        <div className="flex gap-6">
          <p className="font-bold text-2xl">Search outside the site</p>
          <Image src={searchIcon} alt="searchIcon" width={20} height={20} />
        </div>
        <div className="flex flex-wrap gap-5 xs:px-1">
          <input
            className="w-[570px] bg-[#FC8019] border-2 border-white rounded-md text-white placeholder-white placeholder-opacity-40 xs:w-full outline-none px-2"
            type="text"
            placeholder="Enter the name of a dish that is not here"
            onChange={handleInputChange}
          />
          <Button onClick={handleSearch}>Search Now</Button>
        </div>
      </div>
    </section>
  );
}
