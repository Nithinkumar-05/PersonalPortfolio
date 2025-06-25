import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate input using Zod
      const validatedData = insertContactMessageSchema.parse(req.body);
      const { name, email, message } = validatedData;
      

      const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.GOOGLE_GMAIL,
        pass: process.env.GOOGLE_PASS
      }
    });
      


      const mailOptions = {
  from: `"Portfolio Contact Form" <${process.env.GOOGLE_GMAIL}>`,
  to: process.env.GOOGLE_GMAIL,
  replyTo: email,
  subject: `📬 New Contact Message from ${name}`,
  text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // fallback for plain email readers
  html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
      <h2 style="color: #333;">🚀 New Portfolio Contact Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Message:</strong></p>
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
        <pre style="white-space: pre-wrap; font-size: 14px;">${message}</pre>
      </div>
      <p style="margin-top: 30px; font-size: 12px; color: #888;">You received this message from your portfolio contact form.</p>
    </div>
  `
};


      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });

    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input", errors: error.errors });
      }
      console.error("Email send error:", error);
      return res.status(500).json({ message: "Failed to send email"});
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
