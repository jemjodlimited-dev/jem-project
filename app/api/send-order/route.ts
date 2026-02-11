import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json()

    console.log("[v0] Order received:", orderData)

    // Format order items for email
    const itemsList = orderData.items
      .map(
        (item: any) =>
          `<tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.name}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">₦${parseInt(item.price.replace(/[^0-9]/g, "")).toLocaleString()}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">₦${(parseInt(item.price.replace(/[^0-9]/g, "")) * item.quantity).toLocaleString()}</td>
        </tr>`
      )
      .join("")

    const subtotal = orderData.totalPrice
    const tax = subtotal * 0.08
    const total = subtotal * 1.08

    // HTML email template for customer
    const customerEmailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px;">Order Confirmation</h2>
        
        <p>Dear ${orderData.customer.fullName},</p>
        
        <p>Thank you for your order! We've received your order and will process it shortly. Below are your order details:</p>
        
        <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #2c3e50;">Delivery Information</h3>
          <p><strong>Name:</strong> ${orderData.customer.fullName}</p>
          <p><strong>Email:</strong> ${orderData.customer.email}</p>
          <p><strong>Phone:</strong> ${orderData.customer.phone}</p>
          <p><strong>Address:</strong> ${orderData.customer.address}, ${orderData.customer.city}, ${orderData.customer.zipCode}, ${orderData.customer.country}</p>
        </div>
        
        <h3 style="color: #2c3e50; margin-top: 25px;">Order Items</h3>
        <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
          <thead>
            <tr style="background: #ecf0f1;">
              <th style="padding: 10px; text-align: left; border-bottom: 2px solid #bdc3c7;">Item</th>
              <th style="padding: 10px; text-align: center; border-bottom: 2px solid #bdc3c7;">Quantity</th>
              <th style="padding: 10px; text-align: right; border-bottom: 2px solid #bdc3c7;">Unit Price</th>
              <th style="padding: 10px; text-align: right; border-bottom: 2px solid #bdc3c7;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsList}
          </tbody>
        </table>
        
        <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0; text-align: right;">
          <p style="margin: 5px 0;"><strong>Subtotal:</strong> ₦${subtotal.toLocaleString()}</p>
          <p style="margin: 5px 0;"><strong>Tax (8%):</strong> ₦${tax.toFixed(0).toLocaleString()}</p>
          <p style="margin: 5px 0; font-size: 18px; color: #27ae60;"><strong>Total: ₦${total.toFixed(0).toLocaleString()}</strong></p>
        </div>
        
        <p style="color: #666; margin-top: 25px;">
          <strong>Order Date:</strong> ${new Date(orderData.orderDate).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        
        <p style="color: #666; margin-top: 20px;">
          If you have any questions about your order, please don't hesitate to contact us.
        </p>
        
        <p style="margin-top: 30px;">Best regards,<br><strong>JEMJOD Team</strong></p>
      </div>
    `

    // HTML email template for admin
    const adminEmailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #e74c3c; border-bottom: 3px solid #e74c3c; padding-bottom: 10px;">NEW ORDER RECEIVED</h2>
        
        <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #2c3e50;">Customer Details</h3>
          <p><strong>Name:</strong> ${orderData.customer.fullName}</p>
          <p><strong>Email:</strong> ${orderData.customer.email}</p>
          <p><strong>Phone:</strong> ${orderData.customer.phone}</p>
          <p><strong>Address:</strong> ${orderData.customer.address}, ${orderData.customer.city}, ${orderData.customer.zipCode}, ${orderData.customer.country}</p>
        </div>
        
        <h3 style="color: #2c3e50; margin-top: 25px;">Order Items</h3>
        <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
          <thead>
            <tr style="background: #ecf0f1;">
              <th style="padding: 10px; text-align: left; border-bottom: 2px solid #bdc3c7;">Item</th>
              <th style="padding: 10px; text-align: center; border-bottom: 2px solid #bdc3c7;">Quantity</th>
              <th style="padding: 10px; text-align: right; border-bottom: 2px solid #bdc3c7;">Unit Price</th>
              <th style="padding: 10px; text-align: right; border-bottom: 2px solid #bdc3c7;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsList}
          </tbody>
        </table>
        
        <div style="background: #ffe8e8; padding: 15px; border-radius: 5px; margin: 20px 0; text-align: right;">
          <p style="margin: 5px 0;"><strong>Subtotal:</strong> ₦${subtotal.toLocaleString()}</p>
          <p style="margin: 5px 0;"><strong>Tax (8%):</strong> ₦${tax.toFixed(0).toLocaleString()}</p>
          <p style="margin: 5px 0; font-size: 18px; color: #c0392b;"><strong>TOTAL: ₦${total.toFixed(0).toLocaleString()}</strong></p>
        </div>
        
        <p style="color: #666; margin-top: 25px;">
          <strong>Order Date:</strong> ${new Date(orderData.orderDate).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    `

    // For development: just log and return success
    // In production, integrate with EmailJS or your email service
    console.log("[v0] Customer email HTML generated")
    console.log("[v0] Admin email HTML generated")

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ 
      success: true, 
      message: "Order submitted successfully. Confirmation email will be sent shortly." 
    })
  } catch (error) {
    console.error("[v0] Error processing order:", error)
    return NextResponse.json(
      { success: false, message: "Failed to process order" },
      { status: 500 }
    )
  }
}
}
