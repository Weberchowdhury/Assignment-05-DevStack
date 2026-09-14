import type { Technology } from "../Types/technology";

type TechnologyCardProps = {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
};

const TechnologyCard = ({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) => {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-14 w-14 object-contain"
        />

        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-gray-800">
        {technology.name}
      </h3>

      <p className="mt-2 min-h-16 text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      <div className="mt-5 flex items-center justify-between gap-2">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {technology.category}
        </span>

        <span className="text-xs font-medium text-gray-500">
          {technology.difficulty}
        </span>
      </div>

      <div className="mt-auto flex items-center justify-between pt-5">
        <span className="font-semibold text-gray-700">
          ⭐ {technology.rating}
        </span>

        <button
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`rounded-full px-4 py-2 text-sm font-semibold text-white transition ${
            isAdded
              ? "cursor-not-allowed bg-gray-400"
              : "brand-button hover:opacity-90"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;