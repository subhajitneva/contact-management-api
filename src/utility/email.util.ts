import * as nodemailer from 'nodemailer';

export async function sendEmail(to: string, subject: string, htmlContent: string): Promise<void> {
  try {
    // Set up your email credentials
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Set up your email message
    const mailOptions = {
      from: process.env.EMAIL_FROM, // Sender email address
      to: to, // Recipient email address
      subject: subject, // Email subject
      html: htmlContent, // Email content in HTML format
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error occurred while sending email:', error);
  }
}