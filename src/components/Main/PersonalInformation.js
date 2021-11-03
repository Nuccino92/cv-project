import React, { Component } from "react";

class PersonalInformation extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="personalInformationContainer">
        <h3>Personal Information</h3>
        <h4>Email & Phone number are recommended</h4>
        <form>
          <div className="pairContainer">
            <label htmlFor="firstName">First Name</label>
            <label htmlFor="lastName">Last Name</label>

            <input type="text" id="firstName" placeholder="John" />
            <input type="text" id="lastName" placeholder="Doe" />
          </div>

          <label htmlFor="profession">Profession</label>
          <input type="text" id="profession" placeholder="Carpenter" />

          <div className="pairContainer">
            <label htmlFor="city">City</label>
            <label htmlFor="province">Province/State</label>

            <input type="text" id="city" placeholder="Toronto" />
            <input type="text" id="province" placeholder="Ontario" />
          </div>

          <div className="pairContainer">
            <label htmlFor="phone">Phone Number</label>
            <label htmlFor="email">Email Adress</label>

            <input type="text" id="phone" placeholder="(123) 456-7899" />
            <input type="text" id="email" placeholder="Bob123@hotmail.com" />
          </div>

          <label htmlFor="photo">Photo</label>
          <input type="file" id="photo" />
        </form>
      </div>
    );
  }
}

export default PersonalInformation;
