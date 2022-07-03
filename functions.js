function populate(arr) {

    let cards = document.querySelector(".cards");


    for (let i = 0; i < arr.length; i++) {
        cards.append(createCard(arr[i]));
    }

}


function createCard(obj) {

    console.log(obj);
    let divCard = document.createElement('div');
    let img = document.createElement('img');
    let cardName = document.createElement('h3');
    let cardEmail = document.createElement('h4');
    let hr = document.createElement('hr');
    let dateCard = document.createElement('h5');
    let ageCard = document.createElement('h5');
    divCard.appendChild(img);
    divCard.appendChild(cardName);
    divCard.appendChild(cardEmail);
    divCard.appendChild(hr);
    divCard.appendChild(dateCard);
    divCard.appendChild(ageCard);

    divCard.classList.add("card");
    img.classList.add("image");
    cardName.classList.add("card-name");
    cardEmail.classList.add("card-email");
    hr.classList.add("hr")
    dateCard.classList.add("date");
    ageCard.classList.add("age");

    img.src = obj.picture.medium;
    cardName.textContent = obj.name.first;
    cardEmail.textContent = obj.email;
    dateCard.textContent = obj.date;
    ageCard.textContent = obj.age;

    return divCard;

}

//functie ce primeste un numar si pune pe pagina numarul de butoane

function createNumbers(number) {

    let pageNumbers = document.querySelector(".buttons");

    for (let i = 0; i < number.length; i++) {

        i
    }
}



function createButton(number) {
    let divButtons = document.querySelector(".buttons");
    let button = document.createElement('button');
    button.textContent = number;
    divButtons.appendChild(button);
}