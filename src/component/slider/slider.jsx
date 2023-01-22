import Carousel from "react-bootstrap/Carousel";
import "../../index.css";

function Slider() {
  return (
    <>
      <Carousel className="slider">
        <Carousel.Item>
          <img
            className="img-slider-1 d-block w-80"
            src="assests/images/slider1.png"
            alt="First slide"
          />
          {/* <Carousel.Caption className="cap-slider-1"> */}
          <div className="cap-slider-1">
            <h3>Search Engine Optimization</h3>
            <p>Digital Marketing Solution</p>
          </div>

          {/* </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="assests/images/slider3.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="assests/images/slider4.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;
