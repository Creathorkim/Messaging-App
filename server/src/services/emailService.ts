import transporter from "../config/nodeMailerConfig.js";
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

export const contactApp = async (
  from: string,
  subject: string,
  htmlContent: string
) => {
  try {
    await transporter.sendMail({
      from: from,
      to: `KimChat <${process.env.GMAIL_USER}>`,
      subject: subject,
      html: htmlContent,
    });
  } catch (err) {
    console.log(err);
  }
};
