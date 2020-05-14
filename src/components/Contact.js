import React from "react";
import { Bounce } from "react-reveal";

function Contact() {
  return (
    <div className="contact-body">
      <main id="contact">
        <h1 className="lg-heading">
          <span className="text-secondary">Contact</span> Me
        </h1>
        <h2 className="sm-heading">How to reach me...</h2>
        <Bounce left>
          <div className="boxes">
            <div>
              <span className="text-secondary">Email:</span>{" "}
              keddelyronjoz@gmail.com
            </div>

            <div>
              <span className="text-secondary">Phone:</span> (+254) 796867328
            </div>

            <div>
              <span className="text-secondary">Address:</span>
              Roysambu, Nairobi
            </div>
          </div>
        </Bounce>
      </main>
    </div>
  );
}

export default Contact;
