import React from "react";

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const phoneValidator = /^\+?[1-9]\d{1,14}$/;
const panValidator = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
const aadharValidator = /^\d{12}$/;

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      passwordConfirmation: "",
      phoneNumber: "",
      country: "",
      city: "",
      panNumber: "",
      aadharNumber: "",
      firstNameError: "",
      lastNameError: "",
      emailAddressError: "",
      passwordError: "",
      passwordConfirmationError: "",
      phoneNumberError: "",
      countryError: "",
      cityError: "",
      panNumberError: "",
      aadharNumberError: "",
      isFormSubmitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateFirstName = this.validateFirstName.bind(this);
    this.validateLastName = this.validateLastName.bind(this);
    this.validateEmailAddress = this.validateEmailAddress.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(this);
    this.validatePhoneNumber = this.validatePhoneNumber.bind(this);
    this.validateCountry = this.validateCountry.bind(this);
    this.validateCity = this.validateCity.bind(this);
    this.validatePanNumber = this.validatePanNumber.bind(this);
    this.validateAadharNumber = this.validateAadharNumber.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleBlur(event) {
    const { name } = event.target;
    this.validateField(name);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formFields = [
      "firstName", "lastName", "emailAddress", "password", 
      "passwordConfirmation", "phoneNumber", "country", 
      "city", "panNumber", "aadharNumber"
    ];
    let isValid = true;
    formFields.forEach(field => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) this.setState({ isFormSubmitted: true });
    else this.setState({ isFormSubmitted: false });

    return this.state.isFormSubmitted;
  }

  validateField(name) {
    let isValid = false;
    switch(name) {
      case "firstName": isValid = this.validateFirstName(); break;
      case "lastName": isValid = this.validateLastName(); break;
      case "emailAddress": isValid = this.validateEmailAddress(); break;
      case "password": isValid = this.validatePassword(); break;
      case "passwordConfirmation": isValid = this.validatePasswordConfirmation(); break;
      case "phoneNumber": isValid = this.validatePhoneNumber(); break;
      case "country": isValid = this.validateCountry(); break;
      case "city": isValid = this.validateCity(); break;
      case "panNumber": isValid = this.validatePanNumber(); break;
      case "aadharNumber": isValid = this.validateAadharNumber(); break;
      default: break;
    }
    return isValid;
  }

  validateFirstName() {
    const { firstName } = this.state;
    const firstNameError = firstName.trim() === "" ? "First Name is required" : "";
    this.setState({ firstNameError });
    return firstNameError === "";
  }

  validateLastName() {
    const { lastName } = this.state;
    const lastNameError = lastName.trim() === "" ? "Last Name is required" : "";
    this.setState({ lastNameError });
    return lastNameError === "";
  }

  validateEmailAddress() {
    const { emailAddress } = this.state;
    let emailAddressError = "";
    if (emailAddress.trim() === "") emailAddressError = "Email Address is required";
    else if (!emailValidator.test(emailAddress)) emailAddressError = "Email is not valid";
    this.setState({ emailAddressError });
    return emailAddressError === "";
  }

  validatePassword() {
    const { password } = this.state;
    let passwordError = "";
    if (password.trim() === "") passwordError = "Password is required";
    else if (!passwordValidator.test(password)) passwordError = "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";
    this.setState({ passwordError });
    return passwordError === "";
  }

  validatePasswordConfirmation() {
    const { password, passwordConfirmation } = this.state;
    const passwordConfirmationError = password !== passwordConfirmation ? "Password does not match Confirmation" : "";
    this.setState({ passwordConfirmationError });
    return passwordConfirmationError === "";
  }

  validatePhoneNumber() {
    const { phoneNumber } = this.state;
    let phoneNumberError = "";
    if (phoneNumber.trim() === "") phoneNumberError = "Phone Number is required";
    else if (!phoneValidator.test(phoneNumber)) phoneNumberError = "Phone Number is not valid";
    this.setState({ phoneNumberError });
    return phoneNumberError === "";
  }

  validateCountry() {
    const { country } = this.state;
    const countryError = country.trim() === "" ? "Country is required" : "";
    this.setState({ countryError });
    return countryError === "";
  }

  validateCity() {
    const { city } = this.state;
    const cityError = city.trim() === "" ? "City is required" : "";
    this.setState({ cityError });
    return cityError === "";
  }

  validatePanNumber() {
    const { panNumber } = this.state;
    let panNumberError = "";
    if (panNumber.trim() === "") panNumberError = "PAN Number is required";
    else if (!panValidator.test(panNumber)) panNumberError = "PAN Number is not valid";
    this.setState({ panNumberError });
    return panNumberError === "";
  }

  validateAadharNumber() {
    const { aadharNumber } = this.state;
    let aadharNumberError = "";
    if (aadharNumber.trim() === "") aadharNumberError = "Aadhar Number is required";
    else if (!aadharValidator.test(aadharNumber)) aadharNumberError = "Aadhar Number is not valid";
    this.setState({ aadharNumberError });
    return aadharNumberError === "";
  }

  render() {
    return (
      <div className="main">
        <h3>SignUp Form</h3>
        {this.state.isFormSubmitted ? (
          <div className="details">
            <h3>Thanks for signing up, find your details below:</h3>
            <div>First Name: {this.state.firstName}</div>
            <div>Last Name: {this.state.lastName}</div>
            <div>Email Address: {this.state.emailAddress}</div>
            <div>Phone Number: {this.state.phoneNumber}</div>
            <div>Country: {this.state.country}</div>
            <div>City: {this.state.city}</div>
            <div>PAN Number: {this.state.panNumber}</div>
            <div>Aadhar Number: {this.state.aadharNumber}</div>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit} style={{textAlign: "center"}}>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.firstNameError && (
              <div className="errorMsg">{this.state.firstNameError}</div>
            )}
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.lastNameError && (
              <div className="errorMsg">{this.state.lastNameError}</div>
            )}
            <input
              type="email"
              placeholder="Email Address"
              name="emailAddress"
              value={this.state.emailAddress}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.emailAddressError && (
              <div className="errorMsg">{this.state.emailAddressError}</div>
            )}
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.passwordError && (
              <div className="errorMsg">{this.state.passwordError}</div>
            )}
            <input
              type="password"
              placeholder="Confirm Password"
              name="passwordConfirmation"
              value={this.state.passwordConfirmation}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.passwordConfirmationError && (
              <div className="errorMsg">{this.state.passwordConfirmationError}</div>
            )}
            <input
              type="text"
              placeholder="Phone Number (e.g., +1234567890)"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.phoneNumberError && (
              <div className="errorMsg">{this.state.phoneNumberError}</div>
            )}
            <select
              name="country"
              value={this.state.country}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              {/* Add more countries as needed */}
            </select>
            <br />
            {this.state.countryError && (
              <div className="errorMsg">{this.state.countryError}</div>
            )}
            <input
              type="text"
              placeholder="City"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.cityError && (
              <div className="errorMsg">{this.state.cityError}</div>
            )}
            <input
              type="text"
              placeholder="PAN Number"
              name="panNumber"
              value={this.state.panNumber}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.panNumberError && (
              <div className="errorMsg">{this.state.panNumberError}</div>
            )}
            <input
              type="text"
              placeholder="Aadhar Number"
              name="aadharNumber"
              value={this.state.aadharNumber}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.aadharNumberError && (
              <div className="errorMsg">{this.state.aadharNumberError}</div>
            )}
            <button type="submit">Signup</button>
          </form>
        )}
      </div>
    );
  }
}

export default FormComponent;