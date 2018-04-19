// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

function loadStand() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    umStandings(this);
    }
  };
  xhttp.open("GET", "standings.xml", true);
  xhttp.send();
  console.log('success!');
}

function umStandings(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr> <th>Team</th> <th>Played</th> <th>Won</th> <th>Draw</th> <th>Lost</th> <th>Points</th> </tr>";
  var x = xmlDoc.getElementsByTagName("TeamLeagueStanding");
  for (i = 0; i < x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("Team")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Played")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Won")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Draw")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Lost")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Points")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("stand").innerHTML = table;
}

function loadStat() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    umStats(this);
    }
  };
  xhttp.open("GET", "stats.xml", true);
  xhttp.send();
  console.log('success!');
}

function umStats(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr> <th>Player</th> <th>Club</th> <th>Rank</th> <th>Goals</th> </tr>";
  var x = xmlDoc.getElementsByTagName("Topscorer");
  for (i = 0; i < x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TeamName")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Rank")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("Goals")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("stat").innerHTML = table;
}
