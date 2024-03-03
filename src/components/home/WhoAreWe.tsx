import Image from "next/image";

export default function WhoAreWe() {
  return (
    <div className="flex flex-col mt-div items-center">
      <h3 className="flex text-3xl">Who Are We?</h3>
      <div className="flex mt-content">
        <div className="flex justify-center items-center w-1/2 px-20 leading-loose">
          <p>
            <span className="font-semibold text-accent-color">Stones Village</span> is a renowned supplier, fabricator, and installer of
            high-quality stones including Granite, Marble, Onyx, Quartz, and
            Porcelain. Located in the vibrant community of Vaughan, Ontario, we
            have years of experience in transforming spaces with our exceptional
            craftsmanship and dedication to precision. Our expert team is
            committed to meeting the demands of clients across the country,
            providing meticulous measurements, seamless installations, and
            offering free, detailed quotations to kickstart your projects. At
            Stones Village, we bring your visions to life, ensuring each project
            is a testament to our mastery and passion for stone craftsmanship.
          </p>
        </div>
        <div className="flex justify-center w-1/2">
          <Image
            className="w-96 h-96 object-cover shadow-xl"
            src="/assets/other/Onyx-Shower.jpg"
            alt=""
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
