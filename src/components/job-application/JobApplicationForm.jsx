import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import submitApplication from "../../utils/submitApplication";

export default function JobApplicationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [experience, setExperience] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = {
      name,
      email,
      position,
      portfolioLink,
      experience,
      additionalInfo,
    };

    try {
      await submitApplication(formData); // Call sendEmail function from sendEmail.js
      // Reset form after successful submission
      setName("");
      setEmail("");
      setPosition("");
      setPortfolioLink("");
      setExperience("");
      setAdditionalInfo("");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-[1200px] m-auto p-16 my-10 bg-blue-500 text-white rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Job Application Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-medium mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="position" className="text-lg font-medium mb-2">
            Position:
          </label>
          <select
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-4 py-2 text-black"
          >
            <option value="">Select a position</option>
            <option value="2D Artist">2D Artist</option>
            <option value="3D Artist">3D Artist</option>
            <option value="Front-end Developer">Front-end Developer</option>
            <option value="Photographer">Photographer</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="portfolioLink" className="text-lg font-medium mb-2">
            Portfolio Link:
          </label>
          <input
            type="text"
            id="portfolioLink"
            value={portfolioLink}
            onChange={(e) => setPortfolioLink(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="experience" className="text-lg font-medium mb-2">
            Experience:
          </label>
          <textarea
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-4 py-2 text-black"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="additionalInfo" className="text-lg font-medium mb-2">
            Additional Information:
          </label>
          <textarea
            id="additionalInfo"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 text-black"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="bg-blue-500 text-white rounded-md px-10 py-2 hover:bg-blue-600 border-2 border-white w-full "
        >
          <FontAwesomeIcon icon={faPaperPlane} className="mr-3" />
          Submit
        </button>
      </form>
    </div>
  );
}
