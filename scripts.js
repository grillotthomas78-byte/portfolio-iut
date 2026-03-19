// Sticky navbar
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// Apparition animée
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. EFFET MACHINE À ÉCRIRE (TYPEWRITER) ---
    // Cible l'élément dans le Hero de l'accueil
    const typewriterElement = document.getElementById('typewriter');
    
    if (typewriterElement) {
        const textArray = ["Bienvenue sur mon portfolio", "Développeur passionné", "Étudiant en BUT Informatique"];
        let arrayIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const currentText = textArray[arrayIndex];
            
            if (isDeleting) {
                typewriterElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50; // Plus rapide quand on efface
            } else {
                typewriterElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100; // Vitesse normale
            }

            if (!isDeleting && charIndex === currentText.length) {
                // Texte entier tapé, pause avant effacement
                isDeleting = true;
                typeSpeed = 2000; 
            } else if (isDeleting && charIndex === 0) {
                // Texte effacé, passer au suivant
                isDeleting = false;
                arrayIndex = (arrayIndex + 1) % textArray.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }

        // Démarrer l'effet
        type();
    }

    // --- 2. ANIMATION D'APPARITION AU SCROLL (FADE-IN) ---
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionnel : arrêter d'observer après l'apparition
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Déclenche quand 10% de l'élément est visible
    });

    fadeElements.forEach(el => observer.observe(el));
});