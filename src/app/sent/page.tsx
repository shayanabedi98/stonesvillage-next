import Hero from "@/components/universal/Hero";
import Link from "next/link";

export default function Sent() {
  return (
    <div className="">
      <Hero content="Email Sent!" />
      <div className="bg-bg-color-light py-60 flex flex-col gap-10 items-center justify-center text-bg-color-dark">
        <h1 className=" text-5xl text-center">Thank you for your message!</h1>
        <p className="text-2xl text-center">
          We will get back to you as soon as possible.
        </p>
        <Link
          className=" text-2xl text-bg-color-dark bg-accent-color py-4 px-10 rounded-md"
          href="/contact"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}
