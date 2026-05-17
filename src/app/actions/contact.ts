'use server';

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  // Basic validation
  if (!name || !email || !subject || !message) {
    return { error: 'Please fill in all fields.' };
  }

  try {
    // In a real application, you would integrate with an email service here (e.g., Resend, SendGrid, Nodemailer)
    console.log('Sending email:', { name, email, subject, message });
    
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Return success
    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { error: 'Something went wrong. Please try again later.' };
  }
}
