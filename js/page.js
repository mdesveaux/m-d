// JavaScript Document
(function () {
	//variables
	var pages = ["<h2 class='hidden'>Home Page</h2><div class='small-10 medium-12 large-10 large-centered colunms row' id='myIntro'><div class='small-12 columns'><h2>ABOUT M&amp;D</h2><p>A pioneer of visual media through motion graphics, M&amp;D (Marcel &amp; Derek) is a CG animation and motion  graphics company built on original concept planning as opposed to adaptation to preexisting trends. A philosophy in inventive concept planning gives a lasting life and character to the images.</p></div></div><div id='testimonials' class='small-10 medium-12 large-10 large-centered colunms row'><div><h2>TESTIMONIALS</h2></div><div id='ron' class='small-12 medium-4 columns testimonialimage'><img src='images/testimonial1.jpg' alt='Ron Mann' class='icon'></div><div id='edoardo' class='small-12 medium-4 columns testimonialimage'><img src='images/testimonial2.jpg' alt='Edoardo Ponti' class='icon'></div><div id='david' class='small-12 medium-4 columns testimonialimage'><img src='images/testimonial3.jpg' alt='David Fortier' class='icon'></div><div class='small-12 columns testimonialimage'><h3 class='testh2'>RON MANN</h3><p class='testp'>I asked M&amp;D to do VFX for my most recent documentary and I could not recommend them enough. Magnificent and very detailed work. Very Pleased.</p></div></div>",
				 
				"<div id='teamPage' class='small-10 medium-12 large-10 large-centered colunms row'><div><h2>WHO WE ARE</h2></div><div class='small-12 medium-6 columns bio'><img src='images/marcel.jpg' alt='Marcel Desveaux' class='teamIcon'><h3>Marcel Desveaux</h3><h4>Web Developer / Back-End role</h4><p>“I once heard that singer-songwriter Jackson Browne wouldn’t tour until his back up band was available. I’m the same way. I wouldn’t do my post unless I knew that Urban Post was available. At a certain point you realize these guys are like Keith Moon and Jack Bruce – they back you up to create one sweet sound.”</p></div><div class='small-12 medium-6 columns bio'><img src='images/derek.jpg' alt='Dongwook Shin' class='teamIcon'><h3>Dongwook Shin</h3><h4>Web Designer / Front-End role</h4><p>“…one of the most difficult challenges of the ‘Between Strangers’ soundtrack, was creating the emotional moments of silence. The silence is not ‘nothing’, but rather a layering and shaping of natural tones, designed to create a dramatic tension that the viewer ‘feels’ rather than ‘hears’…this daunting task was achieved perfectly by the Urban Post sound design team…”</p></div></div><div id='teamInfo' class='small-10 medium-12 large-10 large-centered colunms row'><div><h2>WHAT WE DO</h2></div><div class='small-12 medium-6 columns typeAgency'><img src='images/interactive.jpg' alt='interactive media' class='small-12'><h3>BUSINESS OBJECTIVE</h3><p>The primary goal of M&amp;D (Marcel &amp; Derek) is to create a unique visual effect through research and development of technology with emotional values to trigger reaction from viewers through it’s powerful imagery.</p></div><div class='small-12 medium-6 columns typeAgency'><img src='images/interactivePlatform.jpg' alt='interactive media design platform' class='small-12'><h3>BUSINESS AREA</h3><p>Producing all media content based design including : Advertisement, Broadcasting Design, Animation, Film, Interactive design.</p></div></div>",
				 
				"<div class='small-10 medium-12 large-10 large-centered columns portfolio row'><div><h2>OUR WORK</h2></div><div id='portfolio1' class='small-12 medium-3 columns portfolioCon'><img src='images/PF_discovery.jpg' alt='Discovery Channel Refresh'></div><div id='portfolio2' class='small-12 medium-3 columns portfolioCon'><img src='images/PF_car.jpg' alt='Car Project'></div><div id='portfolio3' class='small-12 medium-3 columns portfolioCon'><img src='images/PF_ecomo.jpg' alt='Ecomo Bottle Rebrand'></div><div id='portfolio4' class='small-12 medium-3 columns portfolioCon'><img src='images/PF_curiouscat.jpg' alt='Curious Cat'></div><div class='small-12 small-centered imgCaption'><h3>Discovery Channel Refresh</h3><p>Discovery Channel is one of the most beloved entertainment brands in the world. I established two strategies with several brainstorming. I drew one concept, 'Rebirth' from three keywords, 'Reinvigorate', 'Reposition', and 'Refresh', and I made all creative decisions based on three words, 'Life', 'Space', and 'Light'. To express 'Life' used roe, 'Space' used as background and the overall feelings, and 'Light' mean the novelty. I kept principles ofdesign like unity, balance, hierarchy, and emphasis to make good package. -November 25th, 2016</p></div></div>"];
	
	var navs = document.querySelectorAll(".page");
	var insertPage = document.querySelector("#introCon");

	//functions
	
	function showPage(evt) {
		var whichPage = evt.currentTarget.id;
		var pageNumber = whichPage;
		//console.log(imageNumber);
		insertPage.innerHTML = pages[pageNumber];	
	}
	
	//listeners	
	
	for(var i=0; i < navs.length; i++) {
		navs[i].addEventListener("click", showPage, false);
	}

})();