"use server"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  console.log("Contact Form Submission:", { name, email, subject, message });

  return { success: true };
}
