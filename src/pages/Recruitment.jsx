import React from "react";
import JobList from "../components/job-list/JobList";
import JobApplicationForm from "../components/job-application/JobApplicationForm";
import ContactUs from "../components/contact-us/ContactUs";

export default function Recruitment() {
  return (
    <div>
      <JobList />
      <JobApplicationForm />
      <ContactUs />
    </div>
  );
}
