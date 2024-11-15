import './App.css'
import Banner from './Components/Banner/Banner'
import CurveLine from './Components/CurveLine/CurveLine'
import Header from './Components/Header/Header'
import TrendingNow from './Components/TrendingNow/TrendingNow'

function App() {

  return (
    <>
      <div className="main-wrapper">
        <Header/>
        <Banner/>
        <CurveLine/>
      </div>
        <TrendingNow/>

    </>
  )
}

export default App
