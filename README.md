# When_to_play <br/>
[Node.js](https://nodejs.org/) <br/>
[npm](https://www.npmjs.org/) <br/>
[Express.js](https://expressjs.com/) <br/>
[Pug.js](https://pugjs.org/api/getting-started.html) <br/>
[TeemoJS](https://github.com/MingweiSamuel/TeemoJS) <br/>
[Sass](https://sass-lang.com/install)

First clone repo
```node
git clone https://github.com/farelion/when_to_play.git
```
Then install all dependencies
```node
npm install
```<br/>
Put in your [RIOT API](https://developer.riotgames.com/) key

```node
let api = TeemoJS('RGAPI-KEY-HERE');
```
<br />

Add this code in node_modules\teemojs\defaultConfig.json
```node
"getMatchlist1": "/lol/match/v4/matchlists/by-account/%s?endIndex=1&beginIndex=0&",
```
So it looks like this
```nodew
"getMatchlist": "/lol/match/v4/matchlists/by-account/%s",
"getMatchlist1": "/lol/match/v4/matchlists/by-account/%s?endIndex=1&beginIndex=0&",
"getMatchTimeline": "/lol/match/v4/timelines/by-match/%s"
```      
      
<br /><br />
We are ready to start app<br />

```node
npm start
```
If everything worked you should see live app here [localhost:3000](http://localhost:3000/)

### Styles
`npm run sass` - compile sass to css <br /><br />
`npm run sass-watch` - compile sass to css and watch for changes 
