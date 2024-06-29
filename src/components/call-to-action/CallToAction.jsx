import React from "react";

export default function CallToAction() {
  return (
    <div>
      <div className="cta bg-blue-500 text-white p-8 text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-lg mb-4">
          Our team is standing by to help you with your next project.
        </p>
        <form className="flex flex-col justify-center px-[30%]">
          <input
            type="text"
            placeholder="Name"
            className="mb-4 px-2 py-1 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="mb-4 px-2 py-1 rounded-md"
          />
          <textarea
            placeholder="Message"
            className="mb-4 px-2 py-1 rounded-md"
          />
          <button
            type="submit"
            className="button bg-white text-blue-500 py-2 px-4 rounded-lg shadow hover:bg-blue-500 hover:text-white hover:border-white hover:border-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
