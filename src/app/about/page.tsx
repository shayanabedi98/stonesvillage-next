import Services from "@/components/about/Services";
import Hero from "@/components/universal/Hero";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-bg-color-light">
      <Hero content="About Us" />
      <div className="flex justify-center my-content">
        <Image
          src="/assets/other/sv.png"
          alt=""
          className="shadow-2xl rounded-md"
          width={1000}
          height={900}
        />
      </div>
      <div className="px-44 flex flex-col items-center bg-bg-color-dark ">
        <div className="mt-div flex justify-center items-center gap-10 leading-loose">
          <div className="flex flex-col w-1/2">
            <h2 className="text-accent-color text-2xl mb-content font-semibold">
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
            className="h-[500px] w-[500px] shadow-md rounded-md"
            style={{
              backgroundImage: "url(/assets/inventory/onyx/red/svo-28.webp)",
              backgroundSize: "1200px",
              backgroundPosition: "-350px -110px",
            }}
          ></div>
        </div>

        <div className="mt-div flex justify-center items-center gap-10 leading-loose">
          <div className="flex flex-col w-1/2">
            <h2 className="text-accent-color text-2xl text-start mb-content font-semibold">
              Our Mission
            </h2>
            <p className="">
              Founded by Ahmad Abedi, Stones Village is not just about providing
              stone services; it&apos;s a mission to transform everyday spaces into
              extraordinary art pieces. His passion for excellence, attention to
              the finest details, and unwavering commitment to customer
              satisfaction have been the guiding principles of our journey,
              propelling us to achieve new heights and earn a stellar reputation
              in the industry.
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
            className="h-[500px] w-[500px] shadow-md rounded-md"
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
          <div className="px-20 grid grid-cols-2 gap-4 place-items-center">
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
