export default function SubHeader({
  header,
  subheader,
}: {
  header: string;
  subheader: string;
}) {
  return (
    <>
      <h3 className="text-center font-semibold text-3xl">{header}</h3>
      <p className="mt-1 text-center">{subheader}</p>
    </>
  );
}
