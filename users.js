fetch ('https://randomuser.me/api/?nat=es')
.then(response => response.json())
.then(json => console.log(json))
        

// USER

const user =
{
    "name": "Victoria",
    "lastName": "Diaz",
    "age": 27 ,
    "date": "06-04-1996" ,
    "ID": "DNI-01450245-J",
    "email": "victoria.diaz@example.com",
    "country": "España",
    "city": "Valladolid",
    "street": "Calle de Alberto Aguilera 2326",
    "postalCode": "35062",
    "gender": "Female",
    "phone": "986-737-723",
    "image": "https://randomuser.me/api/portraits/women/3.jpg",
    "jobTitle": "Administrativo",
    "idioma1": "Ingles Avanzado",
    "idioma2": "Italiano Medio",
    "idioma3": "Frances Basico",
}


console.log(user)

// Insertamos Nombre
document.getElementById("name").innerHTML = `${user.name} ${user.lastName} / ${user.jobTitle}`

// Datos Personales
document.getElementById("age").innerHTML = `${user.age}`
document.getElementById("date").innerHTML = `${user.date}`
document.getElementById("phone").innerHTML = `Numero de telefono: ${user.phone}`
document.getElementById("ID").innerHTML = `${user.ID}`
document.getElementById("email").innerHTML = `${user.email}`


// INFO
document.getElementById("info").onclick = function() {
    Swal.fire({
        title: '<strong>Información Adicional</strong>',
        icon: 'info',
        html: 
        "<ul><li>Genero: Femenino</li><li>País: España</li><li>Ciudad: Valladolid</li> <li>Codigo Postal: 3502</li> <li>Direccón: Calle de Alberto Aguilera 2326 </li></ul>",
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> OK',
        confirmButtonAriaLabel: 'Thumbs up, great!',
      })
}

// IDIOMAS
document.getElementById("idioma1").innerHTML = `${user.idioma1}`
document.getElementById("idioma2").innerHTML = `${user.idioma2}`
document.getElementById("idioma3").innerHTML = `${user.idioma3}`



//BACKGROUND
const background = document.getElementsByClassName('bg-alternative');

for (let i = 0; background.length;i++) {
  background[i].style.backgroundColor = 'rgb(252, 255, 160)';

}




