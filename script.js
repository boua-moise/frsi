// Filtrage des ressources
function filterResources(category) {
    const resourceCards = document.querySelectorAll('.resource-card');
    resourceCards.forEach(card => {
        if (category === 'tous' || card.classList.contains(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Inscription aux événements
function inscriptionEvenement() {
    alert('Inscription confirmée ! Vous recevrez un email de confirmation.');
}

// Validation et soumission du formulaire de contact
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nom = document.getElementById('nom').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (nom && email && message) {
                alert('Message envoyé avec succès !');
                contactForm.reset();
            } else {
                alert('Veuillez remplir tous les champs.');
            }
        });
    }
});
// gestion des slides 
let slideIndex = 0;
showSlides(slideIndex);

// Change slide manually
function changeSlide(n) {
  showSlides(slideIndex += n);
}

// Show slides
function showSlides(n) {
  let slides = document.querySelectorAll(".slide");

  if (n >= slides.length) {
    slideIndex = 0;
  } 
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => slide.style.display = "none");
  slides[slideIndex].style.display = "block";
}

// Auto-slide every 5 seconds
setInterval(() => {
  changeSlide(1);
}, 5000);
// responsible
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const mainContent = document.querySelector('main');

  toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('active'); // Active ou désactive le menu
      mainContent.classList.toggle('menu-open'); // Modifie le layout principal
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.btn');

  if (button) { // Vérifie si le bouton existe
      button.addEventListener('click', () => {
          window.location.href = 'https://forms.gle/CnaUmpbF8kcM39qi7'; // Remplacez par le lien de votre formulaire
      });
  } else {
      console.error("Le bouton avec la classe '.btn' est introuvable.");
  }
});


