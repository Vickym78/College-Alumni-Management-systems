import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { convert } from 'html-to-text';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false,  
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (to, subject, html) => {
  const text = convert(html, {
    wordwrap: 130
  });

  const mailOptions = {
    from: "TMSL ADMIN AIML",  // You can use any name or email for 'from'
    to,
    subject,
    text,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

export default sendEmail;
