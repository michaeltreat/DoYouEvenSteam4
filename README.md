# DoYouEvenSteam4
4th iteration of DYES. Using this one to re-learn web-dev after 3 years working on low-level work.



## How to run:

Git clone
Navigate into directory
npm install


you will need an API key from steam API.
when you get one, create a .env file in the root directory.
enter `KEY=yourkey`

on the root directory, type npx nodemon BackEnd/app.js 
This will launch the server.

navigate to the browser and type localhost:3000/steamuser/steamname/killertreat

This should return the number 76561198009965051

That is the user's SteamID.

Now navigate to the browser and type localhost:3000/steamuser/steamid/76561198009965051

This should return a very large data set. This is the user's steam data.

