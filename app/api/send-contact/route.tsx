import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Create transporter for Gmail
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Email content for contact form
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: `New Fish Order Request - ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">
            🐟 New Fish Order Request
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Customer Information</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Email:</strong> ${formData.email || "Not provided"}</p>
          </div>

          <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Order Details</h3>
            <p><strong>Fish Type:</strong> ${formData.fishType}</p>
            <p><strong>Quantity:</strong> ${formData.quantity}</p>
            <p><strong>Preferred Delivery Date:</strong> ${formData.deliveryDate}</p>
          </div>

          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Delivery Information</h3>
            <p><strong>Address:</strong></p>
            <p style="white-space: pre-line;">${formData.address}</p>
          </div>

          ${
            formData.message
              ? `
          <div style="background-color: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Special Instructions</h3>
            <p style="white-space: pre-line;">${formData.message}</p>
          </div>
          `
              : ""
          }

          <div style="margin-top: 30px; padding: 20px; background-color: #f1f5f9; border-radius: 8px;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              This order was submitted through JEMJOD website. Please contact the customer within 2 hours to confirm availability and pricing.
            </p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Order request sent successfully" })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json({ success: false, message: "Failed to send order request" }, { status: 500 })
  }
}
