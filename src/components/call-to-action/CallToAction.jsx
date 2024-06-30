import React, { useState } from "react";
import sendEmail from "../../utils/sendEmail";

export default function CallToAction() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await sendEmail(formData); // Call sendEmail function from sendEmail.js
      setSubmitStatus("success");
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="call-to-action">
      <div className="cta bg-blue-500 text-white p-8 text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-lg mb-4">
          Our team is standing by to help you with your next project.
        </p>
        <form
          className="flex flex-col justify-center px-[30%]"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Name"
            name="name" // Add name attribute
            value={formData.name} // Connect value to state
            onChange={handleChange} // Handle change
            className="mb-4 px-2 py-1 rounded-md text-black"
          />
          <input
            type="email"
            placeholder="Email"
            name="email" // Add name attribute
            value={formData.email} // Connect value to state
            onChange={handleChange} // Handle change
            className="mb-4 px-2 py-1 rounded-md text-black"
          />
          <textarea
            placeholder="Message"
            name="message" // Add name attribute
            value={formData.message} // Connect value to state
            onChange={handleChange} // Handle change
            className="mb-4 px-2 py-1 rounded-md text-black"
          />
          <button
            type="submit"
            disabled={submitting}
            className="button bg-white text-blue-500 py-2 px-4 rounded-lg shadow hover:bg-blue-500 hover:text-white hover:border-white hover:border-2"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        {/* Display success or error message */}
        {submitStatus === "success" && <p>Email sent successfully!</p>}
        {submitStatus === "error" && (
          <p>Failed to send email. Please try again later.</p>
        )}
      </div>
    </div>
  );
}
