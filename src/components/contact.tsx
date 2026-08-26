"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section id="contact" className="w-full bg-white py-20 md:py-28 select-none">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="max-w-4xl text-left">
          
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-6 tracking-tight">
            Contact Us
          </h2>
          
          <p className="text-base text-zinc-800 font-medium mb-2">
            Connect with us via email at{" "}
            <a href="mailto:help@domain.com" className="text-[#eb7e0a] hover:underline">
              help@domain.com
            </a>
          </p>
          
          <p className="text-sm text-zinc-500 font-bold mb-8">
            OR
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                placeholder="Name"
                className="h-14 px-6 py-4 rounded-2xl border-zinc-300 text-zinc-900 placeholder:text-zinc-500 bg-white shadow-sm focus-visible:border-zinc-400 focus-visible:ring-zinc-400/20"
                required
              />
              <Input
                type="email"
                placeholder="Email"
                className="h-14 px-6 py-4 rounded-2xl border-zinc-300 text-zinc-900 placeholder:text-zinc-500 bg-white shadow-sm focus-visible:border-zinc-400 focus-visible:ring-zinc-400/20"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="tel"
                placeholder="Phone"
                className="h-14 px-6 py-4 rounded-2xl border-zinc-300 text-zinc-900 placeholder:text-zinc-500 bg-white shadow-sm focus-visible:border-zinc-400 focus-visible:ring-zinc-400/20"
              />
              <div className="hidden md:block" />
            </div>

            <Textarea
              placeholder="Contact"
              className="min-h-[180px] px-6 py-5 rounded-2xl border-zinc-300 text-zinc-900 placeholder:text-zinc-500 bg-white shadow-sm focus-visible:border-zinc-400 focus-visible:ring-zinc-400/20 resize-none"
              required
            />

            <div className="pt-2">
              <Button type="submit" variant="sketchy">
                Submit
              </Button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export { Contact };
