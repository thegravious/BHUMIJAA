
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// Allow your local Next.js website
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(express.json({ limit: "10kb" }));

// Gmail configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Check whether the backend is running
app.get("/", (req, res) => {
  res.status(200).send("BHUMIJAA email backend is running!");
});

// Receive contact form messages and email them
app.post("/api/contact", async (req, res) => {
  try {
    const { email, subject, message } = req.body || {};

    // Validate submitted fields
    if (
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string" ||
      !email.trim() ||
      !subject.trim() ||
      !message.trim() ||
      email.length > 254 ||
      subject.length > 200 ||
      message.length > 5000
    ) {
      return res.status(400).json({
        success: false,
        message: "Please enter valid details in all fields.",
      });
    }

    // Send the message to your configured Gmail account
    const info = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email.trim(),
      subject: `BHUMIJAA Contact: ${subject.trim()}`,
      text: `Customer email: ${email.trim()}\n\nMessage:\n${message.trim()}`,
    });

    console.log("Email sent successfully:", info.messageId);

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
} catch (error) {
  console.error("Email sending failed:", error);

  return res.status(500).json({
    success: false,
    message: "Unable to send your message.",
    debug: error.message,
    code: error.code || null,
  });
}
});

// Start the server
app.listen(PORT, () => {
  console.log(`BHUMIJAA backend running at http://localhost:${PORT}`);
});
