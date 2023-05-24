import React, { useState } from "react";
import howToUseApp from "./API/howTouse";

export default function Aboutus() {
  const [aboutData, setaboutData] = useState(howToUseApp);

  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-services-leftside-img">
              <img src="./Images/hero3.jpg" alt="about us img" />
            </div>
            {/* {1section right side data} */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                --AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className="main-heading">How to use the App</h1>
              {aboutData.map((curEle) => {
                const {id, title, info} = curEle
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title} </h2>
                        <p>
                          {info}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br></br>
              <div className="btn-style btn"> Learn more..</div>
            </div>
          </div>
        </div>
      </section>

      {/* -------second part of about section--- */}

      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            
            {/* {1section right side data} */}
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">
                --SUPPORT IN ANY LANGUAGE 
              </h3>
              <h1 className="main-heading">World cllass support is <br/> available 24/7</h1>
              {aboutData.map((curEle) => {
                const {id, title, info} = curEle
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title} </h2>
                        <p>
                          {info}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
              <br></br>
              <div className="btn-style btn"> Learn more..</div>
            </div>
            <div className="col-12 col-lg-5 our-services-rightside-img">
              <img src="./Images/hero3.jpg" alt="about us img" />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
