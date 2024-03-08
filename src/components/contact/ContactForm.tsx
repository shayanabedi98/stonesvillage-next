"use client";

import { useState } from "react";

type FormState = {
  name: string;
  number: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const target = e.target as typeof e.target & {
      timestamp: { value: string };
      name: { value: string };
      number: { value: string };
      email: { value: string };
      message: { value: string };
    };

    const data: FormState = {
      name: target.name.value,
      number: target.number.value,
      email: target.email.value,
      message: target.message.value,
    };

    if (!target.timestamp.value) {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        target.name.value = "";
        target.email.value = "";
        target.message.value = "";
        target.number.value = "";
        window.location.href = "/sent";
      } else if (!response.ok) {
        setSending(false);
        alert("Something went wrong, please try again or give us a call.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} action="">
      <div className="flex flex-col gap-6 items-center justify-center">
        <input type="text" name="timestamp" className="hidden text-bg-color-dark" aria-hidden="true" />
        <input
          min={3}
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-72 text-bg-color-dark sm:w-[400px] py-2 px-4 shadow-xl"
        />
        <input
          type="tel"
          min={9}
          name="number"
          autoComplete="off"
          placeholder="Phone Number"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          required
          className="w-72 text-bg-color-dark sm:w-[400px] py-2 px-4 shadow-xl"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-72 text-bg-color-dark sm:w-[400px] py-2 px-4 shadow-xl"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="w-72 sm:w-[400px] text-bg-color-dark h-[200px] py-2 px-4 shadow-xl"
        ></textarea>
      </div>
      <button
        type="submit"
        className="mt-6 bg-accent-color text-bg-color-dark w-72 sm:w-[400px] py-2 px-10 shadow-xl"
      >
        {sending ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
