import React, { useState } from "react";
import Serviceapi from "./API/serviceapi";

export default function Services() {
  const [serviceData, setserviceData] = useState(Serviceapi);

  return (
    <>
      <section className="cervice-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            How to send money
          </h1>
          <div className="row">
            {serviceData.map((serviceEle) => {
              const {id ,logo, title, info} = serviceEle;
              return (
                <>
                  <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv" key={id}>
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">{info}</p>
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
