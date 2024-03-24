import React from "react";
import "./Our Team.css";
function OurTeam() {
  return (
    <div>
      <h1 className="h-Fleet">Our Team</h1>
      <p style={{ color: "#A3B3C5", fontWeight: "bold" }} className="ourppp">
        As a leading college in Paris, we look to engage with our student beyond
        the conventional design <br /> and development school relationship,
        becoming a partner to the people.
      </p>
      <div className="flex our2">
        <div className="Ourteam">
          <img
            loading="lazy"
            decoding="async"
            width="400"
            height="350"
            src="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/team-1-jpg.webp"
            class="hidden"
            alt=""
            srcset="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/team-1-jpg.webp 667w, https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/team-1-300x224.webp 300w"
            sizes="(max-width: 667px) 100vw, 667px"
          ></img>
          <h3 style={{ color: "#003973", textAlign: "left" }}>
            Gilbert Hughes
          </h3>
          <p
            style={{
              color: "#A3B3C5",
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            Gilbert Hughes joined Hub Constructon in <br /> 1955 as an
            estimator/project manager, after <br /> previously working months as
            a laborer.
          </p>
        </div>
        <div className="Ourteam">
          <img
            loading="lazy"
            decoding="async"
            width="400"
            height="350"
            src="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/team-2-jpg.webp"
            class="hidden"
            alt=""
            srcset="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/team-2-jpg.webp 667w, https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/team-2-300x224.webp 300w"
            sizes="(max-width: 667px) 100vw, 667px"
          ></img>
          <h3 style={{ color: "#003973", textAlign: "left" }}>Erik Genie</h3>
          <p
            style={{
              color: "#A3B3C5",
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            Gilbert Hughes joined Hub Constructon in <br /> 1955 as an
            estimator/project manager, after <br /> previously working months as
            a laborer.
          </p>
        </div>
        <div className="Ourteam">
          <img
            loading="lazy"
            decoding="async"
            width="400"
            height="350"
            src="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/team-3-jpg.webp"
            class="hidden"
            alt=""
            srcset="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/team-3-jpg.webp 668w, https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/team-3-300x224.webp 300w"
            sizes="(max-width: 668px) 100vw, 668px"
          ></img>
          <h3 style={{ color: "#003973", textAlign: "left" }}>Mary Hughes</h3>
          <p
            style={{
              color: "#A3B3C5",
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            Gilbert Hughes joined Hub Constructon in <br /> 1955 as an
            estimator/project manager, after <br /> previously working months as
            a laborer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
