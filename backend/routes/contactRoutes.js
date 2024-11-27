const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer"); // For sending emails

// POST contact form data
router.post("/", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  // Simple validation (Optional)
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Setup Nodemailer transporter for email
  const transporter = nodemailer.createTransport({
    service: "gmail", // Or your preferred email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL,
    subject: "New Contact Form Submission",
    text: `Message from: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Form submitted successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email. Try again later." });
  }
});

module.exports = router;
