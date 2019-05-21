function myFunction() {
	var x = document.getElementById("myLinks");

	if(x.style.display === "block") {
		
		x.style.display = "none";
		console.log('closing');
	} 
	else {
		x.style.display = "block";
		TweenMax.from(x, 1, {
			y: -300,    
			ease: Power4.easeOut,
		});
		
		console.log('opening');
	}
  }

function buttonTextAnimation() {
	let buttonText = document.querySelector('header h1')
	TweenMax.to(buttonText, 1, {
		opacity: 0,
		scale: 0,
		rotation: 580,
		// ease: Bounce.easeIn,
		repeat: -1,
		yoyo: true, 
		repeatDelay: 1
	});
}  

buttonTextAnimation()