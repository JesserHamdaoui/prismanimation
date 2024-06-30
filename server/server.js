require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001; // Default to port 3001 if not specified in the environment

app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json()); // Support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Support URL-encoded bodies

// POST endpoint to send generic emails
app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Note: `secure` is false because we use STARTTLS on port 587
    auth: {
      user: process.env.EMAIL_USER, // Gmail username from environment variables
      pass: process.env.EMAIL_PASS, // Gmail password from environment variables
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Prismanimation Website Form",
    text: `Hello ${name},\n\nThank you for your message: ${message}`,
    html: `<p>Hello <strong>${name}</strong>,</p><p>Thank you for your message: ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Failed to send email", error);
    res.status(500).send("Failed to send email");
  }
});

// POST endpoint to send application emails
app.post("/api/submit-application", async (req, res) => {
  const { name, email, position, portfolioLink, experience, additionalInfo } =
    req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Job Application Received",
    text: `Hello ${name},\n\nThank you for applying for the position of ${position}. Here is what you submitted:\nPortfolio Link: ${portfolioLink}\nExperience: ${experience}\nAdditional Info: ${additionalInfo}`,
    html: `<p>Hello <strong>${name}</strong>,</p><p>Thank you for applying for the position of <strong>${position}</strong>. Here is what you submitted:</p><p>Portfolio Link: ${portfolioLink}</p><p>Experience: ${experience}</p><p>Additional Info: ${additionalInfo}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Application email sent successfully");
    res.status(200).send("Application email sent successfully");
  } catch (error) {
    console.error("Failed to send application email", error);
    res.status(500).send("Failed to send application email");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
