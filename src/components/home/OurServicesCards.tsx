type Props = {
    image: JSX.Element
    title: string
    content: string
}

export default function OurServicesCards({image, title, content}: Props) {
  return (
    <div className="mt-content flex flex-col gap-8 px-6 py-10 rounded-md  bg-neutral-800 w-[20%] items-center shadow-2xl">
      <div className="text-5xl text-accent-color">{image}</div>
      <h4 className="text-2xl font-semibold">{title}</h4>
      <p>{content}</p>
    </div>
  );
}
