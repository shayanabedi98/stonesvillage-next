import { FaStar } from "react-icons/fa";
import Link from "next/link";
import SubHeader from "../universal/SubHeader";

export default function Reviews() {
  const reviews = [
    {
      name: "Nicolas",
      review:
        "I'm thrilled with the Quartz island, countertop, and backsplash Stones Village Inc. installed in my kitchen. Their team showed outstanding craftsmanship and attention to detail. The installation was efficient, and the end result is both beautiful and high-quality. Excellent customer service throughout. Highly recommended!",
    },
    {
      name: "Dela",
      review:
        "This team was outstanding. They were considerate about pricing, design, and material choices. The installation happened on the promised day, and they cleaned up thoroughly afterward. I'm very satisfied with their work and highly recommend them.",
    },
    {
      name: "Samuel",
      review:
        "I've worked with them on multiple projects that included kitchens, fireplaces, and bathrooms. Great fabricators, great suppliers, and great people. I look forward to keep working with them!",
    },
    {
      name: "Fady",
      review:
        "Ahmed helped me pick really nice colours/design for the kitchen countertop and backsplash. The men who came and installed everything were also very professional. Trustworthy and straightforward, I absolutely love our new kitchen :)",
    },
    {
      name: "Abolfazi",
      review:
        "They are professional, knowledgable and caring people, I enjoyed the way they professionally manage and do the works, I will be definitely working with them and refer them to all people who look for quality.",
    },
    {
      name: "Pouya",
      review:
        "Amazing customer service and beautiful work. I would definitely work with them again and I suggest them to everyone that is looking for countertop stone work.",
    },
  ];

  return (
    <div className="my-div flex flex-col items-center w-full">
      <SubHeader
        header="Testimonials"
        subheader="Here are some of the reviews from our satisfied customers."
      />
      <div className="mt-16 xl:mt-content bg-neutral-700 w-full flex gap-20 p-4 overflow-x-auto scrollbar-thin scrollbar-thumb-accent-color scrollbar-track-bg-color-dark">
        {reviews.map((item, index) => (
          <div
            className="flex flex-col justify-between bg-bg-color-light min-w-60 sm:min-w-96 p-5 gap-4 rounded-xl"
            key={index}
          >
            <div className="flex text-accent-color text-2xl gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h5 className="text-xs sm:text-sm leading-5 sm:leading-6">
              {item.review}
            </h5>
            <p className="text-sm">- {item.name}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col text-center items-center mt-16 xl:mt-content gap-10">
        <h4>
          At Stones Village, we value your feedback. Click to leave a review or
          to see more
        </h4>
        <Link
          target="_blank"
          href="https://www.google.com/search?q=stonesvillage&rlz=1C1CHBF_enCA968CA968&oq=ston&gs_lcrp=EgZjaHJvbWUqBggDEEUYOzIGCAAQRRg8MggIARBFGCcYOzIOCAIQRRgnGDsYgAQYigUyBggDEEUYOzIGCAQQRRg5MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMzAxNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x882b2fe60e9cb40b:0x2e2e691d0deb630e,1"
          className="self-center clear-start w-40 flex justify-center bg-neutral-900 text-bg-color-light py-4 px-6 rounded-full text-lg lg:hover:bg-neutral-800 transition"
        >
          <button>Review</button>
        </Link>
      </div>
    </div>
  );
}
