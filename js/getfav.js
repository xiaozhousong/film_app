var getFav = (function() {
 
    var getFavFilms = function() {
        var favFilms=[];
        if(localStorage.getItem("favFilms")){
            favFilms=JSON.parse(localStorage.getItem("favFilms"));
        }
        return favFilms;
    };
    // Public API
    return {
        getFavFilms: getFavFilms
          
    };
})();
getFav.getFavFilms();
