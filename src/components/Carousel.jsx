import Carousel from "react-bootstrap/Carousel";
import crData from "./CrouselData";
import { useState } from "react";

function CarouselMome() {
  const [items, setItem] = useState(crData);
  return (
    <Carousel>
      {items.map((data, index) => {
        return (
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={data.image}
              alt={data.name}
              height={550}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CarouselMome;
