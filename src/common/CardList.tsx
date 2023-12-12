import { Card } from "./Card";
import { data } from "./Card";

const CardList = () => {
    return (
      <div className="flex flex-wrap gap-4 xs:justify-center max-w-5xl">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    );
  };
  
  export default CardList;
  