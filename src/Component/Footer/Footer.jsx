import React from "react";
import "./Footer.css";
// import Lottie from "lottie-react";
// import deveWalkAnimation from "../../Animation/Animation - 1709779835959.json";
function Footer() {
  return (
    <div className="Footer">
      <div className="flex Footer-flex">
        <div>
          <h1 className="h33">
            Looking for
            <span className="slider1">
              <div className="slider flex">
                <h1>alliance?</h1>
                <h1>partnership?</h1>
                <h1>collaboration?</h1>
              </div>
            </span>
          </h1>
        </div>
        <div> </div>
        <div></div>
      </div>
      <section className="section-bot flex">
        <div className="bot-section img-arrow">
          <img
            loading="lazy"
            width="300"
            height="300"
            color="#112439"
            src="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/10/World_map_blue_dots.svg"
            class="attachment-full size-full full-oo wp-image-759"
            alt=""
          ></img>
          <h3 style={{ color: "white" }}>Company</h3>
          <div className="flex arrow">
            <i class="fa-solid fa-circle-arrow-up"></i>
            <p>
              397 Mayflower Drive <br /> Freeport,London 11527
            </p>
          </div>
          <div className="flex arrow">
            <i class="fa-regular fa-envelope-open"></i>
            <p>logistics@bigload.com</p>
          </div>
          <div className="flex arrow">
            <i class="fa-solid fa-circle-arrow-up"></i>
            <p>
              397 Mayflower Drive <br /> Freeport,London 11527
            </p>
          </div>
        </div>
        <div className="bot-section  flex">
          <h3 style={{ color: "white" }}>Services</h3>
          <a href="" className="href">
            Business Consultation
          </a>
          <a href="" className="href">
            Growth Plan
          </a>
          <a href="" className="href">
            RD Service Plan
          </a>
          <a href="" className="href">
            Startup Investment
          </a>
        </div>
        <div className="bot-section flex">
          <h3 style={{ color: "white" }}>Platform</h3>
          <a href="" className="href">
            About Us
          </a>
          <a href="" className="href">
            Servies
          </a>
          <a href="" className="href">
            Contact
          </a>
        </div>
        <div className="bot-section flex">
          <h3 style={{ color: "white" }}>Platform</h3>
          <a href="" className="href">
            About Us
          </a>
          <a href="" className="href">
            Servies
          </a>
          <a href="" className="href">
            Contact
          </a>
        </div>
      </section>
    </div>
  );
}

export default Footer;
