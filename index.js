// Drop Down Menu
function myFunction() {
	var x = document.getElementById("myLinks");

		x.classList.toggle('active')
}

//H1 text Animation
function buttonTextAnimation() {
	let buttonText = document.querySelector('header h1')
	TweenMax.from(buttonText, 1.5, {
		// opacity: 0,
		// scale: 0,
		// rotation: 580,
		ease: Bounce.easeOut,
		// repeat: 1,
		// yoyo: true, 
		repeatDelay: 3,
		delay: 1.5,
		x: -1000
	});
}  

buttonTextAnimation()



let up = document.querySelector('.far')

//Hide Button 
window.onscroll = () => scrollFunction();

// Icon Appear on Scroll
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

// AOS
AOS.init({
	duration: 1200,
})