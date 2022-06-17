import React from "react";
import CarouselMome from "./Carousel";
const Home = () => {
  return (
    <>
      <div className="container-fluid nav-bg bg-color:black">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="col-md-12 pt-5 pt-lg-0 order-2 order-1 my-2">
              <CarouselMome />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
