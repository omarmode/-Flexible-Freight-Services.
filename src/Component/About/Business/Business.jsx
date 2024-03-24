import React from "react";
import "./Business.css";
function Business() {
  return (
    <div className="Business">
      <p
        style={{
          color: "#003973",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        A deep commitment to diversity
      </p>
      <h2
        style={{
          color: "#003973",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "50px",
        }}
      >
        Business Partners
      </h2>
      <section className="flex g33">
        <div className="left333 flex">
          <div className="left2">
            <img
              src="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/partner-1-jpg.webp"
              alt=""
              className="img333"
            />
          </div>
          <div className="left2">
            <h5 style={{ color: "#003973" }}>Daniel James, Stripe</h5>
            <p>
              By enrolling in the Four Bear <br /> Program, UM guarantees you
              will <br /> graduate in four years with a <br /> bachelor’s
              degree. Discover the <br /> global city—filled with inspiration,
              <br />
              opportunities to explore.
            </p>
          </div>
        </div>
        <div className="right333 flex">
          <div className="right2">
            <img
              src="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/partner-2-jpg.webp"
              alt=""
              className="img333"
            />
          </div>
          <div className="right2">
            <h5 style={{ color: "#003973" }}>Daniel James, Stripe</h5>
            <p>
              By enrolling in the Four Bear <br /> Program, UM guarantees you
              will <br /> graduate in four years with a <br /> bachelor’s
              degree. Discover the <br /> global city—filled with inspiration,
              <br />
              opportunities to explore.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Business;
