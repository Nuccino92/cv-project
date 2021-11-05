import React, { Component } from "react";

class PersonalInformation extends Component {
  render() {
    return (
      <div className="personalInformationContainer">
        <h3>Personal Information</h3>
        <h4>Email & Phone number are recommended</h4>
        <form>
          <div className="pairContainer">
            <label htmlFor="firstName">First Name</label>
            <label htmlFor="lastName">Last Name</label>

            <input
              type="text"
              name="firstName"
              id="firstName"
              maxLength="11"
              placeholder="John"
              onChange={this.props.handleChange}
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              maxLength="11"
              placeholder="Doe"
              onChange={this.props.handleChange}
            />
          </div>

          <label htmlFor="profession" maxLength="10">
            Profession
          </label>
          <input
            type="text"
            name="profession"
            id="profession"
            placeholder="Carpenter"
            onChange={this.props.handleChange}
          />

          <div className="pairContainer">
            <label htmlFor="city">City</label>
            <label htmlFor="province">Province/State</label>

            <input
              type="text"
              name="city"
              id="city"
              placeholder="Toronto"
              onChange={this.props.handleChange}
            />
            <input
              type="text"
              name="province"
              id="province"
              placeholder="Ontario"
              onChange={this.props.handleChange}
            />
          </div>

          <div className="pairContainer">
            <label htmlFor="phone" name="phone">
              Phone Number
            </label>
            <label htmlFor="email" name="email">
              Email Adress
            </label>

            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="(123) 456-7899"
              onChange={this.props.handleChange}
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="John123@hotmail.com"
              onChange={this.props.handleChange}
            />
          </div>

          <label
            htmlFor="photo"
            name="photo"
            onChange={this.props.handleChange}
          >
            Photo
          </label>
          <input type="file" id="photo" />
        </form>
      </div>
    );
  }
}

export default PersonalInformation;
