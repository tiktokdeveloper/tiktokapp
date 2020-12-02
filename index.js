function paginaCargada() {


  let boton = document.getElementById('boton');
  let areaUsuario = document.getElementById('usuario')



  boton.addEventListener('click', function () {
    
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then((data)=>{
        console.log(data)
        areaUsuario.innerHTML = data.results[0].email

      })

  })

}



document.addEventListener("DOMContentLoaded", paginaCargada)