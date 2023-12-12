import { Container2 } from "@/common/Container2";
import sandwith from "../components/HomePage/Mind/static/sandwich.png"
import thali from "../components/HomePage/Mind/static/Thail.png"
import breakfast from "../components/HomePage/Mind/static/breakfast.png"
import roll from "../components/HomePage/Mind/static/roll.png"
import salad from "../components/HomePage/Mind/static/salads.png"
import biriyani from "../components/HomePage/Mind/static/biriyani.png"
import Image from "next/image";

type dataFoodProps = {
  dataFood: {
    imgSrc: string;
    title: string;
  };
};
export function Food({ dataFood }: dataFoodProps) {
  const { title, imgSrc } = dataFood || {};

  return (
    <section>
      <Container2>
        <div>
          <div>
            {imgSrc && <Image src={imgSrc} alt={title} width={160} height={160} className="hover:shadow-xl rounded-full" />}
            {title && <p className="mt-4 xs:mb-4 xs:mt-2" >{title}</p>}
          </div>
        </div>
      </Container2>
    </section>
  );
}
const dataFood = [
  {
    imgSrc: sandwith.src,
    title: "Sandvitch",
  },
  {
    imgSrc: thali.src,
    title: "North Indian Thali",
  },
  {
    imgSrc: breakfast.src,
    title: "Egg BreakFast",
  },
  {
    imgSrc: roll.src,
    title: "Rolls & Puffs",
  },
  {
    imgSrc: salad.src,
    title: "Salads",
  },
  {
    imgSrc: biriyani.src,
    title: "Biriyani Box",
  },
];
const FoodList = () => {
  return (
    <div className="flex flex-wrap text-center xs:justify-between 2xl:flex-wrap">
      {dataFood.map((item, index) => (
        <Food key={index} dataFood={item} />
      ))}
    </div>
  );
};
export default FoodList;
