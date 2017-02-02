$(document).foundation();

(function() {
	"use strict";
	console.log("SEAF Fired");
	
	//variables
	
	var nav = document.querySelector("#mainNav");
	var links = nav.querySelectorAll("a");
	console.log(links[0]);
	
	//functions
	
	function scrollit(e) {
		//console.log("scroll function fired");
		console.log(e.currentTarget.id);	
		var idNum = e.currentTarget.id;
		TweenMax.to(window, 1, {scrollTo:{y:"#section"+idNum, offsetY:20}});
	}
	
	//listeners	
	
	for(var i=0; i<links.length; i++){
		links[i].addEventListener("click", scrollit, false);
	}

})();



