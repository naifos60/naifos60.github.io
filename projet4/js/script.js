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
/********** variables *********/
let dots = document.querySelector(".dots");	
const arrowRight = document.querySelector(".arrow_right"); 
const arrowLeft = document.querySelector(".arrow_left");
const img = document.querySelector(".banner-img");

/************ function *********/
function next(){
	if(img.dataset.index < slides.length - 1){	
		img.dataset.index++; // incrémente l'index
		document.querySelector(".dot_selected").nextElementSibling.classList.add("dot_selected");// applique la classe séléctionné au bullet points suivant
	    document.querySelector(".dot_selected").classList.remove("dot_selected"); // retire la classe séléctionné au bullet points
		img.setAttribute("src", "./assets/images/slideshow/" + slides[img.dataset.index].image); // affiche l'image ce trouvant à lindex suivant de notre tableau slides[] 
	    img.nextElementSibling.innerHTML = slides[img.dataset.index].tagLine; // affiche le texte ce trouvant à lindex suivant de notre tableau slides[] 
	}else{
		img.dataset.index = 0; // applique la valeur 0 à l'index
		img.setAttribute("src", "./assets/images/slideshow/" + slides[img.dataset.index].image); // affiche l'image ce trouvant dans lindex 0 de notre tableau slides[]
	    img.nextElementSibling.innerHTML = slides[img.dataset.index].tagLine; // affihe le texte ce trouvant dans l'index 0 de notre tableau slides[]
		dots.firstElementChild.classList.add("dot_selected"); // applique la classe selectionné au premier bullet points
		dots.lastElementChild.classList.remove("dot_selected"); // retire la classe séléctionné du dernier bullet points
	}
};

function previous(){
	if(img.dataset.index > 0){	
		img.dataset.index--; // décrémente l'index
		document.querySelector(".dot_selected").previousElementSibling.classList.add("dot_selected"); // applique la classe séléctionné au bullet points précédent
	    document.querySelector(".dot_selected").nextElementSibling.classList.remove("dot_selected"); // retire la classe séléctionné au bullet points
		img.setAttribute("src", "./assets/images/slideshow/" + slides[img.dataset.index].image); // affiche l'image ce trouvant à lindex précédent de notre tableau slides[]
	    img.nextElementSibling.innerHTML = slides[img.dataset.index].tagLine; // affiche le texte ce trouvant à lindex précédent de notre tableau slides[]
	}else{
		img.dataset.index = slides.length - 1; // applique la valeur du dernier index de notre tableau slide[]
		 img.setAttribute("src", "./assets/images/slideshow/" + slides[img.dataset.index].image); // affiche l'image ce trouvant au dernier index de notre tableau slides[]
	     img.nextElementSibling.innerHTML = slides[img.dataset.index].tagLine; // affiche le texte ce trouvant au dernier index de notre tableau slides[]
		 dots.lastElementChild.classList.add("dot_selected"); // applique la classe selectionné au dernier bullet points
		 dots.firstElementChild.classList.remove("dot_selected"); // retire la classe séléctionné du premier bullet points
	}
};
/******** carrousel **********/
for(let i = 0; i < slides.length; i++){
	const content = document.createElement("span");
	content.classList.add("dot")
	dots.appendChild(content);
	dots.firstElementChild.classList.add("dot_selected");	
};

arrowRight.addEventListener("click", function(){
	console.log("suivant");	
	next();
	
});

arrowLeft.addEventListener("click", function(){
	console.log("précédent");
	previous();
});







