import React, { useState } from "react";
import workapis from "./API/workApi";

export default function Howitwork() {
  const [workapi, setworkapi] = useState(workapis);
  console.log(workapi);

  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center"> how does it work</h1>
          <div className="row">
            {workapi.map((curlEle) => {
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    <i className={`fontawesome-style ${curlEle.logo}`} ></i>
                    <h2 className="sub-heading">{curlEle.title}</h2>
                    <p className="main-hero-para w-100">
                      {curlEle.info}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
