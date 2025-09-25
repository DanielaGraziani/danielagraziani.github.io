
document.addEventListener('DOMContentLoaded', () => {
  const pageText = document.getElementById('page-text');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const pageIllustration = document.querySelector('.page-illustration');

  let currentPageIndex = 0;
  let textTypingTimeout; // Para el efecto de escritura

  // === Definición de capítulos ===
  const chapters = [
    {
      type: "image",
      image: "/images/barb.png",
      text: "¡Hoy es un día muy especial, la protagonista está de cumpleaños!",
      title: "El Encuentro"
    },
    {
      type: "image",
      image: "/images/scooter.png",
      text: "La protagonista de esta historia es una persona muy divertida, aventurera y graciosa.",
      title: "La Aventura"
    },
    {
      type: "image",
      image: "/images/friends.png",
      text: "Todos quieren estar cerca de ella, porque su energía es la mejor del mundo.",
      title: "Dulces Memorias"
    },
    {
      type: "image",
      image: "/images/bat.png",
      text: "Un día puede ser tu superhéroe favorito, tomando juguito de lechosa y salvándote con una risa.",
      title: "El Encuentro"
    },
    {
      type: "image",
      image: "/images/coffee.png",
      text: "Al siguiente, puede ser esa amiga que escucha, que aconseja y que acompaña.",
      title: "La Aventura"
    },
    {
      type: "image",
      image: "/images/reading.png",
      text: "Pero siempre, siempre, es alguien que con su magia transforma lo cotidiano en algo extraordinario.",
      title: "Dulces Memorias"
    },
    {
      type: "image",
      image: "/images/bd.png",
      text: "Y esa magia suya me alcanza incluso desde lejos.",
      title: "Dulces Memorias"
    },
    {
      type: "image",
      image: "/images/gifs.png",
      text: "Por eso, no importa la distancia: de alguna manera y como por arte de magia, siempre estoy contigo.",
      title: "Dulces Memorias"
    },
    {
      type: "image",
      image: "/images/hp.png",
      text: "Y ya que hablamos de magia: solo la maga que conozco (sí, tú) tiene el poder de apagar estas velas. Inténtalo.",
      title: "Dulces Memorias"
    },
    {
      type: "cake",
      text: "¡Presiona el botón y al soplar pide un deseo!\n¡Feliz Cumpleaños, amorcito! Te amo como todos los píxeles mágicos que hay en el mundo 💖",
      title: "¡Feliz Cumpleaños!"
    }
  ];

  // === Efecto máquina de escribir ===
  function typeWriterEffect(text, element, delay = 50) {
    let i = 0;
    element.innerHTML = ''; // Limpiar texto previo
    clearTimeout(textTypingTimeout);

    function type() {
      if (i < text.length) {
        if (text.charAt(i) === '\n') {
          element.innerHTML += '<br>';
        } else {
          element.innerHTML += text.charAt(i);
        }
        i++;
        textTypingTimeout = setTimeout(type, delay);
      }
    }
    type();
  }

  // === Actualización de páginas ===
  function updateStorybook() {
    const chapter = chapters[currentPageIndex];

    if (chapter.type === 'cake') {
      // 🎂 Renderizar torta
      pageIllustration.innerHTML = `
        <div class="cake-container flex flex-col items-center justify-center h-full">
          <div class="cake relative" id="cake"></div>
          <div id="birthdayText" class="text-center"></div>
        </div>
      `;
      typeWriterEffect(chapter.text, pageText);

      // ✅ Crea velas + prepara torta
      startCakeAnimation();

      // ✅ Cambia el botón siguiente
      nextBtn.textContent = "Soplar velas";
      nextBtn.onclick = () => {
        startMicDetection();     // activa el micro
        nextBtn.disabled = true; // se desactiva después
      };
    } else {
      // Imagen normal
      pageIllustration.innerHTML = `
        <img id="page-image" src="${chapter.image}" alt="Ilustración" 
          class="w-full h-full object-contain pixel-img">
      `;
      typeWriterEffect(chapter.text, pageText);

      // 🔄 restaurar comportamiento normal del botón
      nextBtn.textContent = "Siguiente →";
      nextBtn.onclick = () => {
        if (currentPageIndex < chapters.length - 1) {
          currentPageIndex++;
          updateStorybook();
        }
      };
    }

    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex === chapters.length - 1 && chapter.type !== 'cake';
  }

  // === Navegación anterior ===
  prevBtn.addEventListener('click', () => {
    if (currentPageIndex > 0) {
      currentPageIndex--;
      updateStorybook();
    }
  });

  // === Inicializar ===
  updateStorybook();
});
