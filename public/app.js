const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

//Serves all the request which includes /img in the url from img folder
app.use('/img', express.static(__dirname + '/img'));
app.use('/views/css', express.static(__dirname + '/views/css'));
const TeemoJS = require('teemojs');
let api = TeemoJS('RIOT_API_KEY');

app.set('view engine', 'pug')


app.get('/', function (req, res) {
  // setting variables for data

// example1 - if u want to add more accounts use example1 for copy
  var example1LastPlayed = [];
  var example1Decay = [];
  var example1Rank = [];
  var example1Div = [];
  var example1Lp = [];
  var example1Wins = [];
  var example1Losses = [];
  var example1Wr = [];
  var example1IconId = [];
  var example1Name = [];
  var example1Platform = [];
//example2
  var example2LastPlayed = [];
  var example2Decay = [];
  var example2Rank = [];
  var example2Div = [];
  var example2Lp = [];
  var example2Wins = [];
  var example2Losses = [];
  var example2Wr = [];
  var example2IconId = [];
  var example2Name = [];
  var example2Platform = [];


  // function to create winratio
  function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
  } 


// get data from riot api into vars

 // example1 - data
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


  // set timer before last part - otherwise some data don't show up beacuse requests are async
  setTimeout(() => {

  // example2 - data 
    api.get('YOUR_REGION_HERE', 'summoner.getByAccountId', 'OUR_ACCOUNTID_HERE') //accountid here
    .then(data =>{
      example2IconId = data.profileIconId;
      example2Name = data.name;
    })
    api.get('YOUR_REGION_HERE', 'league.getLeagueEntriesForSummoner', 'YOUR_ID_HERE') //id here
    .then(data =>{
      example2Rank = data[0].tier;
      example2Div = data[0].rank;
      example2Lp = data[0].leaguePoints;
      example2Wins = data[0].wins;
      example2Losses = data[0].losses;
      example2Wr = Math.floor(percentage(data[0].wins,data[0].wins+data[0].losses)); //accountid here
    })

    api.get('YOUR_REGION_HERE', 'match.getMatchlist1','OUR_ACCOUNTID_HERE')
    .then(data=>{
      example2LastPlayed = data.matches[0].timestamp;
      example2Decay = example2LastPlayed + 2419200000;
      example2LastPlayed = new Date(example2LastPlayed).toLocaleString();
      example2Decay = new Date(example2Decay).toLocaleString();
      example2Platform = data.matches[0].platformId;

        // render all data from vars
        res.render('index', {
           // example1 -  data render
           example1Platform: example1Platform,
           example1Decay: example1Decay,
           example1IconId: example1IconId,
           example1LastPlayed: example1LastPlayed,
           example1Rank: example1Rank,
           example1Div: example1Div,
           example1Lp: example1Lp,
           example1Wins: example1Wins,
           example1Losses: example1Losses,
           example1Wr: example1Wr,
           example1Name: example1Name,
           // example2 - data render
           example2Platform: example2Platform,
           example2Decay: example2Decay,
           example2IconId: example2IconId,
           example2LastPlayed: example2LastPlayed,
           example2Rank: example2Rank,
           example2Div: example2Div,
           example2Lp: example2Lp,
           example2Wins: example2Wins,
           example2Losses: example2Losses,
           example2Wr: example2Wr,
           example2Name: example2Name
     });
    })
  }, 2000);
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))