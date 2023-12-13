import { Container2 } from "@/common/Container2";
import { RecList } from "@/common/CardRec";

export function Recomendation() {
  return (
    <section>
      <Container2>
        <div className="mt-32 mb-10 xs:mt-5 ">
          <p className="text-2xl mb-6 xs:text-center ">
            Персональні рекомендації для пошуку рецептів
          </p>
          <RecList />
        </div>
      </Container2>
    </section>
  );
}
