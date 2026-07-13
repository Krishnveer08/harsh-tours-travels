import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      email,
      pickup,
      destination,
      date,
      vehicle,
      message,
    } = body;

    const { error } = await resend.emails.send({
      from: "Harsh Tours <onboarding@resend.dev>",
      to: process.env.TO_EMAIL!,
      subject: `New Quote Request - ${name}`,
      html: `
        <h2>New Quote Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pickup:</strong> ${pickup}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Vehicle:</strong> ${vehicle}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json(error, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "Quote request sent successfully.",
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}