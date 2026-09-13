// App.tsx


import Hero from "./Components/Hero";
import Technologies from "./Components/Technologies";
import YourStack from "./Components/YourStack";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <main className="container mx-auto px-4">
        <div className="flex flex-col gap-8 lg:flex-row">
          <Technologies />
          <YourStack />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;