//preloader


// toggle mobile menu

const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.navbar__menu');

function toggleMenu() {
	if (menu.classList.contains("active")){
		menu.classList.remove("active");
		toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
	} else {
		menu.classList.add("active");
		toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
	}
} 

toggle.addEventListener('click', toggleMenu, false);

// validacion email




//lightbox