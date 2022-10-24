const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

images.forEach((currentItem, index) => {
    const thisImage = images[index];
    items.innerHTML += `
    <div class="item">
        <div class="item-txt">
            <h2>${thisImage.title}</h2>
            <p>${thisImage.text}</p>
        </div>
        <img src="${thisImage.image}">
    </div>`
    
    thumbs.innerHTML += `
    <div class="thumb">
        <img src="${thisImage.image}">
    </div>`

})


const prevBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");

// Lo stato iniziale dello slider
const sliderItems = document.getElementsByClassName("item");
const thumbItems = document.getElementsByClassName("thumb");

let activeItem = 0;
sliderItems[activeItem].classList.add("item-active");
thumbItems[activeItem].classList.add("thumb-active");

// Navigazione
nextBtn.addEventListener("click", function () {
  // Tolgo active dall'immagine corrente
  removeClassActive(activeItem);
  // Posso andare avanti finchè esiste l'immagine successiva (penultimo elemento)
  if (activeItem < sliderItems.length - 1) {
    //  incremento la posizione
    activeItem++;
  } else {
    activeItem = 0
  }
  //  aggiungo active alla nuova posizione
  addClassActive (activeItem);
});

prevBtn.addEventListener("click", function () {
  removeClassActive(activeItem);
  // Posso andare indietro finché esisite l'immagine precedente (il secondo elemento)
  if (activeItem > 0) {
    activeItem--;
  } else {
    // Altrimenti riparto dall'ultimo elemento
    activeItem = sliderItems.length - 1;
  }
  addClassActive (activeItem);
});

// Aggiungere spostamento dello slider al click sul thumb
for (let i = 0; i < thumbItems.length; i++) {
    const thisThumb = thumbItems[i];
    thisThumb.addEventListener("click", function() {
        // Cancellare active da slider item e dal thumb
        removeClassActive(activeItem);
        // Aggiornare la posizione attuale
        activeItem = i;
        // Aggiungere active alla nuova posizione dell'immagine e del thumb
        addClassActive (activeItem);
    });
}

function addClassActive (index) {
  sliderItems[activeItem].classList.add("item-active");
  thumbItems[activeItem].classList.add("thumb-active");
}

function removeClassActive (index) {
  sliderItems[activeItem].classList.remove("item-active");
  thumbItems[activeItem].classList.remove("thumb-active");
}