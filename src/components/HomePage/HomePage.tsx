import { Hero } from "./Hero/Hero";
import { Menu } from "./Menu/Menu";
import { Search } from "./Search/Search";
import { Mind } from "./Mind/Mind";
import { Recomendation } from "./Recomendation/Recomendation";

export function HomePage(){
    return (
<>
<Hero/>
<Menu/>
<Search/>
<Mind/>
<Recomendation/>
</>
    )
}