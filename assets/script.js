const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Section du carousel dynamique //

// Sélectionner les éléments nécessaires
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const tagline = document.getElementById('tagline');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

// Fonction pour mettre à jour l'image, le texte et les points indicateurs
const updateCarousel = () => {
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
	tagline.innerHTML = slides[currentSlide].tagLine; // ajout dynamique de la tagline de l'image en cours d'affichage
	dots.forEach((dot, index) => {
		if (index === currentSlide) {
			dot.classList.add('dot_selected'); //ajoute la class "dot_selected" dynamiquement au dot selectionné.
		} else {
			dot.classList.remove('dot_selected');
		}
	});
};

// Ajouter des event listeners aux flèches
leftArrow.addEventListener('mousedown', (event) => {
	if (event.button === 0) { // filtre clique gauche
		currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
		updateCarousel(); // appel de la fonction pour mettre à jour l'image, le texte et les points indicateurs
	} else if (event.button === 2) {
		console.log('Mauvais clique de la souris !');
	}
});

rightArrow.addEventListener('mousedown', (event) => {
	if (event.button === 0) { // filtre clique gauche
		currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
		updateCarousel(); // appel de la fonction pour mettre à jour l'image, le texte et les points indicateurs
	} else if (event.button === 2) {
		console.log('Mauvais clique de la souris !');
	}
});

// Ajouter des event listeners aux points indicateurs, quand on clique sur un dot il devient "dot_selected" a travers la fonction updateCarousel()
dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		currentSlide = index;
		updateCarousel();
	});
});

 // Empêcher le menu contextuel sur clic droit
 leftArrow.addEventListener('contextmenu', (event) => event.preventDefault());
 rightArrow.addEventListener('contextmenu', (event) => event.preventDefault());