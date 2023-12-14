import { Container2 } from "@/common/Container2";
import CardList from "@/common/Card";

export function Menu() {
  return (
    <section>
      <Container2>
        <div className="flex mt-24 justify-around xs:mt-5 xl:flex-wrp">
          <div className="">
            <p className="mb-6 text-2xl xs:text-center">Цікаві рецепти</p>
            <CardList />
          </div>
        </div>
      </Container2>
    </section>
  );
}
