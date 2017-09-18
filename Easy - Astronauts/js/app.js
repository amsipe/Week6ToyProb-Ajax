/*EASY: Using jQuery's AJAX functions, create a page that will display the names of the people currently in space, as well as what spacecraft they are currently on.
*/
$(document).ready(function(){
  var astroURL = 'http://api.open-notify.org/astros.json'
  function showAstros (data){

    $('#wrapper').html('<ul id="nameList"></ul>')
    $.each(data.people,function(cur,person){
      $('#nameList').append('<li>' + person.name + 'is on the spacecraft ' + person.craft +'.</li>')
    })
  }
  $.getJSON(astroURL,showAstros)
})
