# When_to_play <br/>
### Required:<br/>
Those you have to install:<br/>
- [Node.js](https://nodejs.org/) <br/>
- [npm](https://www.npmjs.org/) <br/><br/>
Those you can install manually or you will get them by npm install command later:<br/>
- [Express.js](https://expressjs.com/) <br/>
- [Pug.js](https://pugjs.org/api/getting-started.html) <br/>
- [TeemoJS](https://github.com/MingweiSamuel/TeemoJS) <br/>
- [Sass](https://sass-lang.com/install)

### Installation
First clone repo
```node
git clone https://github.com/farelion/when_to_play.git
```
Then install all dependencies
```node
npm install
```
Put in your [RIOT API](https://developer.riotgames.com/) key

```node
let api = TeemoJS('RGAPI-KEY-HERE');
```
Add this code in node_modules\teemojs\defaultConfig.json
```node
"getMatchlist1": "/lol/match/v4/matchlists/by-account/%s?endIndex=1&beginIndex=0&",
```
So it looks like this
```node
...
"getMatchlist": "/lol/match/v4/matchlists/by-account/%s",
"getMatchlist1": "/lol/match/v4/matchlists/by-account/%s?endIndex=1&beginIndex=0&",
"getMatchTimeline": "/lol/match/v4/timelines/by-match/%s"
...
```      
<br />
We are ready to start app

```node
npm start
```
If everything worked you should see live app here [localhost:3000](http://localhost:3000/)
<br /><br />

### Styles
`npm run sass` - compile sass to css <br /><br />
`npm run sass-watch` - compile sass to css and watch for changes 


### Changing accounts

If you want to change accounts to yours, heres step by step guide<br />
1. [Riot API](https://developer.riotgames.com/api-methods/#summoner-v4/GET_getBySummonerName)<br />
2. Click on second GET - Get a summoner by summoner name<br />
3. Scroll down to PATH PARAMETERS and as value use your summoner name<br />
4. Choose region below<br />
5. Hit EXECUTE REQUEST<br />
6. Under RESPONSE BODY you will see<br />
```node
...
"accountId": "YOUR ACCOUNTID",
"id": "YOUR ID",
...
```
<br />
7. Now you need to put your accountid and id inside app.js

```node
  ... 
  api.get('eun1', 'match.getMatchlist1','YOUR_ACCOUNTID_HERE') //accountid here
  .then(data=>{
    uwumidLastPlayed = data.matches[0].timestamp;
    uwumidDecay = uwumidLastPlayed + 2419200000;
    uwumidLastPlayed = new Date(uwumidLastPlayed).toLocaleString();
    uwumidDecay = new Date(uwumidDecay).toLocaleString();
    uwumidPlatform = data.matches[0].platformId;
  })
  api.get('eun1', 'summoner.getByAccountId', 'YOUR_ACCOUNTID_HERE') //accountid here
  .then(data =>{
    uwumidIconId = data.profileIconId;
    uwumidName = data.name;
  })
  api.get('eun1', 'league.getLeagueEntriesForSummoner', 'YOUR_ID_HERE') //id here
    .then(data =>{
      uwumidRank = data[0].tier;
      uwumidDiv = data[0].rank;
      uwumidLp = data[0].leaguePoints;
      uwumidWins = data[0].wins;
      uwumidLosses = data[0].losses;
      uwumidWr = Math.floor(percentage(data[0].wins,data[0].wins+data[0].losses));
    })
   ...
```

<br />
