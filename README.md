# When_to_play <br/>
![alt text](https://github.com/Farelion/when_to_play/blob/master/preview/PIC_WHEN_TO_PLAY.png?raw=true)
#### Disclaimer <br/>
Keep in mind that its non-commercial project with purpose of learning new things, also was created to automatize some stuff that had to be done manually. Its pretty much my first contact with most of technologies used there (even writing this documentation). Feel free to msg me if you have any questions/tips.

### Table of contents
1. [Required](#Required)  
2. [Installation](#Installation) 
3. [Styles](#Styles) 
4. [Changing accounts](#Changing-accounts) 
5. [Known bugs](#Known-bugs) 

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
Put in your [RIOT API](https://developer.riotgames.com/) key (it expires after 24h)

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
   api.get('YOUR_REGION_HERE', 'match.getMatchlist1','YOUR_ACCOUNTID_HERE')
  .then(data=>{
    example1LastPlayed = data.matches[0].timestamp;
    example1Decay = example1LastPlayed + 2419200000;
    example1LastPlayed = new Date(example1LastPlayed).toLocaleString();
    example1Decay = new Date(example1Decay).toLocaleString();
    example1Platform = data.matches[0].platformId;
  })
  api.get('YOUR_REGION_HERE', 'summoner.getByAccountId', 'YOUR_ACCOUNTID_HERE')
  .then(data =>{
    example1IconId = data.profileIconId;
    example1Name = data.name;
  })
  api.get('YOUR_REGION_HERE', 'league.getLeagueEntriesForSummoner', 'YOUR_ID_HERE')
    .then(data =>{
      example1Rank = data[0].tier;
      example1Div = data[0].rank;
      example1Lp = data[0].leaguePoints;
      example1Wins = data[0].wins;
      example1Losses = data[0].losses;
      example1Wr = Math.floor(percentage(data[0].wins,data[0].wins+data[0].losses));
    })
   ...
```

<br />

<a name="Known-bugs"/>

### Known bugs

- Sometimes parts of data do not load. Try to refresh until you load all data. Might be tied to riot api refresh limit rate.
