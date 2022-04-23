const express = require('express');
const axios = require('axios').default;
require('dotenv').config()

const port = 3000;
const KEY = process.env.key
const _API_ = 'https://api.steampowered.com'

const app = express();

app.get('/', (req, res) => {
    res.send('hello world!')
});

async function getSteamID(name){
    let response = await axios.get(`${_API_}/ISteamUser/ResolveVanityURL/v0001/?key=${KEY}&vanityurl=${name}`)
    return response.data.response.steamid
}

async function getSteamUserData(steamId){
    let response = await axios.get(`${_API_}/IPlayerService/GetOwnedGames/v0001/?key=${KEY}&steamid=${steamId}&format=json&include_appinfo=1`)
    return response.data
}


// Get user ID from vanity name
app.get('/steamuser/steamname/:name', (req, res) => {
    getSteamID(req.params.name)
    .then(steamId => res.send(steamId)) 
    .catch(err => res.send(err))
})

// real sample id :76561198009965051
// Get user data
app.get('/steamuser/steamid/:steamId', (req,res) =>{
    getSteamUserData(req.params.steamId)
    .then(userData => res.send(userData))
    .catch(err => res.send(err))
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})