import React, { useState } from "react";
import "./About.css";
import Nav from "../Navbar/Nav";
import ImageAbout from "./ImageAbout/ImageAbout";
import Inspiration from "./Inspiration/Inspiration";
import OurTeam from "./Our Team/Our Team";
import Business from "./Business/Business";
import Footer from "../Footer/Footer";

function About() {
  const [show, setshow] = useState(false);
  const [buttn, setbuttn] = useState("");

  const showname = () => {
    if (show == true) {
      setshow(false);
      setshow2(true);
      setshow3(true);
    } else {
      setshow(true);
      setshow2(false);
      setshow3(false);
    }
  };
  const [show2, setshow2] = useState(false);
  const showname2 = () => {
    if (show2 == true) {
      setshow2(false);
      setshow(true);
      setshow3(true);
    } else {
      setshow(false);
      setshow3(false);
      setshow2(true);
    }
  };
  const [show3, setshow3] = useState(false);
  const showname3 = () => {
    if (show3 == true) {
      setshow3(false);
      setshow(true);
      setshow2(true);
    } else {
      setshow3(true);
      setshow2(false);
      setshow(false);
    }
  };
  return (
    <div>
      <Nav />
      <div className="img-about">
        <div className="h-about">
          <h1 className="about-h">About Us</h1>
          <p className="about-p">
            Our transportation division offers reliable and efficient solutions{" "}
            <br /> for all your transportation needs.
          </p>
        </div>
      </div>
      <div className="bty flex">
        <div>
          <button className="bty1" onClick={showname}>
            Qualified Team
          </button>
        </div>
        <div>
          <button className="bty1" onClick={showname2}>
            Our
          </button>
        </div>

        <div>
          {" "}
          <button className="bty1" onClick={showname3}>
            Qualified Team
          </button>
        </div>
      </div>
      <div className="p-div2 flex">
        <div>
          {show && (
            <p className="btyp1">
              {" "}
              As a leading college in Paris, we look to engage with our student
              beyond the conventional <br />
              design and development school relationship, <br />
              becoming a partner to the people and companies we work with
            </p>
          )}
        </div>
        <div>
          {show2 && (
            <p className="btyp1">
              {" "}
              As a leading college in Paris, we look to engage with our student
              beyond the conventional <br />
              design and development school relationship, <br />
              becoming a partner to the people and companies we work with
            </p>
          )}
        </div>
        <div>
          {show3 && (
            <p className="btyp1">
              {" "}
              As a leading college in Paris, we look to engage with our student
              beyond the conventional <br />
              design and development school relationship, <br />
              becoming a partner to the people and companies we work with
            </p>
          )}
        </div>
      </div>
      <ImageAbout />
      <Inspiration />
      <OurTeam />
      <Business />
      {/* <Footer /> */}
      <Footer />
    </div>
  );
}

export default About;
