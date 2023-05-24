import React from "react";

export default function Contact() {
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br /> Sales Team.
                  </h1>
                  <p className="main-hero-para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <figure>
                    <img
                      src="./Images/hero1.jpg"
                      alt="hero"
                      className="img-fluid"
                    ></img>
                  </figure>
                </div>
                {/* right side contact form  */}

                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="First Name"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="Phone Number"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder=" Your Email"
                        />
                      </div>
                    </div>
                    <div className="row">
                        <div className="col-12 contact-input-feild">
                            <input
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder="Add Address"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 contact-input-feild">
                            <input
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder="Enter your message"
                            />
                        </div>
                    </div>
                    <div className="form-check form-checkbox-style">
                        <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        />
                        <label
                        class ="form-check-label"
                        className="main-hero-para">
                            I agree that pradeep pay may contact me at the 
                            email address or phone number above
                        </label>
                    </div>
                    <button type="submit" className="btn btn-style w-100">
                        submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
