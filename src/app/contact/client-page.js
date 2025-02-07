"use client";
import React, { useEffect, useState } from "react";
import { JWT_TOKEN, API_URL } from "../../utils/api"; // Adjust based on your actual import path

const ContactPage = () => {
  const [formFields, setFormFields] = useState([]);
  const [formData, setFormData] = useState({});
  const [submitText, setSubmitText] = useState("Submit");
  const [successMessage, setSuccessMessage] = useState(""); // State to handle success message

  useEffect(() => {
    const fetchContactPage = async () => {
      try {
        const apiUrl = `${API_URL}/contact-form-7/v1/contact-forms/37`; // log the full URL
        console.log("Fetching form from:", apiUrl);

        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${JWT_TOKEN}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Fetched form data:", data);

          // Parse form fields into the desired format
          const fields = data.properties.form.fields.map((field) => ({
            ...field,
            value: "", // Initialize value state for each field
          }));

          // Find and set the submit button text
          const submitButton = data.properties.form.fields.find(field => field.type === 'submit');
          if (submitButton) {
            setSubmitText(submitButton.raw_values[0]); // Set the button text to the raw value
          }

          setFormFields(fields);
        } else {
          console.error("Error fetching form:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching contact page:", error);
      }
    };

    fetchContactPage();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormData({
      ...formData,
      [name]: files[0], // Store only the first selected file
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Send the form data to your API (or handle it as per your setup)
    console.log("Form data submitted:", formData);

    // Simulating a successful form submission
    try {
      const apiUrl = `${API_URL}/contact-form-7/v1/contact-forms/37`; // Replace with the correct API endpoint for submission
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JWT_TOKEN}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Thank you for your message. It has been sent.");
        setFormData({}); // Optionally reset the form data after successful submission
      } else {
        setSuccessMessage("There was an issue sending your message. Please try again.");
      }
    } catch (error) {
      setSuccessMessage("There was an error with your submission. Please try again.");
      console.error("Error during form submission:", error);
    }
  };

  return (
    <div>
    {/* Hero Section */}
    <div className='hero-inner'>
      <h1 className="text-center my-4">Contact Us</h1>
      <p className="text-center">Please fill out the form below, and our team will get back to you as soon as possible.</p>
    </div>
    <div className="container py-5">
      <form onSubmit={handleSubmit} className="p-4 rounded">
        <div className="row">
        {formFields.map((field, index) => {
  const { name, type, raw_values } = field;

  // Split into two columns for medium screens and above
  const isFirstColumn = index % 2 === 0;
  const columnClass = isFirstColumn ? "col-md-6" : "col-md-6";

  return (
    <div key={name} className={columnClass}>
      <div className="mb-3">
        {/* Render label only if the field is not of type 'submit' */}
        {type !== "submit" && (
          <label htmlFor={name} className="form-label">
            {/* Check if it's the 'Category' or 'Service Required' field */}
            {name === "category" ? "Category" : name === "services-required" ? "Service Required" : field.labels && field.labels[0]}
          </label>
        )}

        {/* Handling different types of inputs */}
        {type === "text*" ||
        type === "email*" ||
        type === "tel*" ||
        type === "url*" ? (
          <input
            type={type === "email*" ? "email" : type}
            name={name}
            id={name}
            className="form-control"
            value={formData[name] || ""}
            onChange={handleChange}
            required
          />
        ) : type === "select*" ? (
          <>
            <select
              name={name}
              id={name}
              className="form-select"
              value={formData[name] || ""}
              onChange={handleChange}
              required
            >
              {raw_values &&
                raw_values.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          </>
        ) : type === "file*" ? (
          <input
            type="file"
            name={name}
            id={name}
            className="form-control"
            onChange={handleFileChange}
            required
          />
        ) : null}
      </div>
    </div>
  );
})}
        </div>

        {/* Display success message */}
        {successMessage && (
          <div className="alert alert-success text-center mt-4" role="alert">
            {successMessage}
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            {submitText} {/* Display the correct submit button text */}
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default ContactPage;