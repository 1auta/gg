import { Container2 } from "@/common/Container2";
import Image from "next/image";
import FoodList from "@/common/FoodMind";

export function Mind() {
  return (
    <section>
      <Container2>
        <div className="mt-32 xs:mt-5 ">
          <p className="text-2xl mb-6 xs:text-center">
            Нові рецепти які зʼявляться в найближчому часі
          </p>
          <FoodList />
        </div>
      </Container2>
    </section>
  );
}
