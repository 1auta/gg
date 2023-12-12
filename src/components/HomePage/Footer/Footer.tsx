import { Container } from "@/common/Container";
import Image from "next/image";
import footerLogo from "./static/Subtract.svg";
import Link from "next/link";
import facebookIcon from "./static/facebook icon.svg";
import instagramIcon from "./static/instagram icon.svg";
import twitterIcon from "./static/twitter icon.svg";

export function Footer() {
  return (
    <footer>
      <div className="h-64 bg-[#FC8019] text-white flex flex-col justify-center ">
        <div className="flex justify-around items-center xs:flex-wrap xs:gap-4 ">
          <div className="flex">
            <Image src={footerLogo} alt="footerLogo" />
            <span className="font-extrabold	text-3xl">FitMe</span>
          </div>
          <div className="flex">
            <nav className="flex gap-14 font-bold xs:gap-4">
              <Link href={"/"}>About us</Link>
              <Link href={"/"}>Delivery</Link>
              <Link href={"/"}>Help & Support</Link>
              <Link href={"/"}>T&C</Link>
            </nav>
          </div>
          <div className="flex">
            <p>Contact:</p>
            <p>+91 1234567899</p>
          </div>
        </div>
          <div className="flex gap-5 justify-center mt-10 ">
            <Image src={facebookIcon} alt="fbicon" width={22} height={22} />
            <Image src={instagramIcon} alt="insticon" width={22} height={22} />
            <Image src={twitterIcon} alt="twicon" width={22} height={22} />
          </div>
      </div>
    </footer>
  );
}
