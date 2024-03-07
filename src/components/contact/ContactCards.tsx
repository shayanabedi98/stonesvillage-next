import { FaRegSquare } from "react-icons/fa6";

type Props = {
  name: string;
  position: string;
  number: string;
};

export default function ContactCards({ name, position, number }: Props) {
  return (
    <div className="flex relative shadow-xl w-[400px] py-10 text-bg-color-dark">
      <div className="w-14">
        <FaRegSquare className="text-accent-color text-4xl relative left-[10px]" />
      </div>
      <div className="flex flex-col gap-2">
        {" "}
        <h2 className="text-4xl font-semibold">{name}</h2>
        <p className="text-2xl ">{position}</p>
        <p className="text-xl">{number}</p>
      </div>
    </div>
  );
}