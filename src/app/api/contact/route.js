import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    console.log("Contact request received");

    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          message: "Required fields are missing",
        },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Email environment variables are missing");

      return Response.json(
        {
          success: false,
          message: "Email server configuration is missing",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify Gmail SMTP connection
    await transporter.verify();

    console.log("SMTP connection successful");

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: subject || `Portfolio Contact - ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    console.log("Email sent successfully");

    return Response.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Nodemailer ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to send email",
        error: error.message,
      },
      { status: 500 }
    );
  }
}