var detailsApp=(function(){
	
	var $contentDiv;
	var $nameHeading;
	var $releaseLi;
	var $directorLi;
	var $bioLi;
	var $imageLi;
	var $cinemaLi;
	
	var showDetails = function ()
	{
		var chosenFilm = webstorage.getChosenFilm();

		$nameHeading.text(chosenFilm.name);
		$releaseLi.text("Release:" + chosenFilm.release);
		$directorLi.text("Director:" + chosenFilm.director);
		$bioLi.text(chosenFilm.bio);
		$cinemaLi.text("Cinema:" + chosenFilm.cinema);
		$imageLi.attr( "src", function() {
		  return "images/"+chosenFilm.id+"a.jpg"
		});
	}

	var addToFavs = function() 
	{		
		$( "#addFav" ).click(function() {
		  var currentFilm = webstorage.getChosenFilm();
		  var favFilms=getFav.getFavFilms();
		  favFilms.push(currentFilm.id);
		  localStorage.setItem("favFilms", JSON.stringify(favFilms)) 
		});
	}


	var showMap = function(){
		$('#map').click(function(){
		window.location.assign("map.html");
	});

	}

	function init()
	{
		$contentDiv=$("#content");
		$nameHeading=$("#name");
		$releaseLi=$("#release");
		$directorLi=$("#director");
		$bioLi=$("#bio");
		$cinemaLi=$("#cinema");
		$imageLi=$("#image");
		showDetails();
		addToFavs();
		showMap();	
	};
	return{
		init:init,
	}
})();

$(document).ready(function(){
	detailsApp.init();
});

