import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (
      !name || typeof name !== 'string' ||
      !email || typeof email !== 'string' ||
      !message || typeof message !== 'string'
    ) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'hi@prasanth-kumar.dev',
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 24px; color: #0f0f0f;">
          <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #6b7280; margin: 0 0 24px;">
            New contact form submission — prasanth-kumar.dev
          </p>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 13px; color: #6b7280; width: 80px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 15px; color: #0f0f0f;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 13px; color: #6b7280;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-size: 15px;">
                <a href="mailto:${email}" style="color: #6c63ff; text-decoration: none;">${email}</a>
              </td>
            </tr>
          </table>

          <div style="background: #f8f8f8; border-radius: 8px; padding: 20px 24px;">
            <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; color: #6b7280; margin: 0 0 12px;">Message</p>
            <p style="font-size: 15px; line-height: 1.7; color: #0f0f0f; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 32px; font-size: 13px; color: #6b7280;">
            Reply directly to this email or at
            <a href="mailto:${email}" style="color: #6c63ff; text-decoration: none;">${email}</a>
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
