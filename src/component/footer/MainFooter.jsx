import "../../index.css";
import Card from "react-bootstrap/Card";
function MainFooter() {
  return (
    <>
      <div className="div-footer container-fluid">
        <div className="footer row">
          <div className="col-lg-5">
            <div className="card-footer">
              <Card
                style={{
                  backgroundColor: "#202020",
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
              <div className="title-footer">
                <img src="assests/images/best.png" alt="logo" />
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
