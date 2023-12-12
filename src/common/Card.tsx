import Image from "next/image";
import menu1 from "@/components/HomePage/Menu/static/menu1.png";
import menu2 from "@/components/HomePage/Menu/static/menu2.png";
import menu3 from "@/components/HomePage/Menu/static/menu3.png";
import menu4 from "@/components/HomePage/Menu/static/menu4.png";
import star from "@/components/HomePage/Menu/static/Star.svg";
import timeIcon from "@/components/HomePage/Menu/static/Vector1.1.svg";
import peopleIcon from "@/components/HomePage/Menu/static/Vector1.svg";

type CardProps = {
  data: {
    title: string;
    description: string;
    imgSrc: string;
    price: string;
    subtitle: string;
    rating: number;
    imgIcon: string;
    imgTime: string;
    imgPeople: string;
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
  } = data;
  return (
    <div className="flex flex-col gap-2 rounded-lg max-w- p-6 hover:shadow-md text-black bg-[#F8F8F8] 2xl:max-w-[250px] xs:max-w-[180px] xs:p-3">
      <div className="relative">
        <Image
          className="object-cover rounded-2xl 2xl:w-52"
          src={imgSrc}
          alt={title}
          width={250}
          height={250}
        />
      </div>
      <div>
        <h2 className="text-xl h-12 w-[250px] 2xl:w-48 xl:w-40 xl:text-base xs:w-32 xs:text-sm">{title}</h2>
        <div className="flex justify-between py-3">
          <p className="text-xs text-gray-700">{description}</p>
          <div className="flex gap-2 ">
            <Image src={imgIcon} alt={title} width={25} height={25}  className=""/>
            <p className="xs:mt-1">{rating}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 2xl:block">
            <Image src={imgTime} alt={title} width={25} height={25} />
            <h4 className="text-md xs:text-xs">{subtitle}</h4>
          </div>
          <div className="flex gap-2 2xl:block">
            <Image src={imgPeople} alt={title} width={25} height={25} />
            <h4 className="text-md xs:text-xs">{price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export const data = [
  {
    imgSrc: menu1.src,
    title: "Ramachandra Parlour",
    description: "South Indian",
    price: "300 for you",
    rating: 4.0,
    imgIcon: star.src,
    subtitle: "30 minutes",
    imgTime: timeIcon.src,
    imgPeople: peopleIcon.src,
  },
  {
    imgSrc: menu2.src,
    title: "Uma Parlour - Pure Vegetarian",
    description: "South Indian",
    price: "200 for you",
    rating: 5.0,
    imgIcon: star.src,
    subtitle: "20 minutes",
    imgTime: timeIcon.src,
    imgPeople: peopleIcon.src,
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
  },
  {
    imgSrc: menu4.src,
    title: "The Good Bowl - Traditional Bowls",
    description: "North Indian, Punjabi",
    price: "170 for you",
    rating: 4.8,
    imgIcon: star.src,
    subtitle: "1 hours",
    imgTime: timeIcon.src,
    imgPeople: peopleIcon.src,
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
  },
];
const CardList = () => {
  return (
    <div className="flex flex-wrap gap-4 max-w-7xl xs:justify-center 2xl:max-w-xl">
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
};

export default CardList;
