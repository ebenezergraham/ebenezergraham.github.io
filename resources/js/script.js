var config = {
  apiKey: "AIzaSyCY-3SzKrtNk2WuZE0RZexOI0aN9jv6rXE",
  authDomain: "root-portfolio.firebaseapp.com",
  databaseURL: "https://root-portfolio.firebaseio.com",
  projectId: "root-portfolio",
  storageBucket: "root-portfolio.appspot.com",
  messagingSenderId: "124315009276"
};

var medium = {
	ClientID: "295a7dde004d",
	ClientSecret: "63ae01323da91a168e43eacd1ff9ff7e0b99afd2"
}

$(document).ready(function() {
  firebase.initializeApp(config);
});

//Country Code
let GBR = "GBR";
let MUS = "MUS";
let GHA = "GHA";

let GHANA = "ghana";
let MAURITIUS = "mauritius";
let UK = "united kingdom";

let programmes = {
  both_sex: "SE.TER.ENRL",
  agriculture: "UIS.FOSEP.56.F800",
  education: "UIS.FOSEP.56.F140",
  engineering_manufacturing_and_construction: "UIS.FOSEP.56.F700",
  health_and_welfare: "UIS.FOSEP.56.F300",
  humanities_and_arts: "UIS.FOSEP.56..F200",
  science: "UIS.FOSEP.56.F500",
  services: "UIS.FOSEP.56.F600",
  social_sciences_business_and_Law: "UIS.FOSEP.56.F400",
  unspecified_fields: "UIS.FOSEP.56.FUK"
};

/*
* A function to toggle the mobile menu
* ====================================
* */
function toggle() {
  let element = $(".navbar");
  element.css("display", "block");
  let nav = element[0];
  if (nav.className === "navbar") {
    nav.className += " responsive";
  } else {
    nav.className = "navbar";
    element.css("display", "none");
  }
}

/*Helper functions
* ================
* */

//Stores the session data for later use
function saveChosenCountry(country) {
  sessionStorage.setItem("country", country);
}

function saveChosenStatistics(countrycode, programme) {
  sessionStorage.setItem("countrycode", countrycode);
  sessionStorage.setItem("programme", programme);
}

//change the type of chart on the screen
function chartType(type) {
  displayQuickStatistics(
    statisticsFactory(
      sessionStorage.getItem("countrycode"),
      sessionStorage.getItem("programme")
    ),
    type
  );
}

//Smooth scroll effect
$(function() {
  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        500,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});

$("#back-drop").ripples({
  // Image Url
  imageUrl: "img/back-drop-2.jpg",
  // The width and height of the WebGL texture to render to.
  // The larger this value, the smoother the rendering and the slower the ripples will propagate.
  resolution: 400,
  // The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
  dropRadius: 15,
  // Basically the amount of refraction caused by a ripple.
  // 0 means there is no refraction.
  perturbance: 0,
  // Whether mouse clicks and mouse movement triggers the effect.
  interactive: true,
  // The crossOrigin attribute to use for the affected image.
  crossOrigin: "true"
});

$("#water").ripples({
  // Image Url
  imageUrl: "img/heroimage1.jpeg",
  // The width and height of the WebGL texture to render to.
  // The larger this value, the smoother the rendering and the slower the ripples will propagate.
  resolution: 500,
  // The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
  dropRadius: 20,
  // Basically the amount of refraction caused by a ripple.
  // 0 means there is no refraction.
  perturbance: 1,
  // Whether mouse clicks and mouse movement triggers the effect.
  interactive: true,
  // The crossOrigin attribute to use for the affected image.
  crossOrigin: "true"
});



//hide and how social media bar
$(document).ready(function() {
  $(window).bind("scroll", function() {
    let distance = 50;
    if ($(window).scrollTop() > distance) {
      $(".navbar", "social-media").fadeOut(500);
      $(".navbar").css("top", "0");
    } else {
      $(".navbar", "social-media").fadeIn(500);
      $(".navbar").css("top", "50px");
    }
  });
});

//URI generator for the statiscs ajax call
function statisticsFactory(country, programme) {
  sessionStorage.setItem("programme", programme);
  return (
    "http://api.worldbank.org/v2/countries/" +
    country +
    "/indicators/" +
    programme +
    "?date=2009:2015&format=json"
  );
}

function countryStatistics(country) {
  var programme = sessionStorage.getItem("programme");
  sessionStorage.setItem("countrycode", country);
  displayStatistics(country, programme);
}

//makes an ajax call to display programmes
function displayQuickStatistics(uri, type) {
  var ajaxrequest = $.ajax({
    url: uri,
    type: "get",
    dataType: "json"
  });

  ajaxrequest.done(function(data) {
    var yvalues = [];
    var xvalues = [];
    var programme = data[1][0].indicator.value;
    for (var i = 0; i < data[1].length; i++) {
      xvalues[6 - i] = data[1][i].date;
      yvalues[6 - i] = data[1][i].value;
    }
    $("#line-chart").remove();
    $(".charts").append('<canvas id="line-chart"></canvas>');
    if (type == "bar") {
      barChart(xvalues, yvalues, programme);
    } else if (type == "line") {
      lineChart(xvalues, yvalues, programme);
    }

    var source = $("#statistics-template").html();
    var template = Handlebars.compile(source);

    var data = data[1];
    var wrapper = { objects: data };

    $("#statistics-data")[0].innerHTML = template(wrapper);
  });
}

/*AJAX call functions and display function*/

// list all the universities from hipolabs
function displayUniversities(country) {
  var ajaxrequest = $.ajax({
    url:
      "https://cors-anywhere.herokuapp.com/http://universities.hipolabs.com/search?country=" +
      country,
    type: "GET",
    dataType: "json",
    error: function fallback() {
      console.error(
        "Error occured while making API call, using offline data now"
      );
      console.error(
        "==========================================================="
      );
      var ajaxrequest = $.ajax({
        url: "vendor/js/world_universities_and_domains.json",
        type: "GET",
        dataType: "json",
        error: function() {
          console.error("No available data");
        }
      });

      ajaxrequest.done(function(data) {
        var source = $("#list-universities-template").html();
        var template = Handlebars.compile(source);

        var data = $.grep(data, function(n) {
          if (n.country.toUpperCase() == country.toUpperCase()) return n;
        });
        console.log(data);

        var wrapper = { objects: data };

        $("#data").append(template(wrapper));
      });
    }
  });

  ajaxrequest.done(function(data) {
    var source = $("#list-universities-template").html();
    var template = Handlebars.compile(source);

    var wrapper = { objects: data };
    if (country == UK) {
      $("#current-country")[0].innerText = "UK";
    } else {
      $("#current-country")[0].innerText = country;
    }
    $("#data")[0].innerHTML = template(wrapper);
  });
}

function displayStatistics(countrycode, programme) {
  var defaultChart = "bar";

  switch (countrycode) {
    case MUS:
      $("#current-country")[0].innerText = MAURITIUS;
      break;
    case GHA:
      $("#current-country")[0].innerText = GHANA;
      break;
    case GBR:
      $("#current-country")[0].innerText = "UK"; //To Shorten the Name
      break;
  }
  displayQuickStatistics(
    statisticsFactory(countrycode, programme),
    defaultChart
  );
}

function changeStatistics(programme) {
  $("#showlist")[0].className = "no-display";
  displayStatistics(sessionStorage.getItem("countrycode"), programme);
}

//displays the next programme on the list
function nextStatistics() {
  var counter = 0;
  for (var programme in programmes) {
    counter++;
    if (programmes[programme] == sessionStorage.getItem("programme")) {
      var array = Object.values(programmes);
      if (array[counter + 1] != null) {
        changeStatistics(array[counter + 1]);
      } else {
        $(".next").css("background-color", "grey");
        $(".next").css("border", "grey");
      }
      break;
    }
  }
}

//displays the previous programme on the list
function previousStatistics() {
  var counter = 0;
  for (var programme in programmes) {
    counter++;
    if (programmes[programme] == sessionStorage.getItem("programme")) {
      var array = Object.values(programmes);
      if (array[counter + 1] != null) {
        changeStatistics(array[counter - 1]);
      } else {
        $(".previous").css("background-color", "grey");
        $(".previous").css("border", "grey");
      }
      break;
    }
  }
}

//firebase contact
$("#submitContact").on("click", function(event) {
  event.preventDefault();
  var name = $("#contact-name").val();
  var email = $("#contact-email").val();
  var message = $("#contact-message").val();
  $("#contact-me")[0].reset();
  firebase
    .database()
    .ref("messages/" + name)
    .set({
      username: name,
      email: email,
      message: message,
      date: new Date().toDateString()
    });
  $(".message")[0].innerHTML =
    '<p class="success">Thanks for letting me know you were here</p>';
});
