import React from "react";

export default function Header() {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
              <h1 className="display2">
                online payment Made <br />
                Easy for you.
              </h1>
              <p className="main-hero-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in
              </p>
              <h3>get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-50 me-3 p-2 form-control-text"
                  placeholder="inter your email"
                />
                <div className="input-group-button">Get it now</div>
              </div>
            </div>
            {/* {------------------main heade right side----------------} */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center
            main-herosection-images order-md-first order-sm-first">
              <img src="./Images/hero1.jpg" alt="heroimg" className="img-fluid"/>
              <img src="./Images/hero2.jpg" alt="heroimg" className="img-fluid main-hero-img2"/>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
