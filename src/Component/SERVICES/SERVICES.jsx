import React from "react";
import "./SERVICES.css";

function SERVICES() {
  return (
    <div className="item">
      <h4 className="p-SERVICES">SERVICES</h4>
      <h1 className="h-SERVICES">Worldwide Shipping.</h1>
      <p style={{ color: "#A3B3C5" }}>
        Logistics Hub delivers world class infrastructure solutions to customers
        and <br /> stakeholders across a broad range of industry sectors
      </p>

      <section className="flex section-card ">
        <div className="div-icon">
          <i class="fa-brands fa-searchengin  icon"></i>
          <h3 className="h-icon">Shipping Service</h3>
          <p className="p-icon">
            We offer a variety of shipping options, <br /> including air, ocean,
            and ground <br /> transportation.
          </p>
          {/* <br /> */}
          <a href="" className="a-icon">
            learn more...
          </a>
        </div>
        <div className="div-icon">
          <i class="fa-solid fa-plane icon"></i>

          <h3 className="h-icon">Air Freight</h3>
          <p className="p-icon">
            We offer customized
            <br /> logistics solutions tailored to your specific needs.
          </p>
          <br />
          <a href="" className="a-icon">
            learn more...
          </a>
        </div>
        <div className="div-icon">
          {/* <i class="fa-regular fa-compas  icon"></i> */}
          <i class="fa-regular fa-compass  icon"></i>

          <h3 className="h-icon">Supply Chain</h3>
          <p className="p-icon">
            We can help you optimize your supply
            <br /> chain to improve efficiency and reduce
            <br /> costs.
          </p>
          <br />
          <a href="" className="a-icon">
            learn more...
          </a>
        </div>
        <div className="div-icon ">
          <i class="fa-solid fa-anchor icon"></i>

          <h3 className="h-icon ">Freight Management</h3>
          <p className="p-icon">
            Our team help you manage your <br /> freight operations <br /> more
            efficiently and effectively.
          </p>
          <a href="" className="a-icon">
            learn more...
          </a>
        </div>
        <div className="div-icon">
          <i class="fa-regular fa-calendar-check icon"></i>

          <h3 className="h-icon">Technology Solutions</h3>
          <p className="p-icon">
            We leverage the latest technology to <br /> provide real-time
            tracking and visibility <br /> to our customers.
          </p>
          <a href="" className="a-icon">
            learn more...
          </a>
        </div>
        <div className="div-icon">
          <i class="fa-solid fa-dumpster-fire icon"></i>
          <h4 className="h-icon">E-commerce Logistics</h4>
          <p className="p-icon">
            Our team help you manage your <br /> inventory, fulfill orders, and
            handle <br /> returns.
          </p>{" "}
          <br />
          <a href="" className="a-icon">
            learn more...
          </a>
        </div>
      </section>
    </div>
  );
}

export default SERVICES;
