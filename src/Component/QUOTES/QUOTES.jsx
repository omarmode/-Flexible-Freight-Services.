import React from "react";
import "./QUOTES.css";

function QUOTES() {
  return (
    <div className="QUOTES">
      <div className="QUOTES-p">
        <h4 className="p-Fleet p-qq ">QUOTES</h4>
        <h1 className="QUOTES-h1">International Partners</h1>
        <p className="QUOTES-p1">
          Our transportation division offers reliable and efficient solutions
          for all your <br /> transportation needs.
        </p>
      </div>
      <div className="flex flex-card1">
        <div className="QUOTES-card">
          <div className="QUOTES-card-img">
            <img
              loading="lazy"
              decoding="async"
              width="81"
              height="64"
              src="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/09/client-3.svg"
              class="attachment-full size-full"
              alt=""
            ></img>
          </div>
          <p className="img-p-quotes">CTO of Bamboo Cooking</p>
          <p className="img-p-quotes">
            “I recently used BIGLOAD Logistics for a shipment of goods from our
            warehouse to a customer on the opposite coast, and I couldn'.
          </p>
        </div>
        <div className="QUOTES-card">
          {" "}
          <div className="QUOTES-card-img">
            <img
              loading="lazy"
              decoding="async"
              width="81"
              height="64"
              src="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/09/client-4.svg"
              class="attachment-full size-full"
              alt=""
            ></img>
          </div>
          <p className="img-p-quotes">CTO of Bamboo Cooking</p>
          <p className="img-p-quotes">
            “I recently used BIGLOAD Logistics for a shipment of goods from our
            warehouse to a customer on the opposite coast, and I couldn'.
          </p>
        </div>
        <div className="QUOTES-card">
          <div className="QUOTES-card-img">
            <img
              decoding="async"
              src="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/09/client-2.svg"
              title="client-2"
              alt="client-2"
              loading="lazy"
            ></img>
          </div>
          <p className="img-p-quotes">CTO of Bamboo Cooking</p>
          <p className="img-p-quotes">
            “I recently used BIGLOAD Logistics for a shipment of goods from our
            warehouse to a customer on the opposite coast, and I couldn'.
          </p>
        </div>
      </div>
    </div>
  );
}

export default QUOTES;
