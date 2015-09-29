$( document ).ready(function() {
    var teamAbbr = ["ARI", "ATL", "BAL", "BUF", "CAR", "CHI", "CIN", "CLE", "DAL", 
    				  "DEN", "DET", "GB", "TEN", "HOU", "IND", "JAX", "KC", "STL", 
    				  "OAK", "MIA", "MIN", "NE", "NO", "NYG", "NYJ", "PHI", "PIT", 
    				  "SD", "SF", "SEA", "TB", "WAS"];
    for(var t = 0; t < teamAbbr.length; t++){
    	$('#teamNames').append('<option value="' + teamAbbr[t] + '">' + teamAbbr[t] + '</option>');
    }
});