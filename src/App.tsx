import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navber from "./Components/Navber"
import StackItem from "./Components/StackItem"
import Technologies from "./Components/Technologies"
import TechnologyCard from "./Components/TechnologyCard"
import YourStack from "./Components/YourStack"



function App() {
  

  return (
    <> 
    
<div className="bg-gray-300 container mx-auto">
    <Navber></Navber>
    <hr />
    <Hero></Hero>
    <Technologies></Technologies>
    <TechnologyCard></TechnologyCard>
    <YourStack></YourStack>
    <StackItem></StackItem>
    <Footer></Footer>
    
 </div>
    </>
  )
}

export default App
