import Image from "next/image";
import footerLogo from "./static/Subtract.svg";
import gmailIcon from "./static/free-icon-gmail-732200.png";
import instagramIcon from "./static/free-icon-instagram-2111463.png";
import telegramIcon from "./static/free-icon-paper-12868810.png";

export function Footer() {
  return (
    <footer>
      <div className="h-24 bg-[#FC8019] text-white flex flex-col justify-center ">
        <div className="flex justify-between px-10 items-center xs:flex-wrap xs:gap-4 ">
          <div className="flex">
            <Image src={footerLogo} alt="footerLogo" />
            <span className="font-extrabold	text-3xl">FitMe</span>
          </div>

          <div className="flex gap-5 justify-center">
            <a href="mailto:olijnyk.m005@gmail.com">
              <Image src={gmailIcon} alt="fbicon" width={30} height={30} />
            </a>
            <a href="https://www.instagram.com/animate_me.pls">
              <Image
                src={instagramIcon}
                alt="insticon"
                width={30}
                height={30}
              />
            </a>
            <a href="https://t.me/EmpressesSlayer998">
              <Image src={telegramIcon} alt="twicon" width={30} height={30} />
            </a>
          </div>
          <div className="flex">
            <p>Контакт:</p>
            <p>+91 1234567899</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
