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