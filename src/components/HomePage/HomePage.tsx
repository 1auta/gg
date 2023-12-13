import { Hero } from "./Hero/Hero";
import { Menu } from "./Menu/Menu";
import { Search } from "./Search/Search";
import { Mind } from "./Mind/Mind";
import { Recomendation } from "./Recomendation/Recomendation";
import { Header } from "./Header/Header";

export function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <Search />
      <Mind />
      <Recomendation />
    </>
  );
}
