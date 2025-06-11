import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const body = await req.json();
    const { name, email, message } = body;

    console.log('Received email:', body);

    // Check if environment variables are loaded
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email credentials in environment variables.');
      return NextResponse.json(
        { message: 'Server email configuration error' },
        { status: 500 }
      );
    }

    // Create a transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use an App Password
      },
    });

    // Send confirmation email to site owner
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Admin receives the email
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // Send thank-you email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email, // User gets an auto-reply
      subject: 'Thank you for contacting us!',
      text: `Dear ${name},\n\nThank you for reaching out. We will get back to you shortly.\n\nBest regards,\nThe Support Team,\nCure PLus Hospital`,
    });

    return NextResponse.json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { message: 'Failed to send email', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
