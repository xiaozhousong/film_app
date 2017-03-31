var favApp=(function(){
	var fav_template = $('#fav_template').html();
	var $fav = $('#fav');
	var $newLi = $fav.find('li');
	var $delete = $('button');

	var render = function(film,id){
		$newLi = $(Mustache.render(fav_template, film, id)).click(removeFromFavs(id))
	}

	var removeFromFavs = function(id) //remove the id from web storage
	{		
			return function(){
				var favFilms = getFav.getFavFilms();
			var indexNum = favFilms.id;
			if(indexNum != -1) {
				favFilms.splice(indexNum, 1);
			}
			localStorage.setItem("favFilms", JSON.stringify(favFilms));		
		}			
	}
	
	var showFavFilms = function(id){    	
    	var favFilms=getFav.getFavFilms();
    	$.getJSON('data/films.json',function(films){										
		    
			  $.each( films, function( index, film ) {
				  	if(favFilms.includes(film.id)){
				  		render(film);
					    
					    $fav.append($newLi);
					}
			  });			  
		});
    }
	
	function init()
	{
		removeFromFavs();
		showFavFilms();
	};
	return{
		init:init
	}
})();

$(document).ready(function(){
	favApp.init();
});
