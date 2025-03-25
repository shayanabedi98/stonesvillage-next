import OurServicesCards from "./OurServicesCards";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { PiTruckLight } from "react-icons/pi";
import { GiCircularSaw } from "react-icons/gi";
import { IoHammerOutline } from "react-icons/io5";
import SubHeader from "../universal/SubHeader";

export default function OurServices() {
  return (
    <div className="mt-div text-center">
      <SubHeader
        header="Our Process"
        subheader="Discover our process, from quotes to installations."
      />
      <div className="mt-content flex gap-4 sm:gap-8 text-bg-color-light max-xl:grid max-xl:grid-cols-2 max-xl:place-items-center max-sm:grid-cols-1">
        <OurServicesCards
          image={<LiaFileInvoiceDollarSolid />}
          content="Bring Your Vision to Life: Request a free, detailed quote today!"
          title="Free Quotation"
        />
        <OurServicesCards
          image={<PiTruckLight />}
          content="Large Selection: We possess a wide variety of stones that cater to your luxurious desires."
          title="Supply"
        />
        <OurServicesCards
          image={<GiCircularSaw />}
          content="Elegance Crafted: Precision fabrication transforms raw stones into exquisite masterpieces."
          title="Fabrication"
        />
        <OurServicesCards
          image={<IoHammerOutline />}
          content="Seamless Excellence: Trust in our precise and careful installation for a flawless stone finish."
          title="Installation"
        />
      </div>
    </div>
  );
}
