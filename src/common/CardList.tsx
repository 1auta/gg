import { Card } from "./Card";
import { data } from "./Card";

const CardList = () => {
    return (
      <div className="flex flex-wrap justify-around xs:justify-center">
      {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    );
  };
  
  export default CardList;
  