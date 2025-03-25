import Image from "next/image";
import SubHeader from "../universal/SubHeader";

export default function WhoAreWe() {
  return (
    <div className="flex flex-col mt-div items-center">
      <SubHeader
        header="Who Are We?"
        subheader="We are dedicated to providing the best stone craftsmanship."
      />
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-4 mt-16 xl:mt-content">
        <div className="flex justify-center lg:justify-start w-full">
          <Image
            className="w-[500px] h-[500px] object-cover shadow-xl"
            src="/assets/other/Onyx-Shower.jpg"
            alt=""
            width={700}
            height={700}
          />
        </div>
        <div className="flex justify-center w-full items-center leading-loose">
          <p className="max-lg:text-center">
            <span className="font-semibold ">Stones Village</span> is a renowned
            supplier, fabricator, and installer of high-quality stones including
            Granite, Marble, Onyx, Quartz, and Porcelain. Located in the vibrant
            community of Vaughan, Ontario, we have years of experience in
            transforming spaces with our exceptional craftsmanship and
            dedication to precision. Our expert team is committed to meeting the
            demands of clients across the country, providing meticulous
            measurements, seamless installations, and offering free, detailed
            quotations to kickstart your projects. At Stones Village, we bring
            your visions to life, ensuring each project is a testament to our
            mastery and passion for stone craftsmanship.
          </p>
        </div>
      </div>
    </div>
  );
}
