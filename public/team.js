$(document).ready(function(){

	$(".header").load("./header.html");
	$(".contenido").load("./contenido.html");
	$(".footer").load("./footer.html");


	
	$(".navegar").click(function(event){
		event.preventDefault();
		let pagina = $(this).data('pagina');
		$('.contenido').load(pagina);

	});


/*
	function llamarcontenido(dato){
		var c = dato.dataset.cont;
		console.log(c);
	
	alert("Que hay !!!!!")
	$(".contenido").load('./'+c+'.html');
	}
	*/
});