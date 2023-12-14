import { Container } from "@/common/Container";
import Image from "next/image";
import { Button } from "@/common/Button";
import Link from "next/link";

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
            <Link href={"/login"}>
              <Button additionalClasses="py-4 px-6">Sign In</Button>
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
