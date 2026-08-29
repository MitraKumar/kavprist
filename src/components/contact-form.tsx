"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { submitContactForm } from "@/actions/contact-form-action"
import { toast } from "@/components/ui/toast"
import { RiSendPlane2Line } from "@remixicon/react"

export function ContactForm() {
  const [pending, setPending] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setPending(true);

    const formData = new FormData(form);
    try {
      await submitContactForm(formData);
      toast.add({
        title: "Message Sent",
        description: "Thank you! Your message has been sent.",
        type: "success",
      });
      form.reset();
    } catch (error) {
      console.error("Submission failed:", error);
      toast.add({
        title: "Submission Error",
        description: "There was a problem sending your message. Please try again.",
        type: "error",
      });
    } finally {
      setPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name" className="font-medium text-white">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
          className="bg-white border-black/10 text-black placeholder:text-black/40 focus-visible:ring-black/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-white font-medium">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          required
          className="bg-white border-black/10 text-black placeholder:text-black/40 focus-visible:ring-black/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className="text-white font-medium">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help you?"
          required
          rows={5}
          className="bg-white border-black/10 text-black placeholder:text-black/40 focus-visible:ring-black/20 resize-none"
        />
      </div>

      <Button type="submit" disabled={pending} className="font-medium py-2 cursor-pointer" variant="secondary" size="lg">
        {pending ? "Sending..." : "Submit"} <RiSendPlane2Line />
      </Button>
    </form>
  );
}