import Carousel from "react-bootstrap/Carousel";
import "../../index.css";

function Slider() {
  return (
    <>
      <Carousel className="slider">
        <Carousel.Item>
          <img
            className="img-slider-1 d-block"
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
        <Carousel.Item active>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 position-relative ">
                <img
                  className="position-absolute top-0 d-block"
                  src="assests/images/pattern_arrow2.png"
                  alt="arrow 1"
                />
                <img
                  className="position-absolute bottom-0 left-0 d-block"
                  src="assests/images/pattern_arrow1.png"
                  alt="arrow 2"
                />
              </div>
              <div className="col-md-4">
                <img
                  className="img-slider-2 d-block"
                  src="assests/images/slider3.png"
                  alt="Second slide"
                />
              </div>
              <div className="col-md-4">
                {/* <div className="col-md-6"> */}
                <div className="cap-slider-2">
                  <h1>
                    We serve best
                    <br />
                    <span>Local SEO</span> service{" "}
                  </h1>
                  <p>
                    Start working with an company that provide everything you
                    need to generate awareness, drive traffic, connect with
                    customers, and increase sales montes
                  </p>
                  <a href="#" className="btn btn-dark">
                    Free Analysis
                  </a>
                </div>
                {/* </div> */}
              </div>
              <div className="col-md-2 position-relative">
                <img
                  className="position-absolute bottom-0 right-0 d-block"
                  src="assests/images/pattern_arrow3.png"
                  alt="Second slide"
                />
              </div>
            </div>
          </div>
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
