$(document).ready(function(){
    
    var quote;
    var author;
    //these vars are declared outside of the function
    
   function getNewQuote(){
       $.ajax({
           url:'http://api.forismatic.com/api/1.0/',
           jsonp: 'jsonp',
           dataType: 'jsonp',
           data: {
               method: 'getQuote',
               lang: 'en',
               format: 'jsonp'
           },
           success: function(response){
               quote = response.quoteText;
               author = response.quoteAuthor;
               $('#quote').text(quote);
               if (author){
                   $('#author').text('- ' + author);
               }else {
                   $('#author').text('- unknown');
               }
           }
       });
//       making an API request above
   }   
getNewQuote();
    
    $('.get-quote').on('click',function(event){
        event.preventDefault();
        getNewQuote();
    });
    
    $('.share-quote').on('click',function(event){
        event.preventDefault();
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + '- ' + author));
        //new window will open for twitter
    });
});





//TIME & DATE FUNCTION


function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);
    
     if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  
  if(h==0) {
    h=12;
  }

 document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


//date
function startDate() {
  var d = new Date();
  var days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+d.getDate()+"/"+[d.getMonth()+1]+"/"+d.getFullYear();
}







//Full API LINK, before jsonp added:

/*
http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en

*/

