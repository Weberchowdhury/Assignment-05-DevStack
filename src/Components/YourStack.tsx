import type { Technology } from "../Types/technology";
import StackItem from "./StackItem";

type YourStackProps = {
  selectedTechnologies: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const YourStack = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="h-fit rounded-2xl border border-gray-200 bg-gray-50 p-5 lg:sticky lg:top-24">

      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl font-bold text-gray-800">
          Your Stack
        </h2>

        <span className="whitespace-nowrap text-sm font-medium text-gray-500">
          {selectedTechnologies.length} Selected
        </span>
      </div>

      {selectedTechnologies.length === 0 ? (
        <div className="py-12 text-center">
          <div className="text-4xl">🧰</div>

          <p className="mt-4 font-medium text-gray-600">
            No technologies selected yet.
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Add technologies from the list to build your stack.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-5 space-y-3">
            {selectedTechnologies.map((technology) => (
              <StackItem
                key={technology.id}
                technology={technology}
                onRemove={onRemove}
              />
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-full border border-red-300 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default YourStack;