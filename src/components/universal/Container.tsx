export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="relative w-full max-w-7xl max-2xl:px-4 mx-auto">{children}</div>;
}
