$( document ).ready(function() {
    var teams = {
    	"ARI": "Arizona Cardinals", 
    	"ATL": "Atlanta Falcons",
    	"BAL": "Baltimore Ravens", 
    	"BUF": "Buffalo Bills", 
    	"CAR": "Carolina Panthers", 
    	"CHI": "Chicago Bears", 
    	"CIN": "Cincinnati Bengals", 
    	"CLE": "Cleveland Browns", 
    	"DAL": "Dallas Cowboys",
    	"DEN": "Denver Broncos", 
    	"DET": "Detroit Lions", 
    	"GB":  "Green Bay Packers", 
    	"TEN": "Tennessee Titans", 
    	"HOU": "Houston Texans", 
    	"IND": "Indianapolis Colts", 
    	"JAX": "Jacksonville Jaguars", 
    	"KC":  "Kansas City Chiefs", 
    	"STL": "St. Louis Rams", 
    	"OAK": "Oakland Raiders", 
    	"MIA": "Miami Dolphins", 
    	"MIN": "Minnesota Vikings", 
    	"NE":  "New England Patriots", 
    	"NO":  "New Orleans Saints", 
    	"NYG": "New York Giants", 
    	"NYJ": "New York Jets", 
    	"PHI": "Philadelphia Eagles", 
    	"PIT": "Pittsburgh Steelers", 
    	"SD":  "San Diego Chargers", 
    	"SF":  "San Fransisco 49ers", 
    	"SEA": "Seattle Seahawks", 
    	"TB": "Tampa Bay Buccaneers", 
    	"WAS": "Washington Redskins"
	};

    for(t in teams){
    	$('#teamNames').append('<option value="' + t + '">' + t + '</option>');
    }
});