const miniaturas = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const botonesFlecha = document.querySelectorAll(".modal button")
let rutasImg = [];
let imgActual = 0;//puede tener el valor que quiera, no se usará hasta que haga click por primera vez.

miniaturas.forEach( (miniatura,indice) => {

	rutasImg.push(miniatura.getAttribute("href"));

	miniatura.addEventListener("click", evento => {
		evento.preventDefault();

		imgActual = indice;

		imgModal.setAttribute("src",rutasImg[imgActual]);


		modal.classList.add("visible");
	});
});

modal.addEventListener("click", function(){
	this.classList.remove("visible");
});

botonesFlecha.forEach((boton,indice) => {
	boton.addEventListener("click", evento => {
		evento.stopPropagation();

		// restar o sumar a imgActual, al llegar a 0 paso a la última y al llegar a la
		// ultima paso a 0

		if(indice == 0){
			//atrás
			imgActual = imgActual > 0 ? imgActual - 1 : rutasImg.length - 1;

		}else{
			//adelante
			imgActual = imgActual < rutasImg.length - 1 ? imgActual + 1 : 0;
		}
	
		imgModal.setAttribute("src",rutasImg[imgActual]);

	});
});