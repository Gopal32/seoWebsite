import Carousel from "react-bootstrap/Carousel";
import "../../index.css";

function Slider() {
  return (
    <>
      <Carousel className="slider" variant="dark">
        <Carousel.Item>
          <img
            className="img-slider-1 d-block"
            src="assests/images/slider1.png"
            alt="First slide"
          />
          {/* <Carousel.Caption className="cap-slider-1"> */}
          <div className="cap-slider-1">
            <h4 class="tw-slider-text"> Search Engine Optimization</h4>
            {/* <p>Digital Marketing Solution</p>
             */}
            <h1 class="tw-slider-title">
              Digital Marketing
              <span> Solution</span>
            </h1>
            <button type="button" class="btn btn-dark rounded-pill">
              SUBMIT NOW
            </button>
          </div>

          {/* </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item style={{ backgroundColor: "#5AC69F" }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 position-relative ">
                <img
                  className="img-arrow-1 position-absolute top-0 start-0 d-block"
                  src="assests/images/pattern_arrow2.png"
                  alt="arrow 1"
                />
                <img
                  className=" img-arrow-2 position-absolute d-none d-sm-none d-md-block bottom-0 p-2 start-0 d-block"
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
              <div className="col-md-4" style={{ paddingBottom: "5%" }}>
                <div className="cap-slider-2 d-none d-sm-none d-md-block">
                  <h1 style={{ fontSize: "5vw" }}>
                    We serve best
                    <br />
                    <span>Local SEO </span>
                    service
                  </h1>
                  <p>
                    Start working with an company that provide everything you
                    need to generate awareness, drive traffic, connect with
                    customers, and increase sales montes
                  </p>
                  {/* <div className=""> */}
                  <button type="button" class="btn btn-dark rounded-pill">
                    Free Analysis
                  </button>
                  {/* </div> */}
                  {/* <a href="#" className="btn btn-dark">
                    Free Analysis
                  </a> */}
                </div>
                <div className="cap-slider-2 d-sm-block d-md-none text-center">
                  <h1 style={{ fontSize: "5vw" }}>
                    We serve best
                    <br />
                    <span>Local SEO </span>
                    service
                  </h1>
                  <p>
                    Start working with an company that provide everything you
                    need to generate awareness, drive traffic, connect with
                    customers, and increase sales montes
                  </p>
                  <button type="button" class="btn btn-dark rounded-pill">
                    Free Analysis
                  </button>
                  {/* <a href="#" className="btn btn-dark">
                    Free Analysis
                  </a> */}
                </div>
                {/* </div> */}
              </div>
              <div className="col-md-2 position-relative">
                <img
                  className="img-arrow-2 position-absolute d-sm-block d-md-none bottom-0 start-0 d-block"
                  src="assests/images/pattern_arrow1.png"
                  alt="arrow 2"
                />
                <img
                  className="img-arrow-3 position-absolute bottom-0 end-0"
                  src="assests/images/pattern_arrow3.png"
                  alt="Second slide"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ backgroundColor: "#fa6742" }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 position-relative ">
                <img
                  className="img-arrow-1 position-absolute top-0 start-0 d-block"
                  src="assests/images/pattern_arrow2.png"
                  alt="arrow 1"
                />
                <img
                  className=" img-arrow-2 position-absolute d-none d-sm-none d-md-block bottom-0 p-2 start-0 d-block"
                  src="assests/images/pattern_arrow1.png"
                  alt="arrow 2"
                />
              </div>
              <div className="col-md-4">
                <div className="cap-slider-2 d-none d-sm-none d-md-block">
                  <h1 style={{ fontSize: "5vw" }}>
                    We serve best
                    <br />
                    <span>Local SEO </span>
                    service
                  </h1>
                  <p>
                    Start working with an company that provide everything you
                    need to generate awareness, drive traffic, connect with
                    customers, and increase sales montes
                  </p>
                  {/* <div className=""> */}
                  <button type="button" class="btn btn-dark rounded-pill">
                    Free Analysis
                  </button>
                  {/* </div> */}
                  {/* <a href="#" className="btn btn-dark">
                    Free Analysis
                  </a> */}
                </div>
                <div className="cap-slider-2 d-sm-block d-md-none text-center">
                  <h1 style={{ fontSize: "5vw" }}>
                    We are Creating
                    <br />
                    Custom
                    <span>SEO </span>
                  </h1>
                  <p>
                    Start working with an company that provide everything you
                    need to generate awareness, drive traffic, connect with
                    customers, and increase sales montes
                  </p>
                  <button type="button" class="btn btn-dark rounded-pill">
                    Free Analysis
                  </button>
                  {/* <a href="#" className="btn btn-dark">
                    Free Analysis
                  </a> */}
                </div>
                {/* </div> */}
              </div>
              <div className="col-md-4 " style={{ paddingBottom: "15%" }}>
                <img
                  className="img-slider-3 d-block"
                  src="assests/images/slider4.png"
                  alt="Second slide"
                />
              </div>
              <div className="col-md-2 position-relative">
                <img
                  className="img-arrow-2 position-absolute d-sm-block d-md-none bottom-0 start-0 d-block"
                  src="assests/images/pattern_arrow1.png"
                  alt="arrow 2"
                />
                <img
                  className="img-arrow-3 position-absolute bottom-0 end-0"
                  src="assests/images/pattern_arrow3.png"
                  alt="Second slide"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;
