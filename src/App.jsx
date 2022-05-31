import Home from "./components/Home"
import BeerProvider from "./context/BeerProvider"

function App() {
 
  return (
    <>
    <BeerProvider>
      <Home />
    </BeerProvider>
    </>
  )
}

export default App
