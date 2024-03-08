type Props = {
  title: string;
  description: string;
};

export default function Services({ title, description }: Props) {
  return (
    <div className="bg-bg-color-light text-bg-color-dark text-center w-full xl:min-h-52 2xl:min-h-40 py-5 px-10">
      <h3 className="font-semibold text-center text-2xl mb-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
