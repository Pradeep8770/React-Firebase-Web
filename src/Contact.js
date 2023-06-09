import React from "react";
import { useState } from "react";
import { dataref } from "./Firebase";

export default function Contact() {
  const [userData, setuserData] = useState({
    firstName: "",
    lastNme: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  let name, value;
  const postuserData = (event) => {
    value = event.target.value;
    name = event.target.name;

    setuserData({ ...userData, [name]: value });
  };
  // console.log(userData)

  const SubmitData = async (submitEvent) => {
    submitEvent.preventDefault();
    const {firstName, lastNme, phone, email, address, message} = userData;
    console.log(userData)

    if(firstName || lastNme || phone ||  email || address ||  message){
      const res = dataref.ref().child("allData").push(userData)

    if(res){
      alert("data store")
      setuserData(
        {
          firstName: "",
          lastNme: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        }
      )
    }
    
    }else{
      alert("please fill the data")
    }

    
    
    // e.preventdefault();
    // const { firstName, lastNme, phone, email, address, message } = userData;
    // const res = await fetch(
    //   "https://react-firebase-web-d33be-default-rtdb.firebaseio.com/userDataRecord.json",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json;",
    //     },
    //     body: JSON.stringify({
    //       firstName,
    //       lastNme,
    //       phone,
    //       email,
    //       address,
    //       message,
    //     }),
    //   }
    // );
    // if(res){
    //   alert("Data stored")
    // }else{
    //   alert("please fill the data")
    // }
  };

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
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          value={userData.firstName}
                          onChange={postuserData}
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          value={userData.lastName}
                          onChange={postuserData}
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          value={userData.phone}
                          onChange={postuserData}
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          value={userData.email}
                          onChange={postuserData}
                          placeholder=" Your Email"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          value={userData.address}
                          onChange={postuserData}
                          placeholder="Add Address"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          value={userData.message}
                          onChange={postuserData}
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
                        class="form-check-label"
                        className="main-hero-para"
                      >
                        I agree that pradeep pay may contact me at the email
                        address or phone number above
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={SubmitData}
                    >
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
