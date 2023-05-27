async function getData() {

    await BodegasDelSurCollection.get()
    .then((results) => {
        const data = results.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        BodegasDelSur.push(...data)

    })

    let id = location.search.split("?id=").filter(Number)
    let selectId = id[0]
    let vino = eventos.filter(evento => evento.id == selectId)

    detalleVista(vino)
}

getData()

function detalleVista(vino) {
    var detalleVista = document.getElementById("contenedor_detalles");
    detalleVista.innerHTML = `
                <div class="contenedor">
                    <div class="titulo_tarjeta">
                        <p class="titulo_uno">${vino.name}</p>
                    </div>
                    <div class="general">
                        <div class="fotos_detalles">
                            <img src="${vino.image}" class="card-img-top zoomable" alt="${vino.name}">
                        </div>
                        <div class="info_detalles">
                            <p class="detalle">Descripción: ${vino.description}</p>
                            <div class="detalles_abajo">
                                <div class="detalles_uno">
                                    <p class="detalle">Lugar: ${vino.place}</p>
                                </div>
                                <div class="detalles_dos">
                                    <p class="detalle">Categoría: ${vino.category}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="precio">
                        <p class="detalle">Precio: $${vino.price}</p>
                    </div>
                </div>
            `;
}

getDB();
