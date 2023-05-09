

let localData = "BODEGONESDELSUR.js"

// Ir a detalles
function viewDetails(cardId) {
	window.location.href = `./detalles.html?id=${cardId}`
}

// card individuals
function generateCard(bebidas, cardClassColor, withColour){

	return `<div class="mb-4 d-flex justify-content-center" onclick="viewDetails(${bebidas._id})">
	<div class="card ${withColour ? "card-".concat(cardClassColor) : ""} h-100">
		<img src="${bebidas.image}" class="card-img-top" alt="${bebidas.name} image">
		<div class="card-body">
		<h5 class="card-title text-center">${bebidas.name}</h5>
		<div class="d-flex mb-0 justify-content-evenly">
			<p class="card-price d-inline mb-0"><strong>$${bebidas.price}</strong></p>
		</div>
		<hr class="mb-2 mt-2">
			<p class="card-text mb-2">${bebidas.description}</p>
		</div>
		<div class="card-footer">
		<btn onclick="viewDetails(${bebidas._id})"</btn>
		</div>
	</div>
</div>
`
}


// todas las cards
function generateCards(myObj, categoriesArray){

	let cardsHTML = `<div class="d-flex flex-wrap my-5 justify-content-around">`
	let withColors = JSON.parse(sessionStorage.getItem("colors")) === true;																																								//Discomment this line for no multiple colors

	if (myObj.events.length != 0){
		myObj.events.forEach((event) => {
			let colorStyle = colorStyles[categoriesArray.indexOf(event.category) % colorStyles.length]
			cardsHTML += generateCard(event, myObj.currentDate, colorStyle, withColors)
		})
	} else {
		cardsHTML += `<div class="d-flex flex-column"> <p class="text-center" style="color:white;font-size:3rem;">Oops, no coincidences!</p><p class="text-center" style="color:white;font-size:2rem;">Try adjusting your search parameters</p></div>`
	}
	return cardsHTML + `</div>`
}
