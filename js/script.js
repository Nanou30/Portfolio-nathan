
const formulaire = document.getElementById("form-contact");
const confirmation = document.getElementById("confirmation");

formulaire.addEventListener("submit", function(event) {
    event.preventDefault();

    confirmation.style.display = "block";

    formulaire.reset();
});
console.log( "Message envoyé avec succes" );