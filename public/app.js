const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

//Serves all the request which includes /images in the url from Images folder
app.use('/img', express.static(__dirname + '/img'));
app.use('/views/css', express.static(__dirname + '/views/css'));
const TeemoJS = require('teemojs');
let api = TeemoJS('RIOT_API_KEY');

app.set('view engine', 'pug')


app.get('/', function (req, res) {
  // setting variables for data

  // uwu mid - eune1
  var uwumidLastPlayed = [];
  var uwumidDecay = [];
  var uwumidRank = [];
  var uwumidDiv = [];
  var uwumidLp = [];
  var uwumidWins = [];
  var uwumidLosses = [];
  var uwumidWr = [];
  var uwumidIconId = [];
  var uwumidName = [];
  var uwumidPlatform = [];
// fffarelll - eune2
  var fffarelllLastPlayed = [];
  var fffarelllDecay = [];
  var fffarelllRank = [];
  var fffarelllDiv = [];
  var fffarelllLp = [];
  var fffarelllWins = [];
  var fffarelllLosses = [];
  var fffarelllWr = [];
  var fffarelllIconId = [];
  var fffarelllName = [];
  var fffarelllPlatform = [];
// barcode - eune3
  var barcodeLastPlayed = [];
  var barcodeDecay = [];
  var barcodeRank = [];
  var barcodeDiv = [];
  var barcodeLp = [];
  var barcodeWins = [];
  var barcodeLosses = [];
  var barcodeWr = [];
  var barcodeIconId = [];
  var barcodeName = [];
  var barcodePlatform = [];
// farel - euw1
  var farelLastPlayed = [];
  var farelDecay = [];
  var farelRank = [];
  var farelDiv = [];
  var farelLp = [];
  var farelWins = [];
  var farelLosses = [];
  var farelWr = [];
  var farelIconId = [];
  var farelName = [];
  var farelPlatform = [];
//adbutap - euw2
  var adcbutapLastPlayed = [];
  var adcbutapDecay = [];
  var adcbutapRank = [];
  var adcbutapDiv = [];
  var adcbutapLp = [];
  var adcbutapWins = [];
  var adcbutapLosses = [];
  var adcbutapWr = [];
  var adcbutapIconId = [];
  var adcbutapName = [];
  var adcbutapPlatform = [];


  // function to create winratio
  function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
  } 


// get data from riot api into vars

  // uwu mid - eune1 - data 
  api.get('eun1', 'match.getMatchlist1','JEnMtbssFeaJMjfzmT64odSC-__AG4BvvCU7ss22Do0rbQ')
  .then(data=>{
    uwumidLastPlayed = data.matches[0].timestamp;
    uwumidDecay = uwumidLastPlayed + 2419200000;
    uwumidLastPlayed = new Date(uwumidLastPlayed).toLocaleString();
    uwumidDecay = new Date(uwumidDecay).toLocaleString();
    uwumidPlatform = data.matches[0].platformId;
  })
  api.get('eun1', 'summoner.getByAccountId', 'JEnMtbssFeaJMjfzmT64odSC-__AG4BvvCU7ss22Do0rbQ')
  .then(data =>{
    uwumidIconId = data.profileIconId;
    uwumidName = data.name;
  })
  api.get('eun1', 'league.getLeagueEntriesForSummoner', 'qRN6L8wFLPaL-CiXMHPzne4yOyz_unlhs4Q1j-8BqPeYaa0')
    .then(data =>{
      uwumidRank = data[0].tier;
      uwumidDiv = data[0].rank;
      uwumidLp = data[0].leaguePoints;
      uwumidWins = data[0].wins;
      uwumidLosses = data[0].losses;
      uwumidWr = Math.floor(percentage(data[0].wins,data[0].wins+data[0].losses));
    })
  

  // fffarelll - eune2 - data 
  api.get('eun1', 'match.getMatchlist1','hf_JRYJHE9Wc5rf9uBizH5XvKcz9v-VrYjqHFlbAckszPss')
  .then(data=>{
    fffarelllLastPlayed = data.matches[0].timestamp;
    fffarelllDecay = fffarelllLastPlayed + 2419200000;
    fffarelllLastPlayed = new Date(fffarelllLastPlayed).toLocaleString();
    fffarelllDecay = new Date(fffarelllDecay).toLocaleString();
    fffarelllPlatform = data.matches[0].platformId;
  })
  api.get('eun1', 'summoner.getByAccountId', 'hf_JRYJHE9Wc5rf9uBizH5XvKcz9v-VrYjqHFlbAckszPss')
  .then(data =>{
    fffarelllIconId = data.profileIconId;
    fffarelllName = data.name;
  })
  api.get('eun1', 'league.getLeagueEntriesForSummoner', 'kISXQwAoMgRTYX6gSb5DxOFHlQLolNGosNgw6a3iQSsES7c')
    .then(data =>{
      fffarelllRank = data[0].tier;
      fffarelllDiv = data[0].rank;
      fffarelllLp = data[0].leaguePoints;
      fffarelllWins = data[0].wins;
      fffarelllLosses = data[0].losses;
      fffarelllWr = Math.floor(percentage(data[0].wins,data[0].wins+data[0].losses));
    })


 // barcode - eune3 - data      "accountId": "cFrsl9J4iu4EALg5IwTHo1gNm7U1aQ8tUAKPtA4HlvHHBO3RObnP-UN2",  "id": "mpTDbm9HX5xzPBlrWQcc0wFkfxo9QfTDEhN5Tpep-ehzgxo",
  api.get('eun1', 'match.getMatchlist1','cFrsl9J4iu4EALg5IwTHo1gNm7U1aQ8tUAKPtA4HlvHHBO3RObnP-UN2')
  .then(data=>{
    barcodeLastPlayed = data.matches[0].timestamp;
    barcodeDecay = barcodeLastPlayed + 2419200000;
    barcodeLastPlayed = new Date(barcodeLastPlayed).toLocaleString();
    barcodeDecay = new Date(barcodeDecay).toLocaleString();
    barcodePlatform = data.matches[0].platformId;
  })
  api.get('eun1', 'summoner.getByAccountId', 'cFrsl9J4iu4EALg5IwTHo1gNm7U1aQ8tUAKPtA4HlvHHBO3RObnP-UN2')
  .then(data =>{
    barcodeIconId = data.profileIconId;
    barcodeName = data.name;
  })
  api.get('eun1', 'league.getLeagueEntriesForSummoner', 'mpTDbm9HX5xzPBlrWQcc0wFkfxo9QfTDEhN5Tpep-ehzgxo')
    .then(data =>{
      barcodeRank = data[0].tier;
      barcodeDiv = data[0].rank;
      barcodeLp = data[0].leaguePoints;
      barcodeWins = data[0].wins;
      barcodeLosses = data[0].losses;
      barcodeWr = Math.floor(percentage(data[0].wins,data[0].wins+data[0].losses));
    })


 // farel - euw1 - data 
  api.get('euw1', 'match.getMatchlist1','n_JdJ7QK-C74C0efu6rBfDO1naQO3aDd3w46Ip79ba5FL_0')
  .then(data=>{
    farelLastPlayed = data.matches[0].timestamp;
    farelDecay = farelLastPlayed + 2419200000;
    farelLastPlayed = new Date(farelLastPlayed).toLocaleString();
    farelDecay = new Date(farelDecay).toLocaleString();
    farelPlatform = data.matches[0].platformId;
  })
  api.get('euw1', 'summoner.getByAccountId', 'n_JdJ7QK-C74C0efu6rBfDO1naQO3aDd3w46Ip79ba5FL_0')
  .then(data =>{
    farelIconId = data.profileIconId;
    farelName = data.name;
  })
  api.get('euw1', 'league.getLeagueEntriesForSummoner', 'UWPZgVdy9FzegiTLmFPdMV0ZpGqgYOrVHkBr-Xexj4lqo2M')
    .then(data =>{
      farelRank = data[0].tier;
      farelDiv = data[0].rank;
      farelLp = data[0].leaguePoints;
      farelWins = data[0].wins;
      farelLosses = data[0].losses;
      farelWr = Math.floor(percentage(data[0].wins,data[0].wins+data[0].losses));
    })


  // set timer before last part - otherwise some data don't show up beacuse requests are async
  setTimeout(() => {

  // adcbutap - euw2 - data 
    api.get('euw1', 'summoner.getByAccountId', '5fMAg5rcacWIwDCvitVVRVUXZ-O1975PrhfyCPZcJyiosg3f7ntWmgkZ')
    .then(data =>{
      adcbutapIconId = data.profileIconId;
      adcbutapName = data.name;
    })
    api.get('euw1', 'league.getLeagueEntriesForSummoner', 'UUP6WQbmTq_SZuHOAJiKYA9cbaYkQVUj2UBOFAh43zQoBQSf')
    .then(data =>{
      adcbutapRank = data[0].tier;
      adcbutapDiv = data[0].rank;
      adcbutapLp = data[0].leaguePoints;
      adcbutapWins = data[0].wins;
      adcbutapLosses = data[0].losses;
      adcbutapWr = Math.floor(percentage(data[0].wins,data[0].wins+data[0].losses));
    })

    api.get('euw1', 'match.getMatchlist1','5fMAg5rcacWIwDCvitVVRVUXZ-O1975PrhfyCPZcJyiosg3f7ntWmgkZ')
    .then(data=>{
      adcbutapLastPlayed = data.matches[0].timestamp;
      adcbutapDecay = adcbutapLastPlayed + 2419200000;
      adcbutapLastPlayed = new Date(adcbutapLastPlayed).toLocaleString();
      adcbutapDecay = new Date(adcbutapDecay).toLocaleString();
      adcbutapPlatform = data.matches[0].platformId;

        // render all data from vars
        res.render('index', {
           // uwu mid - eune1 - data render
           uwumidPlatform: uwumidPlatform,
           uwumidDecay: uwumidDecay,
           uwumidIconId: uwumidIconId,
           uwumidLastPlayed: uwumidLastPlayed,
           uwumidRank: uwumidRank,
           uwumidDiv: uwumidDiv,
           uwumidLp: uwumidLp,
           uwumidWins: uwumidWins,
           uwumidLosses: uwumidLosses ,
           uwumidWr: uwumidWr,
           uwumidName: uwumidName,
           // fffarelll - eune2 - data render
           fffarelllPlatform: fffarelllPlatform,
           fffarelllDecay: fffarelllDecay,
           fffarelllIconId: fffarelllIconId,
           fffarelllLastPlayed: fffarelllLastPlayed,
           fffarelllRank: fffarelllRank,
           fffarelllDiv: fffarelllDiv,
           fffarelllLp: fffarelllLp,
           fffarelllWins: fffarelllWins,
           fffarelllLosses: fffarelllLosses,
           fffarelllWr: fffarelllWr,
           fffarelllName: fffarelllName,
           // barcode - eune3 - data render
           barcodePlatform: barcodePlatform,
           barcodeDecay: barcodeDecay,
           barcodeIconId: barcodeIconId,
           barcodeLastPlayed: barcodeLastPlayed,
           barcodeRank: barcodeRank,
           barcodeDiv: barcodeDiv,
           barcodeLp: barcodeLp,
           barcodeWins: barcodeWins,
           barcodeLosses: barcodeLosses,
           barcodeWr: barcodeWr,
           barcodeName: barcodeName,
           // farel - euw1 - data render
           farelPlatform: farelPlatform,
           farelDecay: farelDecay,
           farelIconId: farelIconId,
           farelLastPlayed: farelLastPlayed,
           farelRank: farelRank,
           farelDiv: farelDiv,
           farelLp: farelLp,
           farelWins: farelWins,
           farelLosses: farelLosses,
           farelWr: farelWr,
           farelName: farelName,
           // adcbutap - euw2 - data render
           adcbutapPlatform: adcbutapPlatform,
           adcbutapDecay: adcbutapDecay,
           adcbutapIconId: adcbutapIconId,
           adcbutapLastPlayed: adcbutapLastPlayed,
           adcbutapRank: adcbutapRank,
           adcbutapDiv: adcbutapDiv,
           adcbutapLp: adcbutapLp,
           adcbutapWins: adcbutapWins,
           adcbutapLosses: adcbutapLosses,
           adcbutapWr: adcbutapWr,
           adcbutapName: adcbutapName
     });
    })
  }, 2000);
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))