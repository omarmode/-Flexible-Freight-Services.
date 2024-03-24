import React, { useState } from "react";
import "./Inspiration.css";
function Inspiration() {
  const [show, setshow] = useState(false);
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
  const [buttn, setbuttn] = useState("all");

  return (
    <div className="flex Inspiration">
      <div className="left-Inspiration">
        <h2 className="left-hh">
          Inspiration, innovation, <br /> and opportunities.
        </h2>
        <p className="pp-left">
          Take advantage of the experiential-learning opportunities built <br />{" "}
          into many programs. You can work in labs on and off
        </p>
        <div className="btto">
          <button
            onClick={() => {
              showname();
              setbuttn("all");
            }}
            // className={buttn === "all" ? "active" : null}
            className={buttn === "all" ? "active2" : "btto2"}
          >
            Hub Business' Vision
          </button>
          {show && (
            <p className="btyp2">
              Take advantage of the experiential-learning opportunities built
              <br />
              into many programs. You can work in labs on and off
            </p>
          )}
        </div>
        <div className="btto">
          <button
            onClick={() => {
              showname2();
              setbuttn("css");
            }}
            className={buttn === "css" ? "active2" : "btto2"}
          >
            Hub Business' Vision
          </button>
          {show2 && (
            <p className="btyp2">
              Take advantage of the experiential-learning opportunities built
              <br />
              into many programs. You can work in labs on and off
            </p>
          )}
        </div>
        <div className="btto">
          <button
            onClick={() => {
              showname3();
              setbuttn("java");
            }}
            className={buttn === "java" ? "active2" : "btto2"}
          >
            Hub Business' Vision
          </button>
          {show3 && (
            <p className="btyp2">
              Take advantage of the experiential-learning opportunities built
              <br />
              into many programs. You can work in labs on and off
            </p>
          )}
        </div>
      </div>
      <div className="right-Inspiration">
        <img
          loading="lazy"
          decoding="async"
          width="450"
          height="500"
          src="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/accordion-jpg.webp"
          class="attachment-full size-full wp-image-983"
          alt=""
          srcset="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/accordion-jpg.webp 912w, https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/accordion-263x300.webp 263w, https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/accordion-898x1024.webp 898w"
          sizes="(max-width: 912px) 100vw, 912px"
        ></img>
      </div>
    </div>
  );
}

export default Inspiration;
