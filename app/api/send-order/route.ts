import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json()

    const subtotal = orderData.totalPrice
    const tax = Math.round(subtotal * 0.08)
    const total = Math.round(subtotal * 1.08)

    // Format items as a simple list with line breaks for email templates
    const itemsText = orderData.items
      .map(
        (item: any) =>
          `${item.name} x${item.quantity} - ₦${(parseInt(item.price.replace(/[^0-9]/g, "")) * item.quantity).toLocaleString()}`
      )
      .join("\n")

    // Return individual data fields for EmailJS templates
    const emailData = {
      success: true,
      message: "Order submitted successfully. Confirmation email will be sent shortly.",
      // Customer Information
      customer_name: orderData.customer.fullName,
      customer_email: orderData.customer.email,
      customer_phone: orderData.customer.phone,
      customer_address: orderData.customer.address,
      customer_city: orderData.customer.city,
      customer_zip: orderData.customer.zipCode,
      customer_country: orderData.customer.country,
      // Order Details
      items_list: itemsText,
      subtotal: subtotal.toLocaleString(),
      tax: tax.toLocaleString(),
      total: total.toLocaleString(),
      order_date: new Date(orderData.orderDate).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      // Full address for convenience
      full_address: `${orderData.customer.address}, ${orderData.customer.city}, ${orderData.customer.zipCode}, ${orderData.customer.country}`,
    }

    return NextResponse.json(emailData)
  } catch (error) {
    console.error("[v0] Error processing order:", error)
    return NextResponse.json(
      { success: false, message: "Failed to process order" },
      { status: 500 }
    )
  }
}
