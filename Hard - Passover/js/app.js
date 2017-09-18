
/*
HARD: Create a page with a form to enter your longitude and latitude. When the form is submitted, use jQuery's AJAX functions to display a list of date/times that the International Space Station will pass over the given location.
*/

$("#astroForm").submit(function(e){
  e.preventDefault();
  getPasses();
});

$("#locBrowser").on('click',function(e){

    navigator.geolocation.getCurrentPosition(function(position){
      getPasses(position.coords.latitude,position.coords.longitude);
  });
})

function getPasses(latBrowser,longBrowser) {
  var lat = latBrowser || $("#lat").val();
  var long = longBrowser || $("#long").val();

  var url = `http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${long}&n=5&callback=?`
  $.getJSON(url,function(data){
    $("#passList").html('');
    $.each(data.response,function(i,cur){
      var passDate = new Date(cur.risetime * 1000)
      $("#passList").append('<li>' + passDate.toString() + '</li>')
    })
  })

}
