import nodemailer from 'nodemailer';

export async function POST(req) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASS,
    },
  });

  // Email to you (site owner)
  const ownerMailOptions = {
    from: `"MyPerfectHire" <${process.env.GMAIL_USER}>`,
    to: 'asifmahmud664@gmail.com',
    subject: `📨 New Contact Inquiry: ${data.subject}`,
    replyTo: data.email,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #481A54;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 10px; color: #555;">
          ${data.message.replace(/\n/g, "<br>")}
        </blockquote>
        <hr style="margin-top: 30px;">
        <p style="font-size: 12px; color: #999;">
          This message was sent via the contact form on <strong>MyPerfectHire.com</strong>
        </p>
      </div>
    `,
  };

  // Confirmation email to sender
  const senderMailOptions = {
    from: `"MyPerfectHire" <${process.env.GMAIL_USER}>`,
    to: data.email,
    subject: `Thank you for contacting MyPerfectHire!`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #481A54;">Thank you for reaching out, ${data.name}!</h2>
        <p>We’ve received your message and will get back to you as soon as possible.</p>
        <p><strong>Your Message:</strong></p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 10px; color: #555;">
          ${data.message.replace(/\n/g, "<br>")}
        </blockquote>
        <p>Meanwhile, feel free to explore our platform or contact us with any further questions.</p>
        <hr style="margin-top: 30px;">
        <p style="font-size: 12px; color: #999;">
          Sent by <strong>MyPerfectHire.com</strong>
        </p>
      </div>
    `,
  };

  try {
    // Send owner email
    await transporter.sendMail(ownerMailOptions);

    // Send confirmation email to sender
    await transporter.sendMail(senderMailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
