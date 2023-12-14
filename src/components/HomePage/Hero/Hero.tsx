import { Container } from "@/common/Container";
import Image from "next/image";
import previe from "./static/previe2.jpeg";

export function Hero() {
  return (
    <section>
      <Container>
        <div className="flex justify-between gap-2 xs:text-sm">
          <div className="mt-20 xs:mt-4">
            <div className="text-6xl leading-normal	font-medium xs:text-3xl xs:w-full">
              <span>
                Преміум <span className="text-[#FC8019]">якість</span>
              </span>
              <span>
                <span className="flex flex-wrap gap-1">
                  Їжі для вашого{" "}
                  <Image
                    src={require("./static/Component4.png")}
                    alt="Component 4"
                    width={125}
                    height={75}
                    className="xs:w-20"
                  />
                  <span>
                    <p className="text-[#FC8019] sm:hidden">здоровʼя &</p>
                  </span>
                </span>
              </span>
              <span className="flex gap-5">
                <p>Повсякденного</p>
                <span className="text-[#FC8019]"> життя</span>
              </span>
            </div>
            <p className="my-7 w-[44.5rem] xs:w-full text-lg">
              Даний сайт допоможе вам знайти ваш улюблений рецепт. Навіть якщо
              ви не знайдете тут рецепта який вам потрібен, у нас є пошук
              рецептів помережі інтернет. Також ми маємо рекомендації про пошук
              рецептів в інтернеті, та список рецептів чкі будуть добавлені в
              найблиєчому часі
            </p>
            <div className="flex flex-wrap justify-between gap-2 "></div>
            <div className="w-full h-1 bg-slate-600 my-5  hidden sm:block"></div>
            <div>
              <div className=" mt-5 sm:mt-5">
                <p>Популярні страви в країнах</p>
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
