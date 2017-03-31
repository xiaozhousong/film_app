var searchApp=(function(){
	
	var navTemplate = $('#nav_template').html();
	var $nav = $('#nav');
	var $newLi = $nav.find('li');

	var render = function(film,val)
	{
		$newLi = $(Mustache.render(navTemplate, film, val)).click(filmsApp.showDetails(film)) 
	}
	
	var searchTerm = function(films)
	{
		$("#search").keyup(function(){			
			var searchTerm = $('#search').val();			
			var myExp = new RegExp(searchTerm,"i");		
			$.getJSON('data/films.json',function(data){					
				
				var output = $('<ul class="searchresults" style="margin-left: -40px; margin-top: 10px;"></ul>');							
				$.each(data, function(key,val){
					if(val.name.search(myExp) != -1){								
					  	render(val);
						output.append($newLi);
						$( "#nav" ).hide();
					} 					     
				});
					$('#search_results').empty();
					$('#search_results').append(output)
			});
		});
	}

	var init = function()
	{
		searchTerm();
		
		// $.getJSON("data/films.json",navList);	
	};
	return{
		render: render,
		init:init
		
	}
})();

$(document).ready(function(){
	searchApp.init();
});

// filmsApp.render();









