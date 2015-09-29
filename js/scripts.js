$( document ).ready(function() {
    var teams = [];
    	
    teams.push({
		abbr: "ARI",
		full: "Arizona Cardinals",
		bgcolor: "#97233F",
		txtcolor: "#000000"
    });

    teams.push({
		abbr: "ATL",
		full: "Atlanta Falcons",
		bgcolor: "#A71930",
		txtcolor: "#000000"
    });

    teams.push({
		abbr: "BAL",
		full: "Baltimore Ravens",
		bgcolor: "#241773",
		txtcolor: "#9E7C0C"
    });

    teams.push({
		abbr: "BUF",
		full: "Buffalo Bills",
		bgcolor: "#00338D",
		txtcolor: "#C60C30"
    });
    	
    teams.push({
		abbr: "CAR",
		full: "Carolina Panthers",
		bgcolor: "#0085CA",
		txtcolor: "#000000"
    });	

    teams.push({
		abbr: "CHI",
		full: "Chicago Bears",
		bgcolor: "#0B162A",
		txtcolor: "#C83803"
    });	
    
    teams.push({
		abbr: "CIN",
		full: "Cincinnati Bengals",
		bgcolor: "#FB4F14",
		txtcolor: "#000000"
    });	

    teams.push({
		abbr: "CLE",
		full: "Cleveland Browns",
		bgcolor: "#FB4F14",
		txtcolor: "#22150C"
    });

    teams.push({
		abbr: "DAL",
		full: "Dallas Cowboys",
		bgcolor: "#002244",
		txtcolor: "#B0B7BC"
    });
    	
    teams.push({
		abbr: "DEN",
		full: "Denver Broncos",
		bgcolor: "#002244",
		txtcolor: "#FB4F14"
    });

    teams.push({
		abbr: "DET",
		full: "Detroit Lions",
		bgcolor: "#005A8B",
		txtcolor: "#B0B7BC"
    });

    teams.push({
		abbr: "GB",
		full: "Green Bay Packers",
		bgcolor: "#203731",
		txtcolor: "#FFB612"
    });

    teams.push({
		abbr: "HOU",
		full: "Houston Texans",
		bgcolor: "#03202F",
		txtcolor: "#A71930"
    });

    teams.push({
		abbr: "IND",
		full: "Indianapolis Colts",
		bgcolor: "#002C5F",
		txtcolor: "#A5ACAF"
    });

    teams.push({
		abbr: "JAX",
		full: "Jacksonville Jaguars",
		bgcolor: "#006778",
		txtcolor: "#9F792C"
    });

    teams.push({
		abbr: "KC",
		full: "Kansas City Chiefs",
		bgcolor: "#E31837",
		txtcolor: "#FFFFFF"
    });

    teams.push({
		abbr: "MIA",
		full: "Miami Dolphins",
		bgcolor: "#008E97",
		txtcolor: "#F58220"
    });

    teams.push({
		abbr: "MIN",
		full: "Minnesota Vikings",
		bgcolor: "#4F2683",
		txtcolor: "#FFC62F"
    });

    teams.push({
		abbr: "NE",
		full: "New England Patriots",
		bgcolor: "#B0B7BC",
		txtcolor: "#002244"
    });

    teams.push({
		abbr: "NO",
		full: "New Orleans Saints",
		bgcolor: "#9F8958",
		txtcolor: "#000000"
    });

    teams.push({
		abbr: "NYG",
		full: "New York Giants",
		bgcolor: "#A5ACAF",
		txtcolor: "#0B2265"
    });

    teams.push({
		abbr: "NYJ",
		full: "New York Jets",
		bgcolor: "#203731",
		txtcolor: "#FFFFFF"
    });

    teams.push({
		abbr: "OAK",
		full: "Oakland Raiders",
		bgcolor: "#A5ACAF",
		txtcolor: "#000000"
    });

    teams.push({
		abbr: "PHI",
		full: "Philadelphia Eagles",
		bgcolor: "#004953",
		txtcolor: "#A5ACAF"
    });
    	
    teams.push({
		abbr: "PIT",
		full: "Pittsburgh Steelers",
		bgcolor: "#FFB612",
		txtcolor: "#000000"
    });	

    teams.push({
		abbr: "SD",
		full: "San Diego Chargers",
		bgcolor: "#0073CF",
		txtcolor: "#FFB612"
    }); 

    teams.push({
		abbr: "SF",
		full: "San Fransisco 49ers",
		bgcolor: "#AA0000",
		txtcolor: "#FFFFFF"
    }); 

    teams.push({
		abbr: "SEA",
		full: "Seattle Seahawks",
		bgcolor: "#002244",
		txtcolor: "#69BE28"
    });

    teams.push({
		abbr: "STL",
		full: "St. Louis Rams",
		bgcolor: "#002244",
		txtcolor: "#B3995D"
    });

    teams.push({
		abbr: "TB",
		full: "Tampa Bay Buccaneers",
		bgcolor: "#D50A0A",
		txtcolor: "#000000"
    });

    teams.push({
		abbr: "TEN",
		full: "Tennessee Titans",
		bgcolor: "#002244",
		txtcolor: "#4B92DB"
    });	

    teams.push({
		abbr: "WAS",
		full: "Washington Redskins",
		bgcolor: "#773141",
		txtcolor: "#FFB612"
    });

    for(t in teams){
    	$('#teamNames').append('<option value="' + teams[t].abbr + '">' + teams[t].abbr + '</option>');
    }
});