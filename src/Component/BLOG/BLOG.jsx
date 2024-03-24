import React from "react";
import "./BLOG.css";
function BLOG() {
  return (
    <div className="BLOG">
      <h5 className="p-SERVICES">BLOG</h5>
      <h1 className="h-Fleet" style={{ fontWeight: "bold" }}>
        Latest News
      </h1>
      <p style={{ color: "#A3B3C5", fontWeight: "bold" }}>
        Our transportation division offers reliable and efficient solutions for{" "}
        <br />
        all your transportation needs.
      </p>
      <div className="flex BLOG-flex">
        <div className="BLOG-img">
          <div className="img-BLOG">
            <img
              loading="lazy"
              decoding="async"
              width="400"
              height="300"
              src="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/10/blog-11.jpg"
              class="w-full rounded-inherit object-cover object-center wp-post-image"
              alt=""
              srcset="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/10/blog-11.jpg 2904w, https://roadfreight.liquid-themes.com/wp-content/uploads/2023/10/blog-11-300x191.jpg 300w, https://roadfreight.liquid-themes.com/wp-content/uploads/2023/10/blog-11-1024x652.jpg 1024w"
              sizes="(max-width: 2904px) 100vw, 2904px"
            ></img>
            <div className="flex span-img">
              <span className="span-age">5 months age</span>
              <span className="span-new"> new</span>
            </div>
            <h3 className="h3-BLOG">
              Changing customer demands
              <br />
              in the logistics industry
            </h3>
            <p className="p-BLOG">
              In an increasingly interconnected world, the <br /> term “global
              logistics” has
            </p>
          </div>
        </div>
        <div className="BLOG-img">
          <div className="img-BLOG">
            <img
              loading="lazy"
              decoding="async"
              width="400"
              height="300"
              src="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/10/blog-33.jpg"
              class="w-full rounded-inherit object-cover object-center wp-post-image"
              alt=""
              srcset="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/10/blog-33.jpg 2904w, https://roadfreight.liquid-themes.com/wp-content/uploads/2023/10/blog-33-300x191.jpg 300w, https://roadfreight.liquid-themes.com/wp-content/uploads/2023/10/blog-33-1024x652.jpg 1024w"
              sizes="(max-width: 2904px) 100vw, 2904px"
            ></img>
            <div className="flex span-img">
              <span className="span-age">5 months age</span>
              <span className="span-new"> new</span>
            </div>
            <h3 className="h3-BLOG">
              Green logistics and sustainable
              <br />
              transport solutions
            </h3>
            <p className="p-BLOG">
              In an increasingly interconnected world, the <br /> term “global
              logistics” has
            </p>
          </div>
        </div>
        <div className="BLOG-img">
          <div className="img-BLOG">
            <img
              loading="lazy"
              decoding="async"
              width="400"
              height="300"
              src="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/10/blog-22.jpg"
              class="w-full rounded-inherit object-cover object-center wp-post-image"
              alt=""
              srcset="https://roadfreight.liquid-themes.com/wp-content/uploads/2023/10/blog-22.jpg 2904w, https://roadfreight.liquid-themes.com/wp-content/uploads/2023/10/blog-22-300x191.jpg 300w, https://roadfreight.liquid-themes.com/wp-content/uploads/2023/10/blog-22-1024x652.jpg 1024w"
              sizes="(max-width: 2904px) 100vw, 2904px"
            ></img>
            <div className="flex span-img">
              <span className="span-age">5 months age</span>
              <span className="span-new"> new</span>
            </div>
            <h3 className="h3-BLOG">
              Crisis management strategies
              <br />
              in logistics in times of crisis
            </h3>
            <p className="p-BLOG">
              In an increasingly interconnected world, the <br /> term “global
              logistics” has
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BLOG;
