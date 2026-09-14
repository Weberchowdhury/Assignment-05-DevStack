import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../Types/technology";

type TechnologiesProps = {
  selectedTechnologies: Technology[];
  onAdd: (technology: Technology) => void;
};

const Technologies = ({
  selectedTechnologies,
  onAdd,
}: TechnologiesProps) => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const isAdded = (id: string) => {
    return selectedTechnologies.some(
      (technology) => technology.id === id
    );
  };

  if (loading) {
    return (
      <section
        id="technologies"
        className="flex min-h-75 items-center justify-center"
      >
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-orange-500"></div>

          <p className="mt-4 font-medium text-gray-600">
            Loading technologies...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="technologies">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Explore Technologies
        </h2>

        <p className="mt-2 text-gray-500">
          Choose the technologies that fit your next project.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            onAdd={onAdd}
            isAdded={isAdded(technology.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default Technologies;