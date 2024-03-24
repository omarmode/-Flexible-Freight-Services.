import React from "react";
import "./ImageAbout.css";
function ImageAbout() {
  return (
    <div>
      <div className="flex oop">
        <div className="left">
          <img
            fetchpriority="high"
            decoding="async"
            width="500"
            height="650"
            src="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/portfolio-1-jpg.webp"
            class="attachment-full size-full wp-image-1090 ppo"
            alt=""
            srcset="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/portfolio-1-jpg.webp 1120w, https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/portfolio-1-260x300.webp 260w, https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/portfolio-1-888x1024.webp 888w"
          ></img>
        </div>
        <div className="right">
          <img
            decoding="async"
            width="800"
            height="300"
            src="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/portfolio-2-jpg.webp"
            class="attachment-full size-full wp-image-1091 ppo"
            alt=""
            srcset="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/portfolio-2-jpg.webp 1120w, https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/portfolio-2-300x167.webp 300w, https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/portfolio-2-1024x571.webp 1024w"
          ></img>
          <div className="flex oop">
            <div>
              <img
                decoding="async"
                width="400"
                height="350"
                src="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/portfolio-3-jpg.webp"
                class="attachment-full size-full wp-image-1092 ppo"
                alt=""
                srcset="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/portfolio-3-jpg.webp 540w, https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/portfolio-3-259x300.webp 259w"
              ></img>
            </div>
            <div>
              <img
                loading="lazy"
                decoding="async"
                width="400"
                height="350"
                src="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/portfolio-4-jpg.webp"
                class="attachment-full size-full wp-image-1093 ppo"
                alt=""
                srcset="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/portfolio-4-jpg.webp 540w, https://roadfreight.liquid-themes.com/wp-content/uploads/2023/11/portfolio-4-259x300.webp 259w"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageAbout;
