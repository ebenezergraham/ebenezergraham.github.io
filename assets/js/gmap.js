function googleMap() {
        var location = {lat: -20.1650583, lng: 57.5016656};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: location
        });

        var content = '<div id="content">'+
            '<a href="https://www.cimfinance.mu" target="_blank" id="firstHeading" class="pointerhead">Cim Finance Website</a>';

        var infopane = new google.maps.InfoWindow({
          content: content
        });

        var marker = new google.maps.Marker({
          position: location,
          map: map,
          title: 'Cim Finance Head Office'
        });
        marker.addListener('click', function() {
          infopane.open(map, marker);
        });
      }
