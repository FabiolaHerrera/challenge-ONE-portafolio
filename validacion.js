function validar(){
   var todo_correcto = true;
  if(document.getElementById('nombre').value.length < 50 ){
     var todo_correcto = false;
     alert("Nombre: Máximo 50 caracteres.");
  }
  if(document.getElementById('asunto').value.length < 50 ){
    var todo_correcto = false;
    alert("Asunto: Máximo 50 caracteres.");
 }
 return todo_correcto;
}



  