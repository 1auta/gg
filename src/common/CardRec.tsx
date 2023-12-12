import Image from "next/image";
import recMenu1 from "../components/HomePage/Recomendation/static/RecMenu1.jpeg";
import recMenu2 from "../components/HomePage/Recomendation/static/RecMenu2.jpeg";
import recMenu3 from "../components/HomePage/Recomendation/static/RecMenu3.jpeg";
import recMenu4 from "../components/HomePage/Recomendation/static/RecMenu4.jpeg";
import Price from "../components/HomePage/Recomendation/static/Price.svg";
import Time from "../components/HomePage/Recomendation/static/Time.svg";

type RecProps = {
  dataRec: {
    title: string;
    description: string;
    price: string;
    imgSrc: string;
    subtitle: string;
    imgTime: string;
    imgPrice: string;
  };
};
export function CardRec({ dataRec }: RecProps) {
  const { title, description, imgSrc, price, subtitle, imgPrice, imgTime } =
    dataRec;
  return (
    <div className="flex flex-col gap-2 rounded-lg max-w-xs pt-6 px-6 hover:shadow-md text-black bg-[#F8F8F8]">
      <div className="relative h-60 ">
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
            <Image src={imgPrice} alt={title} width={25} height={25} />
            <div>${price}</div>
          </div>
          <div className="flex gap-2">
            <Image src={imgTime} alt={title} width={25} height={25} />
            <h4 className="text-md text-gray-700">{subtitle}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export function RecList() {
  return (
    <div className="flex flex-wrap gap-4 justify-around xs:justify-center">
      {dataRec.map((item, index) => (
        <CardRec key={index} dataRec={item} />
      ))}
    </div>
  );
}
const dataRec = [
  {
    imgSrc: recMenu1.src,
    title: "Swap - Diet Meal Box",
    description: "Healthy Food, Salads",
    price: "222",
    subtitle: "40 minutes",
    imgTime: Time.src,
    imgPrice: Price.src,
  },
  {
    imgSrc: recMenu2.src,
    title: "Swap - Diet Meal Box",
    description: "Healthy Food, Salads",
    price: "250",
    subtitle: "40 minutes",
    imgTime: Time.src,
    imgPrice: Price.src,
  },
  {
    imgSrc: recMenu3.src,
    title: "Swap - Diet Meal Box",
    description: "Healthy Food, Salads",
    price: "250",
    subtitle: "40 minutes",
    imgTime: Time.src,
    imgPrice: Price.src,
  },
  {
    imgSrc: recMenu4.src,
    title: "Swap - Diet Meal Box",
    description: "Healthy Food, Salads",
    price: "200",
    subtitle: "40 minutes",
    imgTime: Time.src,
    imgPrice: Price.src,
  },
  {
    imgSrc: recMenu1.src,
    title: "Swap - Diet Meal Box",
    description: "Healthy Food, Salads",
    price: "222",
    subtitle: "40 minutes",
    imgTime: Time.src,
    imgPrice: Price.src,
  },
  {
    imgSrc: recMenu1.src,
    title: "Swap - Diet Meal Box",
    description: "Healthy Food, Salads",
    price: "222",
    subtitle: "40 minutes",
    imgTime: Time.src,
    imgPrice: Price.src,
  },
  {
    imgSrc: recMenu1.src,
    title: "Swap - Diet Meal Box",
    description: "Healthy Food, Salads",
    price: "222",
    subtitle: "40 minutes",
    imgTime: Time.src,
    imgPrice: Price.src,
  },
];
