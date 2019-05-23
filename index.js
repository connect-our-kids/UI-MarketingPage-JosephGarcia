function myFunction() {
	var x = document.getElementById("myLinks");

		x.classList.toggle('active')

  }

function buttonTextAnimation() {
	let buttonText = document.querySelector('header h1')
	TweenMax.to(buttonText, 1, {
		opacity: 0,
		// scale: 0,
		// rotation: 580,
		ease: Bounce.easeIn,
		repeat: 3,
		yoyo: true, 
		repeatDelay: 1,
		x: -500
	});
}  

// buttonTextAnimation()


let up = document.querySelector('.far')

//Hide Button 
window.onscroll = () => scrollFunction();

function scrollFunction() {
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
		up.style.display = "block";
	} 
	  
	else {
		up.style.display = "none";
	}
}


// Scroll Top
up.addEventListener('click', () => 	document.documentElement.scrollTop = 0)

