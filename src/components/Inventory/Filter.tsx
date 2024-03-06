type Props = {
  content: string;
  value: string;
  handleFilter: (value: string) => void;
  condition: boolean;
};

export default function Filter({
  content,
  handleFilter,
  value,
  condition,
}: Props) {
  return (
    <button
      className={`${(condition ? "bg-accent-color text-bg-color-dark font-semibold" : "bg-bg-color-dark text-accent-color")} hover:bg-neutral-600 px-4 py-2 w-32 rounded-md`}
      onClick={() => handleFilter(value)}
    >
      {content}
    </button>
  );
}
