import React from "react";
import "./Home.css";
import { Button, Container } from "react-bootstrap";
import Nav from "../Navbar/Nav";
import BLOG from "../BLOG/BLOG";
import Logo from "../logo/logo";
import SERVICES from "../SERVICES/SERVICES";
import Fleet from "../Fleet/Fleet";
import SERVICES1 from "../SERVICES1/SERVICES1";
import QUOTES from "../QUOTES/QUOTES";
import Footer from "../Footer/Footer";
function Home() {
  return (
    <div>
      <Nav />
      <div className="Home">
        <div className="Container">
          <h1 className="item-Home">
            Flexible <span className="sp">Freight</span> Services.
          </h1>
          <p className="item-p">
            Our transportation division offers reliable and efficient solutions
            for all your transportation needs.
          </p>
          <button className="btn  btt  flex" variant="outline-warning">
            Discaver
          </button>
        </div>
      </div>
      <Logo />
      <SERVICES />
      <Fleet />
      <SERVICES1 />
      <QUOTES />
      <BLOG />
      <Footer />
    </div>
  );
}

export default Home;
