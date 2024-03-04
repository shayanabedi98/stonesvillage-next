import Link from "next/link";

type Props = {
  location: string;
  content: string;
};

export default function FooterItems({ location, content }: Props) {
  return (
    <Link className="py-1 px-2 rounded-md hover:text-bg-color-dark hover:bg-accent-color transition duration-200 ease-in-out" href={location}>
      {content}
    </Link>
  );
}
