
const message = document.getElementById("message-form");
const env = function(event){
    event.preventDefault();
    emailjs.send("service_r7sqahy","template_kvftf5f",{
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }).then(function(response) {
        document.getElementById("response-message").textContent = "✅ Message envoyé avec succès !";
        document.getElementById("message-form").reset(); // réinitialise le formulaire
    }, function(error){
        document.getElementById("response-message").textContent = "❌ Erreur lors de l'envoi. Réessayez.";
        console.error("Erreur EmailJS:",error);
    });
}
message.addEventListener("submit",env);