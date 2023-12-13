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
          <div className="w-full h-1 bg-slate-600 rounded-2xl hidden sm:block"></div>
        </div>
      </Container2>
    </section>
  );
}
