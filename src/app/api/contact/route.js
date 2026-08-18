import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: "Required fields are missing" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: subject || `Portfolio Contact - ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    return Response.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Nodemailer error:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to send email",
      },
      { status: 500 }
    );
  }
}