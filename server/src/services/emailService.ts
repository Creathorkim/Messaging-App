import transporter from "../config/nodeMailerConfig";
import dotenv from "dotenv";
dotenv.config();

export const sendEmail = (to: string, subject: string, htmlContent: string) => {
  try {
    const info = transporter.sendMail({
      from: `NextChat <${process.env.GMAIL_USER}>`,
      to: to,
      subject: subject,
      html: htmlContent,
    });
  } catch (err) {
    console.log(err);
  }
};
