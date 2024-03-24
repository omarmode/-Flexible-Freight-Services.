import React from "react";
import "./Sev.css";
import Nav from "../Navbar/Nav";
import SERVICES from "../SERVICES/SERVICES";
import Fleet from "../Fleet/Fleet";
import Footer from "../Footer/Footer";
function Sev() {
  return (
    <div>
      <Nav />
      <div className="img-about">
        <div className="h-about">
          <h1 className="about-h">Services</h1>
          <p className="about-p">
            Our transportation division offers reliable and efficient solutions{" "}
            <br /> for all your transportation needs.
          </p>
        </div>
      </div>
      <SERVICES />
      <Fleet />
      <div className="Track flex" style={{ flexWrap: "wrap" }}>
        <div className="Track1">
          <h2
            style={{
              fontWeight: "bold",
              color: "#003973",
              textAlign: "left",
            }}
          >
            Global Navigation Track your shipment <br /> in 3 easy steps.
          </h2>
          <p
            className="p225"
            style={{
              textAlign: "left",
              color: "#CBD4DF",
              marginTop: "60px",
              fontWeight: "bold",
            }}
          >
            We're confident that we have the experience,
            <br /> expertise, and commitment to help you achieve your logistics
            goals. <br /> Contact us today to learn more about how we can help
            your business succeed.
          </p>
        </div>
        <div className="Track2 flex">
          <div className="Track-right">
            <h4
              className="span-Track flex"
              style={{
                color: "#003973",
                textAlign: "left",
                gap: "30px",
              }}
            >
              <p className="span-h44 p225">01</p> Get a freight quote
            </h4>
            <p
              className="p225"
              style={{
                textAlign: "left",
                color: "#CBD4DF",
              }}
            >
              We have the expertise and knowledge to handle even the <br /> most
              complex logistics challenges.
            </p>
          </div>
          <div className="Track-right">
            <h4
              className="span-Track flex"
              style={{
                color: "#003973",
                textAlign: "left",
                gap: "30px",
              }}
            >
              <p className="span-h44 p225">02</p> Set your destination
            </h4>
            <p
              className="p225"
              style={{
                textAlign: "left",
                color: "#CBD4DF",
              }}
            >
              We have the expertise and knowledge to handle even the <br /> most
              complex logistics challenges.
            </p>
          </div>
          <div className="Track-right">
            <h4
              className="span-Track flex"
              style={{
                color: "#003973",
                textAlign: "left",
                gap: "30px",
              }}
            >
              <p className="span-h44 p225">03</p> Track your shipment
            </h4>
            <p
              className="p225"
              style={{
                textAlign: "left",
                color: "#CBD4DF",
              }}
            >
              We have the expertise and knowledge to handle even the <br /> most
              complex logistics challenges.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sev;
