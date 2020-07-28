	var i = 0; // Start point
	var images = [];
	var time = 3000;

	// Image List
	images[0] = 'new-logo.jpg';
	images[1] = 'spicesp.jpg';
	images[2] = 'coffeeopes.jpg';

	// Change Image
	function changeImg(){
		document.slide.src = images[i];

		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}

		setTimeout("changeImg()", time);
	}

	window.onload = changeImg;
	
	function moveDown(){
		document.getElementById('intro').scrollIntoView();
	}
	
	// function scrollAppear(){
		// var introText= document.querySelector('intro-text');
		// var introPosition= introText.getBoundingClientRect().top;
		// var screenPosition= window.innerHeight/1.3;
		
		// if(introPosition<screenPosition){
			// introText.classList.add('intro-appear');
		// }
	// }
	
	// window.addEventListener('scroll',scrollAppear);