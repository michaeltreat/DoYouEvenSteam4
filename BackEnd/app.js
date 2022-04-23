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

// Get user ID from vanity name
app.get('/steamuser/steamname/:name', (req, res) => {
    axios.get(`${_API_}/ISteamUser/ResolveVanityURL/v0001/?key=${KEY}&vanityurl=${req.params.name}`)
    .then( response => {
        res.send(response.data.response.steamid)
    })
})

// Get user data
app.get('/steamuser/steamid/:steamId', (req,res) =>{
    let userInput = req.params.userInput
    // need to validate user input
    // valid Sample id :76561198009965051
    sampleInput ='76561198009965051'

    axios.get(`${_API_}/IPlayerService/GetOwnedGames/v0001/?key=${KEY}&steamid=${sampleInput}&format=json&include_appinfo=1`)
    .then(response => {
        console.log(response.data)
        res.send(response.data)
    }).catch(error =>{
        res.send(error)
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})