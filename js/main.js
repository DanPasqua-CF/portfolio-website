// Flipbook functionality for work.html
const slides = [
  {
    image: "./img/my-work/Let's Talk.jpeg",
    title: "Let's Talk",
    description: "A chat application built with React and Firebase for real-time communication.",
    link: "https://github.com/DanPasqua-CF/chat-app",
    technologies: [
      { name: "React", icon: "./img/tech/react.svg" },
      { name: "Firebase", icon: "./img/tech/firebase.svg" },
      { name: "JavaScript", icon: "./img/tech/javascript.svg" }
    ]
  },
  {
    image: "./img/my-work/meet-app.jpeg",
    title: "Meet App",
    description: "A serverless progressive web application (PWA) built with React using test-driven development (TDD).",
    link: "https://github.com/DanPasqua-CF/meet-app",
    technologies: [
      { name: "React", icon: "./img/tech/react.svg" },
      { name: "AWS Lambda", icon: "./img/tech/Lambda.svg" },
      { name: "Jest", icon: "./img/tech/Jest.svg" }
    ]
  },
  {
    image: "./img/my-work/MyFlix Angular Client.jpeg",
    title: "MyFlix Angular Client",
    description: "An Angular-based client-side application for a movie database with user authentication and favorites.",
    link: "https://github.com/DanPasqua-CF/myFlix-Angular-client",
    technologies: [
      { name: "Angular", icon: "./img/tech/angular.svg" },
      { name: "TypeScript", icon: "./img/tech/typescript.svg" },
      { name: "Material UI", icon: "./img/tech/material-ui.svg" }
    ]
  },
  {
    image: "./img/my-work/MyFlix Client.jpeg",
    title: "MyFlix Client",
    description: "A React-based single-page application for browsing movies with detailed information and user profiles.",
    link: "https://github.com/DanPasqua-CF/myFlix-client",
    technologies: [
      { name: "React", icon: "./img/tech/react.svg" },
      { name: "Bootstrap", icon: "./img/tech/bootstrap.svg" },
      { name: "JavaScript", icon: "./img/tech/javascript.svg" }
    ]
  },
  {
    image: "./img/my-work/PokeDex.jpeg",
    title: "PokéDex",
    description: "A JavaScript application that loads data from an external API and enables viewing of data details.",
    link: "https://github.com/DanPasqua-CF/simple-js-app",
    technologies: [
      { name: "JavaScript", icon: "./img/tech/javascript.svg" },
      { name: "HTML5", icon: "./img/tech/html5.svg" },
      { name: "CSS3", icon: "./img/tech/css3.svg" }
    ]
  },
  {
    image: "./img/my-work/To-do List.jpeg",
    title: "To-Do List",
    description: "A simple task management application built with vanilla JavaScript for organizing daily activities.",
    link: "https://github.com/DanPasqua-CF/to-do-list-app",
    technologies: [
      { name: "JavaScript", icon: "./img/tech/javascript.svg" },
      { name: "HTML5", icon: "./img/tech/HTML5.svg" },
      { name: "CSS3", icon: "./img/tech/CSS3.svg" }
    ]
  }
];

let currentSlide = 0;

// Get DOM elements
const flipbookImg = document.getElementById('flipbook-img');
const flipbookTitle = document.getElementById('flipbook-title');
const flipbookDescription = document.getElementById('flipbook-description');
const flipbookGithubLink = document.getElementById('flipbook-github-link');
const flipbookTechStack = document.getElementById('flipbook-tech-stack');
const currentSlideSpan = document.getElementById('current-slide');
const totalSlidesSpan = document.getElementById('total-slides');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const flipbookSlide = document.getElementById('flipbook-slide');
const dotsContainer = document.getElementById('dots-container');

// Initialize only if flipbook elements exist (work.html page)
if (flipbookImg && dotsContainer) {
  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  function updateSlide() {
    // Add fade animation
    flipbookSlide.classList.remove('fade-in');
    setTimeout(() => {
      const slide = slides[currentSlide];
      
      // Update image
      flipbookImg.src = slide.image;
      flipbookImg.alt = slide.title;
      
      // Update title
      flipbookTitle.textContent = slide.title;
      
      // Update GitHub link
      if (slide.link) {
        flipbookGithubLink.href = slide.link;
        flipbookGithubLink.style.display = 'flex';
      } else {
        flipbookGithubLink.style.display = 'none';
      }
      
      // Update tech stack icons
      flipbookTechStack.innerHTML = ''; // Clear previous icons
      
      if (slide.technologies && slide.technologies.length > 0) {
        slide.technologies.forEach(tech => {
          const techIcon = document.createElement('img');
          techIcon.src = tech.icon;
          techIcon.alt = tech.name;
          techIcon.title = tech.name; // Shows tooltip on hover
          techIcon.className = 'tech-icon';
          flipbookTechStack.appendChild(techIcon);
        });
      }
      
      // Update description
      flipbookDescription.textContent = slide.description;
      currentSlideSpan.textContent = currentSlide + 1;
      flipbookSlide.classList.add('fade-in');

      // Update dots
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });

      // Update button states
      prevBtn.disabled = currentSlide === 0;
      nextBtn.disabled = currentSlide === slides.length - 1;
    }, 100);
  }

  function goToSlide(index) {
    currentSlide = index;
    updateSlide();
  }

  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlide();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      updateSlide();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentSlide > 0) {
      currentSlide--;
      updateSlide();
    } else if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
      currentSlide++;
      updateSlide();
    }
  });

  // Initialize
  totalSlidesSpan.textContent = slides.length;
  updateSlide();
}
