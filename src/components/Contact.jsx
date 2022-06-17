import React from "react";
const Contact = () => {
  return (
    <>
      <div className="container-fluid nav-bg bg-color:black">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="col-md-12 pt-5 pt-lg-0 order-2 order-1">
              <h1>Contact</h1>
              <br></br>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.914519042499!2d72.86702181482529!3d19.28608318696773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b10d5fe85af7%3A0xad096ac9aba6c0b8!2sSai%20Samarth%20ENT(Ear%2C%20Nose%2C%20Throat)%20Clinic%20Dr%20Rahul%20Patil!5e0!3m2!1sen!2sin!4v1655363191147!5m2!1sen!2sin"
                width={1250}
                height={450}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
