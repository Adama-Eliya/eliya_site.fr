// 📢 Fonction pour afficher une alerte quand on clique sur le bouton "Envoyer un message"
const showAlert = function(){
    alert("Merci de me contacter ! Je vous répondrai bientôt 😊");
}

// 🌙 Mode Sombre : Activer/Désactiver le dark mode

const togg = document.getElementById("toggle-mode");
const darkMode = function(){
    document.body.classList.toggle("dark-mode");
    document.querySelectorAll("section, footer,div,article").forEach(section => { 
        section.classList.toggle("dark-mode"); 
    });
}
togg.addEventListener('click',darkMode);


document.querySelectorAll(".skills-list li").forEach(skill => {
    skill.addEventListener("mouseover", () => {
        skill.style.transform = "scale(1.1)";
        skill.style.transition = "0.3s";
    });

    skill.addEventListener("mouseleave", () => {
        skill.style.transform = "scale(1)";
    });
});
