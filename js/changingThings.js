(function(){
	"use strict";
	console.log("SEAF Fired");
	
	var dynamicContent = {
		ron : {
			text: "I asked M&D to do VFX for my most recent documentary and I could not recommend them enough. Magnificent and very detailed work. Very Pleased.",
			headline : "Ron Mann"
		},
		edoardo : {
			text: "I needed some direction for the visuals on my newest project and was shown M&D. They were able to not only create my vision but add onto it in ways I could never imagine.",	
			headline : "Edoardo Ponti"	
		},
		david : {	
			text : "Speechless. Recommend to everyone looking for quality design work.",
			headline : "David Fortier"	
		}
	};
	var testImages = document.querySelectorAll('.testimonialimage'),
		testSub = document.querySelector('.testh2'),
		testText = document.querySelector('.testp'),
		appliedClass1; // set our globals
	
	function changeTestimonial() {	
		testSub.classList.remove(appliedClass1); 
		
		appliedClass1 = this.id; 
		
		testSub.classList.add(this.id); 
		
		testSub.firstChild.nodeValue = dynamicContent[this.id].headline;
		testText.firstChild.nodeValue = dynamicContent[this.id].text; 
	}

	[].forEach.call(testImages, function(image) {
		image.addEventListener("click", changeTestimonial, true);
	});

	testSub.firstChild.nodeValue = dynamicContent['ron'].headline; 
	testText.firstChild.nodeValue = dynamicContent['ron'].text; 
})();

