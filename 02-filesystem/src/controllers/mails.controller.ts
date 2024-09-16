import { FastifyReply, FastifyRequest } from "fastify";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export class MailController {
  private transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  sendMail = async (
    request: FastifyRequest,
    reply: FastifyReply,
  ) => {
    try {
      const options: Mail.Options = {
        from: `${process.env.EMAIL}`,
        to: ["yirsishertz02@gmail.com"],
        subject: "Hello",
        html: `<div style="background-color:#333;padding:18px; text-align:center;width:300px;">
                <h1 style="color: snow; font-weight: normal;">Welcome to 
                  <b>HzCode</b>
                </h1>

                <img src="https://cdn.pixabay.com/photo/2024/04/01/09/29/coffee-8668442_1280.jpg" alt="img" width="250">

                <a href="https://yirsis-serrano.com" style="display:block; margin-top:16px;text-decoration:none;color:snow;background-color:orange; padding:5px; text-align:center;border-radius:10px;">Open Link</a>
              </div>`,
      };

      this.transporter.sendMail(options);

      return { message: "Mail sent" };
    } catch (error) {
      reply.code(500).send({ message: error });
    }
  };
}
