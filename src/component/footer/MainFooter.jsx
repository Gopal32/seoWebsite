import "../../index.css";
import Card from "react-bootstrap/Card";
function MainFooter() {
  return (
    <>
      <div className="div-footer container-fluid">
        <div className="footer row">
          <div className="col-lg-5">
            <div className="card-footer" style={{ padding: "0% 8% 0% 15%" }}>
              <Card
                style={{
                  backgroundColor: "#202020",
                  padding: "40px 30px 20px 30px",
                }}
              >
                <img
                  src="assests/images/footer_logo.png"
                  style={{ height: "61px", width: "168px", marginLeft: "18px" }}
                  alt="footerLogo"
                />
                <Card.Body>
                  <Card.Text style={{ color: "#757575" }}>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut
                  </Card.Text>
                  <Card.Title style={{ color: "white", fontSize: "20px" }}>
                    Follow us
                  </Card.Title>
                </Card.Body>
              </Card>
              <div className="title-footer d-flex">
                <img src="assests/images/best.png" alt="logo" />
                <h3>Best Seo Company 2017</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-7 list-footer">
            dfg
            <div className="col-lg-3"></div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainFooter;
