import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
  const { name, email, message, number } = req.body;

  const user = process.env.EMAIL;
  const pass = process.env.PASSWORD;

  const data = {
    name,
    email,
    number,
    message,
  };

  const transport = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465, // Use 587 if you prefer to use STARTTLS encryption instead
    secure: true, // true for 465, false for other ports, indicates SSL
    auth: {
      user: user, // Your Zoho email address
      pass: pass, // Your Zoho password or app-specific password
    },
    // tls: {
    //   rejectUnauthorized: false, // Add this line to bypass the self-signed certificate error
    // },
  });

  try {
    const mail = await transport.sendMail({
      from: "customer.stonesvillage@gmail.com",
      to: "info@stonesvillage.net",
      replyTo: email,
      subject: `Contact Form Submission from ${name}`,
      html: `
        <h1>Stones Village</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        <p>Phone: ${number}</p>
        <p>Submitted on stonesvillage.net</p>
        `,
    });

    return res.status(200).json({ message: "Nice!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "oops!" });
  }
}
