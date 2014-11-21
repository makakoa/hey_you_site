$(document).ready(function() {
  $('#post').mouseenter(function() {
        $('#post').fadeTo('fast', 1);
  });
  $('#post').mouseleave(function() {
    $('#post').fadeTo('fast', 0.4);
  });
  $('#heyyou').mouseenter(function() {
        $('#heyyou').fadeTo('fast', 1);
  });
  $('#heyyou').mouseleave(function() {
    $('#heyyou').fadeTo('fast', 0.4);
  });
  $('#heyyou').click(function() {
    $('#title').html('hey you!');
    $('#body').html('Download hey you now on the app store!');
    $('#user').html('- hey you dev team');
  });
  
  $('#post').click(function() {
    $('#post').animate({
      top: "-10em"
    }, 500, function() {
    });
  });
  
  function initialize() {
    var mapOptions = {
      center: { lat: 47.621, lng: -122.332},
      zoom: 2,
      mapTypeControl: false,
      navigationControl: false,
      streetViewControl: false,
      zoomControl: false,
      panControl: false,
      backgroundColor: 'black'
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

/*    var myposition = new google.maps.LatLng(47.621,-122.322);
    var marker = new google.maps.Marker({
      position: myposition,
      map: map,
      title: 'test marker'
    });*/
    
    var getHYs = function() {
      apiUrl = 'https://hey-you-api.herokuapp.com';
      console.log(apiUrl);
      $.ajax({
        type: 'GET',
        url: (apiUrl + '/v1/api/dots/all'),
        dataType: 'json',
        success: function(data) {
          data.forEach(function(dot) {
            console.log(dot);
            var position = new google.maps.LatLng(dot.latitude, dot.longitude);
            var marker = new google.maps.Marker({
              position: position,
              map: map,
              title: dot.title,
              animation: google.maps.Animation.DROP,
              text: dot.post,
              user: dot.username,
              color: dot.color
            });
            google.maps.event.addListener(marker, 'click', function() {
              map.panTo(marker.getPosition());
              var that = this;
              $('#post').animate({
                top: "-10em"
              }, 500, function(){
                $('#title').html(that.title);
                $('#body').html(that.text);
                $('#user').html('- ' + that.user);
                if(that.color) $('#post').css("border-color", that.color);
              });
              $('#post').animate({
                top: "+1em"
              }, 500, function(){});
            });
          });
        },
        error: function(xOptions, textStatus){
          console.log(xOptions);
          console.log(textStatus);
        }
      });
    };
    getHYs();
  }

  google.maps.event
  
  google.maps.event.addDomListener(window, 'load', initialize);
});