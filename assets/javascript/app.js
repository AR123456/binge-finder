//set up variables
//=============================== 
var authKey = "b28b4294c09d4561b5d5c0fe96ea8595";
// search parameters
var queryTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;
//URL Base 
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey; 
// track number of articles 
var articleCounter = 0;

//functions 
// make the ajax call
function runQuery(numArticles, queryURL){
  //Ajax Function 
  $.ajax({url: queryURL, method: 'GET',})
  //NYT Data will be the response and store what comes from the API call
    .done(function(NYTData){
      console.log(NYTData);

    });
 
}

// main processes
//=============================

// on click event to do the ajax query on search button 
$('#searchBtn').on('click',function(){
  runQuery(10,"https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b28b4294c09d4561b5d5c0fe96ea8595&q=Obama");

  return false;
})

//1 Retrieve user inputs and convert ot variables 
//2 use those variables to run on Ajax call to the new your tis
//3 Break down the NYT object into usable fields 
//4 Dynamically generate html content 
// 5 eal wiht "edge cases" == bugs or situation that are not intuitive. 