type Props = {
    image: JSX.Element
    title: string
    content: string
}

export default function OurServicesCards({image, title, content}: Props) {
  return (
    <div className="flex flex-col gap-8 px-6 py-10 rounded-md bg-neutral-800 w-full sm:max-w-[420px] sm:min-h-[360px] xl:min-h-[350px] items-center shadow-2xl">
      <div className="text-5xl text-accent-color">{image}</div>
      <h4 className="text-2xl font-semibold">{title}</h4>
      <p>{content}</p>
    </div>
  );
}
