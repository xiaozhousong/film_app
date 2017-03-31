
var filmsApp=(function(){
	
	var navTemplate = $('#nav_template').html();
	var $nav = $('#nav');
	var $newLi = $nav.find('li');
	
	var render = function(film,val)
	{
		$newLi = $(Mustache.render(navTemplate, film, val)).click(showDetails(film)) 
	}

	var navList = function(films)
	{
		$.each(films, function(index,film){
			
				render(film);
			    $nav.append($newLi);
			
		})
	}
	
	var showDetails = function(val, film)
	{
		return function(){
			//put the film object into web storage
			sessionStorage.setItem("chosenFilm", JSON.stringify(val));		
			//navigate to the details page	
			window.location.assign("details.html"); 			
		}		
	}

	var init = function()
	{
		$.getJSON("data/films.json",navList);	
	};
	return{
		render: render,
		navList: navList,
		showDetails:showDetails,
		init:init
		
	}
})();

filmsApp.init();


filmsApp.showDetails();









