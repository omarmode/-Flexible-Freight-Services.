import React from "react";
import "./SERVICES1.css";

function SERVICES1() {
  return (
    <div className="SERVICES1">
      <p className="p-SERVICES div-img-car">SERVICES</p>

      <section className="flex car">
        <div className="div-img-car">
          {/* <img
            loading="lazy"
            decoding="async"
            width="569"
            height="317"
            src="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/09/pins.svg"
            class="attachment-full size-full wp-image-356"
            alt=""
          ></img> */}
          <img
            loading="lazy"
            decoding="async"
            width="800"
            height="500"
            className="img-car"
            src="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/09/vehicle.png"
            class="attachment-full size-full wp-image-355"
            alt=""
            srcset="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/09/vehicle.png 1378w, https://roadfreight.liquid-themes.com/wp-content/uploads/2023/09/vehicle-300x128.png 300w, https://roadfreight.liquid-themes.com/wp-content/uploads/2023/09/vehicle-1024x437.png 1024w"
            sizes="(max-width: 1378px) 100vw, 1378px"
          ></img>
        </div>
        <div className="h1-car-div">
          <h1 className="h-car">
            Trusted <br /> experience.
          </h1>
          <p className="p-car">
            Our team has a wealth of experience in managing every <br /> aspect
            of the supply chain, <br /> from procurement to distribution. <br />{" "}
            We use advanced technology to optimize each <br /> step of the
            process, ensuring that our clients' <br /> goods are delivered on
            time and within budget.
          </p>
          <div className="flex cunt">
            <div>
              <h1 className="h1-car">300K</h1>
              <p className="p1-car">Transport</p>
            </div>
            <div>
              <h1 className="h1-car">150+</h1>
              <p className="p1-car">Fleet</p>
            </div>
            <div>
              <h1 className="h1-car">800+</h1>
              <p className="p1-car">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SERVICES1;
