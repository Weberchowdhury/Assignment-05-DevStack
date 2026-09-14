import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Technologies from "./Components/Technologies";
import YourStack from "./Components/YourStack";
import Footer from "./Components/Footer";

import type { Technology } from "./Types/technology";

function App() {
  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Technology[]>([]);

  const handleAdd = (technology: Technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack.`
      );

      return;
    }

    setSelectedTechnologies([
      ...selectedTechnologies,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  const handleRemove = (id: string) => {
    const technology = selectedTechnologies.find(
      (item) => item.id === id
    );

    setSelectedTechnologies(
      selectedTechnologies.filter(
        (item) => item.id !== id
      )
    );

    if (technology) {
      toast.info(
        `${technology.name} removed from your stack.`
      );
    }
  };

  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);

    toast.info(
      "All technologies removed from your stack."
    );
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="container mx-auto grid gap-8 px-4 lg:grid-cols-[1fr_320px]">
          <Technologies
            selectedTechnologies={selectedTechnologies}
            onAdd={handleAdd}
          />

          <YourStack
            selectedTechnologies={selectedTechnologies}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </section>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    </>
  );
}

export default App;