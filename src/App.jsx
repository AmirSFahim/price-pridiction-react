

import './App.css'
import LineCharts from './Components/LineCharts/LineCharts'
// import DaisyNav from './Components/Daisy-Nav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
// import PriceOption from './Components/PriceOption/PriceOption'
import Priceoptions from './Components/PriceOptions/Priceoptions'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
     <Priceoptions></Priceoptions>
     <LineCharts></LineCharts>
    </>
  )
}

export default App
