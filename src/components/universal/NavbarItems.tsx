import Link from "next/link";

type Props = {
  content: string;
  location: string;
};

export default function NavbarItems({ content, location }: Props) {
  return (
    <Link
      className="flex justify-center min-w-28 py-1 px-2 text-lg rounded-md hover:text-bg-color-dark hover:bg-accent-color transition duration-200 ease-in-out"
      href={location}
    >
      {content}
    </Link>
  );
}
