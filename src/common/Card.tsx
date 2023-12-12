"use client";

import Image from "next/image";
import menu1 from "@/components/HomePage/Menu/static/menu1.png";
import menu2 from "@/components/HomePage/Menu/static/menu2.png";
import menu3 from "@/components/HomePage/Menu/static/menu3.png";
import menu4 from "@/components/HomePage/Menu/static/menu4.png";
import recMenu1 from "../components/HomePage/Recomendation/static/RecMenu1.jpeg";
import recMenu2 from "../components/HomePage/Recomendation/static/RecMenu2.jpeg";
import recMenu3 from "../components/HomePage/Recomendation/static/RecMenu3.jpeg";
import recMenu4 from "../components/HomePage/Recomendation/static/RecMenu4.jpeg";
import star from "@/components/HomePage/Menu/static/Star.svg";
import timeIcon from "@/components/HomePage/Menu/static/Vector1.1.svg";
import peopleIcon from "@/components/HomePage/Menu/static/Vector1.svg";
import { useState } from "react";

type CardProps = {
  data: {
    title: string;
    description: string;
    imgSrc: string;
    price?: string;
    subtitle: string;
    rating: number;
    imgIcon: string;
    imgTime: string;
    imgPeople: string;
    modaltext?: string;
  };
};

export function Card({ data }: CardProps) {
  const {
    title,
    description,
    imgSrc,
    price,
    subtitle,
    rating,
    imgIcon,
    imgTime,
    imgPeople,
    modaltext,
  } = data;

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex flex-col gap-2 rounded-lg max-w-xs pt-6 px-6 hover:shadow-md text-black bg-[#F8F8F8]">
      <div className="relative  " onClick={toggleModal}>
        <Image
          className="object-cover rounded-2xl "
          src={imgSrc}
          alt={title}
          width={250}
          height={250}
        />
      </div>
      <div className="py-3">
        <h2 className="text-xl">{title}</h2>
        <div className="flex justify-between py-3">
          <p className="text-xs text-gray-700">{description}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Image src={imgPeople} alt={title} width={25} height={25} />
            <div>${price}</div>
          </div>
          <div className="flex gap-2">
            <Image src={imgTime} alt={title} width={25} height={25} />
            <h4 className="text-md text-gray-700">{subtitle}</h4>
          </div>
        </div>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-[650px] h-[400px] rounded-lg p-4 flex relative">
              <div className="flex-none mr-4">
                <Image src={imgSrc} alt={title} width={250} height={250} />
              </div>
              <div className="flex flex-col w-full">
                {/* Modal content */}
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl">{title}</h2>
                  <button
                    onClick={toggleModal}
                    className="text-gray-500 hover:text-black focus:outline-none"
                  >
                    <span className="text-xl">×</span>
                  </button>
                </div>
                <span>
                  <p>{modaltext}</p>
                </span>
                <span className="mt-10">{/* Other details */}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export const data = [
  {
    imgSrc: menu1.src,
    title: "Ramachandra Parlour",
    description: "South Indian",
    rating: 4.0,
    imgIcon: star.src,
    subtitle: "30 minutes",
    imgTime: timeIcon.src,
    imgPeople: peopleIcon.src,
    modaltext:
      "Змішати яйця, сіль та молоко (співвідношення молока і яєць має бути майже 1:1). Збити суміш вінчиком. Вилити у змащену маслом форму й запікати 30-40 хвилин при 180-190°С. Після духовки омлет трохи осяде, але залишатиметься високим, пористим і смачним.",
  },
  {
    imgSrc: menu2.src,
    title: "Uma Parlour ",
    description: "South Indian",
    price: "200 for you",
    rating: 5.0,
    imgIcon: star.src,
    subtitle: "20 minutes",
    imgTime: timeIcon.src,
    imgPeople: peopleIcon.src,
    modaltext:
      "Налийте воду в каструлю.  перець чилі (нарізаний кільцями). Прикрийте кришкою і доведіть до кипіння та залиште на 5 хв. Додати пасту том ям. На середньо-низькій температури залишити ще на 5 хвилин. Додайте креветки, гриби (більшими шматками), цибулю (більшими шматками), томати (половинками), рибний соус. Проварити 10 хвилин. На останніх трьох хвилинах додайте кокосове молоко (за бажанням) листя кінзи та сік лайма (вичавіть з одного лайму).Суп готовий для 4-6 чоловік. Смачного:)",
  },
  {
    imgSrc: menu3.src,
    title: "Swap - Diet Meal Box",
    description: "Healthy Food, Salads",
    price: "250 for you",
    rating: 4.5,
    imgIcon: star.src,
    subtitle: "40 minutes",
    imgTime: timeIcon.src,
    imgPeople: peopleIcon.src,
    modaltext:
      "Доведіть воду до кипіння та додайте вівсяні пластівці в киплячу воду. Варіть вівсянку приблизно 10 хвилин на повільному вогні, постійно помішуючи. Додайте молоко, продовжуйте помішувати ще кілька хвилин (не більше 5). Додайте сіль, цукор за смаком. Каша готова!",
  },
  {
    imgSrc: menu3.src,
    title: "The Good Bowl",
    description: "North Indian, Punjabi",
    price: "170 for you",
    rating: 4.8,
    imgIcon: star.src,
    subtitle: "1 hours",
    imgTime: timeIcon.src,
    imgPeople: peopleIcon.src,
    modaltext:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam molestiae maxime aperiam labore dignissimos, omnis dolores quibusdam possimus incidunt veniam facilis deleniti, inventore fugit? Cupiditate obcaecati corrupti officia corporis ea praesentium fugiat mollitia eos a cumque molestiae, in, ipsam iure. ",
  },
  {
    imgSrc: recMenu1.src,
    title: "Swap - Diet Meal Box",
    description: "Healthy Food, Salads",
    price: "250 for you",
    rating: 4.5,
    imgIcon: star.src,
    subtitle: "40 minutes",
    imgTime: timeIcon.src,
    imgPeople: peopleIcon.src,
    modaltext:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam molestiae maxime aperiam labore dignissimos, omnis dolores quibusdam possimus incidunt veniam facilis deleniti, inventore fugit? Cupiditate obcaecati corrupti officia corporis ea praesentium fugiat mollitia eos a cumque molestiae, in, ipsam iure. ",
  },
  {
    imgSrc: recMenu2.src,
    title: "Swap - Diet Meal Box",
    description: "Healthy Food, Salads",
    price: "250 for you",
    rating: 4.5,
    imgIcon: star.src,
    subtitle: "40 minutes",
    imgTime: timeIcon.src,
    imgPeople: peopleIcon.src,
    modaltext:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam molestiae maxime aperiam labore dignissimos, omnis dolores quibusdam possimus incidunt veniam facilis deleniti, inventore fugit? Cupiditate obcaecati corrupti officia corporis ea praesentium fugiat mollitia eos a cumque molestiae, in, ipsam iure. ",
  },
  {
    imgSrc: recMenu3.src,
    title: "Swap - Diet Meal Box",
    description: "Healthy Food, Salads",
    price: "250 for you",
    rating: 4.5,
    imgIcon: star.src,
    subtitle: "40 minutes",
    imgTime: timeIcon.src,
    imgPeople: peopleIcon.src,
    modaltext:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam molestiae maxime aperiam labore dignissimos, omnis dolores quibusdam possimus incidunt veniam facilis deleniti, inventore fugit? Cupiditate obcaecati corrupti officia corporis ea praesentium fugiat mollitia eos a cumque molestiae, in, ipsam iure. ",
  },
  {
    imgSrc: recMenu4.src,
    title: "Swap - Diet Meal Box",
    description: "Healthy Food, Salads",
    price: "250 for you",
    rating: 4.5,
    imgIcon: star.src,
    subtitle: "40 minutes",
    imgTime: timeIcon.src,
    imgPeople: peopleIcon.src,
    modaltext:
      "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam molestiae maxime aperiam labore dignissimos, omnis dolores quibusdam possimus incidunt veniam facilis deleniti, inventore fugit? Cupiditate obcaecati corrupti officia corporis ea praesentium fugiat mollitia eos a cumque molestiae, in, ipsam iure. ",
  },
];
const CardList = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-around xs:justify-center">
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
};

export default CardList;
