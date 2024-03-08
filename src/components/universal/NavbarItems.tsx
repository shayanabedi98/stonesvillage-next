import Link from "next/link";

type Props = {
  content: string;
  location: string;
};

export default function NavbarItems({ content, location }: Props) {
  return (
    <Link
      className="flex justify-center xl:min-w-28 lg:min-w-24 py-1 px-2 xl:text-lg lg:text-base rounded-md hover:text-bg-color-dark hover:bg-accent-color transition duration-200 ease-in-out"
      href={location}
    >
      {content}
    </Link>
  );
}
