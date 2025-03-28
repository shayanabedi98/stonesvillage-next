import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import Hero from "@/components/universal/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stones Village | Contact",
  description: "Stones Village Inc. is a company that sells, supplies, fabricates, and installs stones for kitchens, bathrooms, vanity, and more. We have a wide variety of stones such as marble, onyx, quartz, and porcelain. We are located in the heart of the city of Vaughan, Ontario.",
  keywords: "stones, marble, onyx, porcelain, quartz, kitchen, vanity, countertops, slabs, supply, fabricate, install, vaughan",
};

export default function Contact() {
  return (
    <div>
      <Hero content="Contact" />
      <div className="px-6 sm:px-16 lg:px-32 xl:px-44 flex flex-col items-center justify-center bg-bg-color-light">
        <div className="my-div flex flex-col xl:flex-row gap-10">
          <ContactCards
            name="Ahmad Abedi"
            number="437-237-5062"
            position="General Manager"
          />
          <ContactCards
            name="Ashkan Razzaghi"
            number="647-898-9826"
            position="Operations Manager"
          />
          <ContactCards
            name="Arty Abedi"
            number="647-890-4176"
            position="Assistant Manager"
          />
        </div>
        <div id="mail" className="relative top-[-100px]"></div>
      </div>
      <div className="px-6 text-bg-color-light sm:px-16 lg:px-32 xl:px-44 flex flex-col items-center justify-center bg-bg-color-dark">
        <div className="mt-content flex flex-col items-center justify-center gap-6">
          <h2 className="text-5xl text-center">Hey there! Let&apos;s Talk.</h2>
          <p className="text-2xl text-center">
            Send us any questions you have or just say Hello!
          </p>
        </div>
        <div className="mt-content">
          <ContactForm />
        </div>
        <div className="w-[90%] my-div">
          <iframe
            className="w-full h-[500px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d46063.2298670441!2d-79.5431827!3d43.8153578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2fe60e9cb40b%3A0x2e2e691d0deb630e!2sStones%20Village%20Inc.!5e0!3m2!1sen!2sca!4v1709769544965!5m2!1sen!2sca"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
