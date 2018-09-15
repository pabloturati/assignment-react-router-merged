import React, { Component } from "react";

class ContactInfo extends Component {
  render() {
    return (
      <section>
        <h4>Contact</h4>
        <div className="contactinfo">
          <a className="contactinfo__single" target="_blank">
            <i className="ion-ios-location-outline contactinfo__icon" />
            <span className="contactinfo__title">Austin, TX USA</span>
          </a>
          <a
            href="www.google.com"
            className="contactinfo__single"
            target="_blank"
          >
            <i className="ion-ios-email-outline contactinfo__icon" />
            <span className="contactinfo__title">
              mariasantiago1989@gmail.com
            </span>
          </a>
          <a
            href="www.google.com"
            className="contactinfo__single"
            target="_blank"
          >
            <i className="ion-social-github-outline contactinfo__icon" />
            <span className="contactinfo__title">devmaria</span>
          </a>
          <a
            href="www.google.com"
            className="contactinfo__single"
            target="_blank"
          >
            <i className="ion-social-linkedin-outline contactinfo__icon" />
            <span className="contactinfo__title">maria-x-santi</span>
          </a>
        </div>
      </section>
    );
  }
}

export default ContactInfo;
