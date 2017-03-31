var webstorage = (function() {
 
    var getChosenFilm = function() {
        var chosenFilm;
		if(sessionStorage.getItem("chosenFilm")){
			chosenFilm=JSON.parse(sessionStorage.getItem("chosenFilm"));
		}
		return chosenFilm;
    };
    // Public API
    return {
        getChosenFilm: getChosenFilm
          
    };
})();
webstorage.getChosenFilm();





 