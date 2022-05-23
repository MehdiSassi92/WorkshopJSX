import './App.css';
import HPPavilionGamingFront from "./Images/HPPavilionGamingFront.jpg"
import YoutubeEmbed from './YoutubeEmbed';
import './styles.css';

function App() {

  let firstName = "Mehdi"
  let lastName = "Sassi"

  return (
    <div className='App'>

     <h1 className='titleRed'>{firstName + " " + lastName}</h1> 
     <div>
       <img style={{width:750}} src={HPPavilionGamingFront} alt="hpfront"/>
     </div> 
     <div>
       <img style={{width:750}} src="./Images/HPPAvilionGamingBack.jpg" alt="hpback"/>
     </div>
     <div>
       <YoutubeEmbed embedId="cBAF4mqhmNU"/>
     </div>

    </div>
  );
}

export default App;
