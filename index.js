function myFunction() {
	var x = document.getElementById("myLinks");

		x.classList.toggle('active')

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

// buttonTextAnimation()