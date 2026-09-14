import type { Technology } from "../Types/technology";

type StackItemProps = {
  technology: Technology;
  onRemove: (id: string) => void;
};

const StackItem = ({
  technology,
  onRemove,
}: StackItemProps) => {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3">

      <img
        src={technology.icon}
        alt={technology.name}
        className="h-10 w-10 object-contain"
      />

      <div className="min-w-0 flex-1">
        <h4 className="truncate font-semibold text-gray-800">
          {technology.name}
        </h4>

        <p className="text-xs text-gray-500">
          {technology.category}
        </p>
      </div>

      <button
        onClick={() => onRemove(technology.id)}
        className="rounded-full px-2 py-1 text-lg text-red-500 transition hover:bg-red-50"
        aria-label={`Remove ${technology.name}`}
      >
        ✕
      </button>
    </div>
  );
};

export default StackItem;