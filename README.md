# When_to_play <br/>
### Table of contents
1. [Required](#Required)  
2. [Installation](#Installation) 
3. [Styles](#Styles) 
4. [Changing accounts](#Changing-accounts) 


<a name="Required"/>

### Required:<br/>
Those you have to install:<br/>
- [Node.js](https://nodejs.org/) <br/>
- [npm](https://www.npmjs.org/) <br/><br/>

Those you can install manually or you will get them by npm install command later:<br/>
- [Express.js](https://expressjs.com/) <br/>
- [Pug.js](https://pugjs.org/api/getting-started.html) <br/>
- [TeemoJS](https://github.com/MingweiSamuel/TeemoJS) <br/>
- [Sass](https://sass-lang.com/install)

<a name="Installation"/>

### Installation
First clone repo
```node
git clone https://github.com/farelion/when_to_play.git
```
Get inside cloned folder
```node
cd when_to_play
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

<a name="Styles"/>

### Styles
`npm run sass` - compile sass to css <br /><br />
`npm run sass-watch` - compile sass to css and watch for changes 


<a name="Changing-accounts"/>

### Changing accounts

If you want to change accounts to yours, heres step by step guide<br />
1. [Riot API](https://developer.riotgames.com/api-methods/#summoner-v4/GET_getBySummonerName)<br />
2. Click on second GET - Get a summoner by summoner name<br />
3. Scroll down to PATH PARAMETERS and as value use your summoner name<br />
4. Choose region below<br />
5. Click EXECUTE REQUEST<br />
6. Under RESPONSE BODY you will see<br />
```node
...
"accountId": "YOUR_ACCOUNTID",
"id": "YOUR_ID",
...
```
<br />

7. Now you need change three values in app.js:<br />
- [Region](https://developer.riotgames.com/regional-endpoints.html) <br />
- AccountId <br />
- Id <br />

```node
  ... 
  api.get('YOUR_REGION_HERE', 'match.getMatchlist1','YOUR_ACCOUNTID_HERE') //accountid here
  .then(data=>{
    barcodeLastPlayed = data.matches[0].timestamp;
    barcodeDecay = barcodeLastPlayed + 2419200000;
    barcodeLastPlayed = new Date(barcodeLastPlayed).toLocaleString();
    barcodeDecay = new Date(barcodeDecay).toLocaleString();
    barcodePlatform = data.matches[0].platformId;
  })
  api.get('YOUR_REGION_HERE', 'summoner.getByAccountId', 'YOUR_ACCOUNTID_HERE') //accountid here
  .then(data =>{
    barcodeIconId = data.profileIconId;
    barcodeName = data.name;
  })
  api.get('YOUR_REGION_HERE', 'league.getLeagueEntriesForSummoner', 'YOUR_ID_HERE') //id here
    .then(data =>{
      barcodeRank = data[0].tier;
      barcodeDiv = data[0].rank;
      barcodeLp = data[0].leaguePoints;
      barcodeWins = data[0].wins;
      barcodeLosses = data[0].losses;
      barcodeWr = Math.floor(percentage(data[0].wins,data[0].wins+data[0].losses));
    })
   ...
```

<br />
