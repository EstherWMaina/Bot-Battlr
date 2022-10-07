import React from "react";
import BotsPage from "./BotsPage";
import BotCollection from "./BotCollection";


const botAPI ='http://localhost:8002/bots'
const [bot, setBot] = useState([]);


useEffect(() => {
  fetch(botAPI)
  .then(res => res.json())
  .then(setBot)
}, [])

function App() {
  return (
    <div className="App">
      <BotsPage />
      <BotCollection  bot={bot}/>
    </div>
  );
}

export default App;

