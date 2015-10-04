$( document ).ready(function() {
    var teams = [];
    	
    teams.push({
    	abbr: "NFL",
    	full: "All NFL Teams",
    	bgcolor: "#00338D",
    	txtcolor: "#FFFFFF"
    })

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

    // populate team selector
    for(t in teams){
    	$('#teams').append('<option class="teamAbbr" value="' + teams[t].abbr + '">' + teams[t].abbr + '</option>');
    }

    // populate week selector
    for(x = 1; x < 18; x++){
    	$('#week').append('<option value="' + x + '">' + x + '</option>');
    }

    // handle team and week form submit 
    $('.options').submit(function(event){
    	event.preventDefault();
    	$('.results').html('');
    	// get value of team selector
    	var team = $('#teams').find('option:selected').val();
		var teamToLower = team.toLowerCase();
		// get value of week selector
		var week = $('#week').find('option:selected').val();
    	setNewHeaderStyles(teams, team, teamToLower);
    	getPlayerStats(team, week);
    });
});

function setNewHeaderStyles(teams){
	var team = $('#teams').find('option:selected').val();
	var teamToLower = team.toLowerCase();
	
	if(teamToLower === "nfl"){ // if "NFL" is selected, get picture from this url
		$('.team-logo').attr("src", "http://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/" + teamToLower + ".png?w=150&h=150&transparent=true" );		
	} 
	else{
		$('.team-logo').attr("src", "http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/" + teamToLower + ".png?w=150&h=150&transparent=true" );
	}
	
	for(t in teams){
		if(teams[t].abbr === team){
			$('.team').text(teams[t].full).css("color", teams[t].txtcolor);
			$('header').css("background-color", teams[t].bgcolor);
		}
	}	
}

function showPlayerStats(player){
	// clone our result template code
	var result = $('.statsTemp .playerInfo').clone();
	
	// Set the player's name
	var playerName = result.find('.name');
	playerName.text(player[0].firstName + ' ' + player[0].lastName);

	// Set the player's team
	var playerTeam = result.find('.playerTeam');
	playerTeam.text(player[0].teamAbbr);
	
	// Set the player's position
	var playerPosition = result.find('.position');
	playerPosition.text(player[0].position);

	// set the player's opponent
	var opponent = result.find('.opponent');
	opponent.text(player[0].opponentTeamAbbr);

	// set the player's stat line
	var stats = result.find('.stats');
	stats.text(player[0].statsLine);

	// set the player's points
	var playerPoints = result.find('.points');
	playerPoints.text(player[0].pts);

	// set the player's projected points
	var projected = result.find('.projected');
	projected.text(player[0].projectedPts);

	return result;
}

function showPlayerPicture(player){
	// clone template code for player pic
	var pic = $('.statsTemp .playerPic').clone();
	pic.css("background-image", "url(http://s.nflcdn.com/static/content/public/static/img/fantasy/player-card/headshot-logo-bg/" + player[0].teamAbbr + ".png");
	// set player's photo
	var photo = pic.find('#picture');
	if(player[0].esbid){
		photo.attr("src", "http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" + player[0].esbid + ".png");
	}
	else{
		photo.attr("src", "http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" + player[0].teamAbbr + ".png");
	}
	return pic;
}

function getPlayerStats(team, week){
	$.ajax({
		url: "http://api.fantasy.nfl.com/v1/players/scoringleaders?count=1&format=json&week=" + week + "&teamAbbr=" + team,
		type: "GET",
	})
	.done(function(data){
		$.each(data.positions, function(i, item) {
			var playerPic = showPlayerPicture(item);
			var playerStats = showPlayerStats(item);
			$('.results').append('<div class="player" id="' + i + '"></div>');
			// display player stats
			var newdiv = document.getElementById(i);
			$(newdiv).append(playerPic);
			$(newdiv).append(playerStats);
			if(i === 'DEF'){
				return false;
			}
		});
	})
	.fail(function(jqXHR, error, errorThrown){
		var errorElem = showError(error);
		$('.error').append(errorElem);
	});
}