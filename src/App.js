
import './App.css';
import Sidebar from './Components/Sidebar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marketplace from './Components/Marketplace';
import GameCenter from './Components/GameCenter';
import Worldmap from './Components/Worldmap';
import Realstate from './Components/Realstate';
import Game from './Components/Game';
import Partnership from './Components/Partnership';

function App() {
  
  
  return (
   <>
   <Sidebar/>
   <Marketplace/>
   <GameCenter/>
   <Worldmap/>
   <Realstate/>
   <Game/>
   <Partnership/>
   </>
  );
}

export default App;
