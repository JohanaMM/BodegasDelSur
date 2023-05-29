const BodegasDelSurCollection = firebase.firestore().collection("BodegasDelSur")
// llama a la coleccion que creamos en firebase database
let dataVinos = []
let BodegasDelSur = []
let vinosTintos = []
let vinosBlancos = []
let vinosRosados = []
let vinosOrganicosYveganos = []
let arrayAfiltrar = []
let form = document.getElementById("form")
let card = document.getElementById("cartas")
let searchDiv = document.getElementById("search")

async function getDB() {

    await BodegasDelSurCollection.get()
        .then((results) => {
            const data = results.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            BodegasDelSur.push(...data)

        })
    navegacion("inicio")
};

getDB()


var botonNav = document.getElementsByClassName("button")

for (var i = 0; i < botonNav.length; i++) {
    const elementos = botonNav[i];
    console.log(elementos)
    elementos.addEventListener("click", function (e) {
        navegacion(e.target.id);
    })
}

function navegacion(id) {
    switch (id) {
        case "vinosTintos":
            arrayAfiltrar = BodegasDelSur.filter(vino => vino.category === "Tinto");
            card.style.display = "flex";
            searchDiv.style.display = "flex";
            form.style.display = "none";
            ocultarMapa();
            break;
        case "vinosBlancos":
            arrayAfiltrar = BodegasDelSur.filter(vino => vino.category === "Blanco");
            form.style.display = "none";
            card.style.display = "flex";
            searchDiv.style.display = "flex";
            ocultarMapa();
            break;
        case "vinosRosados":
            arrayAfiltrar = BodegasDelSur.filter(vino => vino.category === "Rosado");
            form.style.display = "none";
            card.style.display = "flex";
            searchDiv.style.display = "flex";
            ocultarMapa();
            break;
        case "vinosOrganicosYveganos":
            arrayAfiltrar = BodegasDelSur.filter(vino => vino.category === "Organicos y Veganos");
            form.style.display = "none";
            card.style.display = "flex";
            searchDiv.style.display = "flex";
            ocultarMapa();
            break;
        case "Contact":
            form.style.display = "flex";
            card.style.display = "none";
            searchDiv.style.display = "none";
            imprimirForm();
            mostrarMapa();
            break;
        default:
            card.style.display = "flex";
            form.style.display = "none";
            searchDiv.style.display = "flex";
            arrayAfiltrar = BodegasDelSur;
            ocultarMapa();
            break;
    }
    display(arrayAfiltrar);
}

function ocultarMapa() {
    const mapas = document.getElementsByClassName("mapa");
    for (let i = 0; i < mapas.length; i++) {
        mapas[i].style.display = "none";
    }
}

function mostrarMapa() {
    const mapas = document.getElementsByClassName("mapa");
    for (let i = 0; i < mapas.length; i++) {
        mapas[i].style.display = "block";
    }
}

// Llamada inicial para ocultar el mapa al cargar la página
ocultarMapa();

  function imprimirForm() {
    document.getElementById("form").innerHTML = `
      <form action="" name="contactForm" id="contactForm">
        <h1>Contactanos</h1>
        <label for="nombre"><i class="fa-solid fa-user"></i></label>
        <input type="text" name="nombre" placeholder="Nombre"><br>
        <label for="email"><i class="fa-solid fa-envelope"></i></label>
        <input type="email" name="email" placeholder="Email"><br>
        <label for="date"><i class="fa-solid fa-calendar"></i></label>
        <input type="date" name="date"><br>
        <label for="type"><i class="fa-solid fa-qrcode"></i></label>
        <select id="type" name="type">
          <option value="Varios" selected>Varios</option>
          <option value="Reclamo">Reclamo</option>
          <option value="Sugerencia">Sugerencia</option>
          <option value="Felicitaciones">Felicitaciones</option>
        </select><br>
        <label for="mensaje"><i class="fa-solid fa-inbox"></i></label>
        <textarea name="mensaje" placeholder="mensaje"></textarea><br>
        <input type="subsmit" class="button_contact" value="Enviar">
      </form>
      <div id = "texto">
      <p>No te pierdas todas las ofertas y novedades de Bodegas del Sur que tenemos para vos.</p>
      <h2><i class="fa-solid fa-phone"></i> 652 188 9190</h2>
      <h2><i class="fa-solid fa-location-dot"></i> Argentina. </h2>
      </div>
      <!-- MAP grande -->
      <div id="mapagrande" class="mapa">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8642497583137!2d-58.387166925130195!3d-34.607594057701455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac5466ccb9b%3A0x57419e9c86945b8f!2sBartolom%C3%A9%20Mitre%201280%2C%20C1036AAX%20CABA!5e0!3m2!1ses!2sar!4v1685136060146!5m2!1ses!2sar" width="650" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     </div>
     <!-- MAP chico -->
     <div id="mapamediano">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8642497583137!2d-58.387166925130195!3d-34.607594057701455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac5466ccb9b%3A0x57419e9c86945b8f!2sBartolom%C3%A9%20Mitre%201280%2C%20C1036AAX%20CABA!5e0!3m2!1ses!2sar!4v1685136060146!5m2!1ses!2sar" width="400" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <!-- MAP chico -->
    <div id="mapachico">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8642497583137!2d-58.387166925130195!3d-34.607594057701455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac5466ccb9b%3A0x57419e9c86945b8f!2sBartolom%C3%A9%20Mitre%201280%2C%20C1036AAX%20CABA!5e0!3m2!1ses!2sar!4v1685136060146!5m2!1ses!2sar" width="260" height="260" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    `;


    let form = document.querySelector("form");
  }

function display(array) {
    var html = "";

    array.map((vino) => {
        html += `
        <div class="card h-150">
          <img src="${vino.image}" class="card-img-top" alt="${vino.name}">
          <div class="card-body">
            <h5 class="card-title">${vino.name}</h5>
            <p class="card-price ms-2"><small>$${vino.price}</small></p>
            <p class="card-text">${vino.category}</p>
            <div class="card-footer">
              <a href=""pages/detalles.html?id=${vino.id}"" class="btn btn-outline-info" onclick="viewDetails('${vino.id}')">Ver detalles</a>
            </div>
          </div>
        </div>
      `;
    });

    document.getElementById("cartas").innerHTML = html;
}


/* Carrusel */
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}


/* search */
var search = document.getElementById("search");

// Agregar un evento de escucha para el evento "keyup" en el elemento con ID "search"
search.addEventListener("keyup", function (vino) {
    capturaVino(vino);
});

function capturaVino(vino) {
    // Obtener el valor ingresado en el campo de búsqueda
    var datoInput = vino.target.value;

    // Eliminar espacios en blanco y convertir a minúsculas
    var datosSinEspacios = datoInput.trim().toLowerCase();

    // Filtrar el array "BodegasDelSur" en base al nombre del vino
    var arrayAfiltrar = BodegasDelSur.filter(function (vino) {
        return vino.name.toLowerCase().includes(datosSinEspacios);
    });

    // Mostrar los resultados filtrados
    display(arrayAfiltrar);
}

const checkboxTinto = document.getElementById('tinto');
const checkboxBlanco = document.getElementById('blanco');
const checkboxRosado = document.getElementById('rosado');
const checkboxVegano = document.getElementById('vegano');
const checkboxMenorPrecio = document.getElementById('menorPrecio');
const checkboxMayorPrecio = document.getElementById('mayorPrecio');

// Asignar la función navegacion2() al evento "change" de los checkboxes
checkboxTinto.addEventListener('change', navegacion2);
checkboxBlanco.addEventListener('change', navegacion2);
checkboxRosado.addEventListener('change', navegacion2);
checkboxVegano.addEventListener('change', navegacion2);
checkboxMenorPrecio.addEventListener('change', navegacion2);
checkboxMayorPrecio.addEventListener('change', navegacion2);

// Función para filtrar y ordenar los datos
function navegacion2() {
    // Obtener los valores seleccionados de los checkboxes
    const filtrosSeleccionados = [];
    if (!checkboxTinto.checked && !checkboxBlanco.checked && !checkboxRosado.checked && !checkboxVegano.checked) {
        // Si no se selecciona ningún filtro de categoría, mostrar todos los vinos
        arrayAfiltrar = BodegasDelSur;
    } else {
        // Verificar qué checkboxes están marcados y agregar los filtros correspondientes al array
        if (checkboxTinto.checked) {
            filtrosSeleccionados.push("Tinto");
        }
        if (checkboxBlanco.checked) {
            filtrosSeleccionados.push("Blanco");
        }
        if (checkboxRosado.checked) {
            filtrosSeleccionados.push("Rosado");
        }
        if (checkboxVegano.checked) {
            filtrosSeleccionados.push("Organicos y Veganos");
        }

        // Filtrar el array de BodegasDelSur en base a los filtros seleccionados
        arrayAfiltrar = BodegasDelSur.filter(vino => filtrosSeleccionados.includes(vino.category));
    }

    // Ordenar el array filtrado en base al precio
    if (checkboxMenorPrecio.checked && checkboxMayorPrecio.checked) {
        // No hacer nada si se seleccionan ambos checkboxes de precio
    } else if (checkboxMenorPrecio.checked) {
        arrayAfiltrar.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (checkboxMayorPrecio.checked) {
        arrayAfiltrar.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    // Mostrar los resultados filtrados y ordenados
    display(arrayAfiltrar);
}

//detalles


// // Función para mostrar los detalles de un producto
// function showDetails(vinoId) {
//     // Buscar el producto correspondiente al ID
//     const producto = BodegasDelSur.find(producto => producto.id === vinoId);
//     if (producto) {
//         // Mostrar los detalles del producto
//         console.log("Detalles del producto:");
//         console.log("ID:", producto.id);
//         console.log("Nombre:", producto.nombre);
//         console.log("Precio:", producto.precio);
//     } else {
//         console.log("No se encontró un producto con el ID especificado:", vinoId);
//     }

//     // Redirigir a detalle.html
//     window.location.href = "pages/detalle.html";
// }

// // Evento clic en el botón "Ver detalles" de un producto
// document.addEventListener('DOMContentLoaded', function () {
//     const buttons = document.querySelectorAll('.ver-detalles');

//     buttons.forEach(button => {
//         button.addEventListener('click', function () {
//             const vinoId = parseInt(button.dataset.vinoId);
//             showDetails(vinoId);
//         });
//     });
// });