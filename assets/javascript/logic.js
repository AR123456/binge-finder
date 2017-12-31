$(document).ready(function() {

    // get our values from the html to pass into our ajax
    var search;
    var resultNum;
    var startYear;
    var endYear;
  
    //checks for clicks on our buttons
    $("button").on("click", function(e) {
      search = $("#searchTerm").text();
      resultNum = $("#resultNumber").val();
      startYear = $("#startYear").text();
      endYear = $("#endYear").text();
      console.log("our search values: ", search, resultNum, startYear, endYear);
  
      if ($(this).attr("id") === "search") {
        // run ajax call function here
  
      } else if ($(this).attr("id") === "clear") {
        // run function to clear results here
        
      }
    })
    })