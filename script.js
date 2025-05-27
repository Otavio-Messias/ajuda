// ScrollReveal para animações
ScrollReveal().reveal('.hero', { delay: 200 });
ScrollReveal().reveal('.about', { delay: 400 });
ScrollReveal().reveal('.features', { delay: 600 });
ScrollReveal().reveal('.newsletter', { delay: 800 });

// Função para rolar até a seção de newsletter
function scrollToNewsletter() {
  const section = document.getElementById("newsletter");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    console.warn("Seção 'newsletter' não encontrada.");
  }
}

// Carrossel de imagens
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

// Função para mostrar o próximo slide
function showNextSlide() {
  // Remover a classe 'active' de todos os slides
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  // Atualizar o índice para o próximo slide
  slideIndex = (slideIndex + 1) % slides.length;

  // Adicionar a classe 'active' ao slide atual
  slides[slideIndex].classList.add('active');
}

document.querySelectorAll('.zoomable-image').forEach(img => {
  img.addEventListener('click', function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = this.src;
    lightbox.classList.add('active');
  });
});

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}


// Chamar a função para avançar de slide a cada 3 segundos
setInterval(showNextSlide, 5500);