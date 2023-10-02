import nodemailer from "nodemailer";

export async function POST(req, res) {
    require('dotenv').config()
    const data = await req.json();
    const { name, email, phone, course } = data;
    
  if (name && email && phone) {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.USER,
       
        pass: process.env.PASS,
      
      },
    });

    // Create the email content
    const mailOptions = {
      //   from: process.env.EMAIL_USER,
      from: "vikas2015041088@gmail.com",
      to: "vikas13114562@gmail.com", // Replace with the recipient's email address
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMobile Number: ${phone}\nCourse: ${course}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      return Response.json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      return Response.json({ message: "Email could not be sent" });
    }
  } else {
    return Response.json({ message: "405 not Allowed" }); // Method not allowed
  }
}


