
const offer1 = document.getElementById("offer1");
const offer2 = document.getElementById("offer2");

let showOffer = true;

function toggleOffers(){
    if(showOffer){
        offer1.classList.add('show');
        offer2.classList.remove('show');
    } else {
        offer1.classList.remove('show');
        offer2.classList.add('show');
    }
    showOffer = !showOffer;
}

setInterval(toggleOffers, 3000);