function agregar(){
	var tareas = document.getElementById('tarea').value;
	document.getElementById('tarea').value = "";
	var nuevasTareas = document.createElement('div');
	var cont = document.getElementById('contenedor');

	//validacion que textarea no este vacio
	if(tareas == null || tareas.length == 0){
		alert('¡Error ! Debe ingresar tarea');
		return false;
	}

	//checkbox
	var chck = document.createElement('input');
	chck.type = 'checkbox';
	chck.setAttribute('class', 'check');
	var basura = document.createElement('span');
	basura.classList.add('fa', 'fa-trash-o');
	var cora = document.createElement('span');
	cora.classList.add('fa', 'fa-heart');

	//Tareas
	var textoNuevaTarea = document.createTextNode(tareas);
	var elementoContenedor = document.createElement('span');
	elementoContenedor.appendChild(textoNuevaTarea);


	nuevasTareas.appendChild(chck);
	nuevasTareas.appendChild(basura);
	nuevasTareas.appendChild(cora);

	nuevasTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevasTareas);

	//tachado
	chck.addEventListener('click', function(){
		elementoContenedor.classList.toggle('tachado'); //agrego clase tachado a span contenedor de tareas, se activa al hacer click
	});

	//remover tarea
	basura.addEventListener('click', function(){
		cont.removeChild(nuevasTareas); //remueve tareas agregadas al div contenedor, se activa al hacer click
	});

	//corazon rojo
	cora.addEventListener('click', function(){
		cora.classList.toggle('red'); //agrega clase red al elemento span del corazon
	});
}







