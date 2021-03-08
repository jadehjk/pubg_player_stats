import './App.css';
import SearchBar from './SearchBar';
import env from "react-dotenv";

function App() {

    const headers = {'Authorization': `Bearer ${env.API_KEY}`, 'Accept': 'application/json'};
    const userURL = 'https://api.pubg.com/shards/steam/players/account.a241dc96881e432b96b5222ee959698b';
    const matchURL = 'https://api.pubg.com/shards/steam/matches/5dd7adb9-a80d-4b41-ac78-622f766366f7';
    const playersURL = 'https://api.pubg.com/shards/steam/players?filter[playerNames]='
    let playerIds = [];
    let commonMatches =[];

    const getPlayers = async (names) => {
        const playerNames = names.replace(/\s+/g, '');
        if (playerNames[playerNames.length - 1] === ',') {
            playerNames.slice(0, -1);
        }
        let url = `${playersURL}${playerNames}`;
        console.log(url);
        const response = await fetch(url, {headers: new Headers(headers)});
        const reader = await response.json();
        console.log(reader);
    }

    function handlePlayersSearch(names) {
        console.log('does this get called')
        console.log(names);
        getPlayers(names);
    }

    return (
    <div className="App">
        <header className="App-header">
            <SearchBar onPlayersSearch={handlePlayersSearch}/>
        </header>
    </div>
    );
}

export default App;
