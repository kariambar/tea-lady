
function mostrarData(){
	var name = document.getElementById("nombre").value;
	var lastName = document.getElementById("apellido").value;
	var mail = document.getElementById("email").value;
	var adress = document.getElementById("direccion").value;
	var celular = document.getElementById("telefono").value;
	var opcionDeTe = document.getElementById("teelejido").value;
	var imprimirDatos = document.getElementById("clientes");


	imprimirDatos.innerHTML = "<br>Nombre: " + name + 
	"<br>Apellido: " + lastName + "<br>Dirección: " 
	+ adress + "<br>Correo: " + mail + "<br>Teléfono: " +
	 celular + "<br>Té seleccionado: " + opcionDeTe;
}

