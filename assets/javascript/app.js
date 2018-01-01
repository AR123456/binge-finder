//set up variables
var authKey = 'b28b4294c09d4561b5d5c0fe96ea8595';
// search parameters
var queryTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;
//function to handel the error 
var invocation = new XMLHttpRequest();
//URL Base 
var queryURLBase = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + authKey; 
// track number of articles 
var articleCounter = 0;
//functions 
// make the ajax call
function runQuery(numArticles, queryURL){
  //Ajax Function 
  $.ajax({url: queryURL, method: "GET"})
     .done(function(NYTData){
          //clear out well section of the previous query    
      $('#wellSection').empty();
        //for loop to find all the articles 
      for(var i=0; i<numArticles; i++){
          //start dumping to HTML Here
          var wellSection = $('<div>');
          //create bootstrap well container
          wellSection.addClass("well");
          wellSection.attr('id','articleWell-'+ i);
          $('#wellSection').append(wellSection);
          //check if things exist
        if(NYTData.response.docs[i].headline != "null");{
          $("#articleWell-"+ i).append("<h3>" + NYTData.response.docs[i].headline.main + "</h3>");
            }
        if(NYTData.response.docs[i].byline && NYTData.response.docs[i].byline.hasOwnProperty("original") ){
          $("#articleWell-"+ i).append("<h5>" + NYTData.response.docs[i].byline.original + "</h5>");
        }
        //attach content to the appropriate well
        $("#articleWell-"+ i).append("<h5>" + NYTData.response.docs[i].section_name + "</h5>");
        $("#articleWell-"+ i).append("<h5>" + NYTData.response.docs[i].pub_date + "</h5>");
        $("#articleWell-"+ i).append("<a href =" + NYTData.response.docs[i].web_url+">" + NYTData.response.docs[i].web_url + "</a>");
      }
      // console.log(queryURL);
      // console.log(numArticles);
      // console.log(NYTData);
    })
}
// main processes
// on click event to do the ajax query on search button 
$('#searchBtn').on('click',function(){
  // search the search term field entry and trim white space 
  queryTerm =$('#search').val().trim();
  // console.log(searchTerm);
  //create var to pass queryURLBase and search term into runQuery
  var newURL = queryURLBase + "&q=" + queryTerm;
   //number of records this is to limit the number of records returned since there is no way to do it in the API
  numResults = $("#numRecords").val();
  // start year and end year
  startYear = $('#startYear').val().trim(); 
  endYear = $('#endYear').val().trim();
  // handle optional date years
      if(parseInt(startYear)){
          //take care of issue with day month 
        startYear = startYear +"0101";
        //add date info to the URL 
        newURL =  newURL + "&begin_date=" + startYear;
        }
      if(parseInt(endYear)){
            //take care of issue with day month 
        endYear = endYear + "0101";
          //add date info to the url 
        newURL =  newURL + "&end_date=" + endYear;
      }
    // add the date information to the URL 
      //  console.log(newURL);
  //send Ajax the URl 
    runQuery(numResults, newURL);
    return false;
})
// build process 
//1 Retrieve user inputs and convert to variables 
//2 use those variables to run on Ajax call to the New York Times
//3 Break down the NYT object into usable fields 
//4 Dynamically generate html content 
// 5 deal with "edge cases" == bugs or situation that are not intuitive. 