import Services from "@/components/about/Services";
import Hero from "@/components/universal/Hero";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stones Village | About Us",
  description:
    "Stones Village Inc. is a company that sells, supplies, fabricates, and installs stones for kitchens, bathrooms, vanity, and more. We have a wide variety of stones such as marble, onyx, quartz, and porcelain. We are located in the heart of the city of Vaughan, Ontario.",
  keywords:
    "stones, marble, onyx, porcelain, quartz, kitchen, vanity, countertops, slabs, supply, fabricate, install, vaughan",
};

export default function AboutUs() {
  return (
    <div className="bg-bg-color-light">
      <Hero content="About Us" />
      <div className="flex py-10 justify-center my-content max-lg:w-[90%] mx-auto">
        <Image
          src="/assets/other/sv.png"
          alt=""
          className="shadow-2xl rounded-md"
          width={1000}
          height={900}
        />
      </div>
      <div className="px-6 sm:px-16 lg:px-32 xl:px-44 flex flex-col items-center bg-bg-color-dark max-xl:text-center ">
        <div className="mt-content xl:mt-div flex flex-col-reverse xl:flex-row justify-center items-center gap-10 leading-loose">
          <div className="flex flex-col xl:w-1/2">
            <h2 className="text-accent-color text-2xl mb-6 font-semibold">
              From Dubai to Canada
            </h2>
            <p className="">
              Welcome to Stones Village, the epitome of excellence in stone
              supply, precise fabrication, bespoke design, and expert
              installation services. Initially founded in the lively city of
              Dubai in 2002 by the visionary Ahmad Abedi, post-graduate in
              Mining Engineering, we have since expanded our operations and
              proudly established our presence in Vaughan, Ontario, Canada since
              2017. Today, we are delighted to offer our exceptional services to
              clients across the entire country.
            </p>
            <br />
            <p>
              Building on our rich legacy and commitment to unparalleled
              quality, Stones Village is dedicated to fostering enduring
              relationships with architects, designers, contractors, and
              homeowners alike, ensuring each project we undertake is not only a
              testament to our craft but also a reflection of our clients&apos;
              visions brought to life with precision and elegance.
            </p>
          </div>
          <div
            className="h-72 w-72 md:h-[500px] md:w-[500px] shadow-md rounded-md"
            style={{
              backgroundImage: "url(/assets/inventory/onyx/red/svo-28.webp)",
              backgroundSize: "1200px",
              backgroundPosition: "-350px -110px",
            }}
          ></div>
        </div>

        <div className="mt-div flex flex-col-reverse xl:flex-row justify-center items-center gap-10 leading-loose">
          <div className="flex flex-col xl:w-1/2">
            <h2 className="text-accent-color text-2xl text-start mb-6 font-semibold max-xl:text-center">
              Our Mission
            </h2>
            <p className="">
              Founded by Ahmad Abedi, Stones Village is not just about providing
              stone services; it&apos;s a mission to transform everyday spaces
              into extraordinary art pieces. His passion for excellence,
              attention to the finest details, and unwavering commitment to
              customer satisfaction have been the guiding principles of our
              journey, propelling us to achieve new heights and earn a stellar
              reputation in the industry.
            </p>
            <br />
            <p>
              Specializing in luxurious Marble, Onyx, Granite, Quartz, and
              Porcelain, we bring a touch of elegance and timeless beauty to
              kitchens, bathrooms, and more, setting new benchmarks in
              craftsmanship and customer satisfaction in the stone industry.
            </p>
          </div>
          <div
            className="h-72 w-72 md:h-[500px] md:w-[500px] shadow-md rounded-md"
            style={{
              backgroundImage: "url(/assets/gallery/item22.jpg)",
              backgroundSize: "700px",
              backgroundPosition: "-180px -20px",
            }}
          ></div>
        </div>
        <div className="my-div">
          <h2 className="text-accent-color text-2xl font-semibold mb-content text-center">
            Services
          </h2>
          <div className="lg:px-10 xl:px-20 grid grid-cols-1 xl:grid-cols-2 gap-4 place-items-center">
            <Services
              title="Stone Supply"
              description="Stones Village offers a premium selection of Marble, Onyx, Granite, Quartz, and Porcelain, each chosen for its exceptional beauty and durability."
            />
            <Services
              title="Design"
              description="Our design team expertly guides you in selecting stones that perfectly enhance and complement your space."
            />
            <Services
              title="Fabrication"
              description="Our Denver Tecnika Elite 5 ensures precision in stone fabrication, delivering unmatched quality and detail."
            />
            <Services
              title="Installation"
              description="Our skilled installation team guarantees a flawless finish, focusing on precision from measurement to final placement for lasting beauty and quality."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
