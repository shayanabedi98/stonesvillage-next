import OurServicesCards from "./OurServicesCards";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { PiTruckLight } from "react-icons/pi";
import { GiCircularSaw } from "react-icons/gi";
import { IoHammerOutline } from "react-icons/io5";

export default function OurServices() {
    return (
        <div className="mt-div text-center">
            <h3 className="text-3xl">Our Process</h3>
            <div className="flex justify-center gap-16">
                <OurServicesCards image={<LiaFileInvoiceDollarSolid />} content="Bring Your Vision to Life: Request a free, detailed quote today!" title="Free Quotation" />
                <OurServicesCards image={<PiTruckLight />} content="Large Selection: We possess a wide variety of stones that cater to your luxurious desires." title="Supply" />
                <OurServicesCards image={<GiCircularSaw />} content="Elegance Crafted: Precision fabrication transforms raw stones into exquisite masterpieces." title="Fabrication" />
                <OurServicesCards image={<IoHammerOutline />} content="Seamless Excellence: Trust in our precise and careful installation for a flawless stone finish." title="Installation" />
            </div>
        </div>
    )
}