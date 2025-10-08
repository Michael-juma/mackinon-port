window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loadingScreen")
  setTimeout(() => {
    loadingScreen.classList.add("hidden")
  }, 1000)
})

function createParticles() {
  const particlesBg = document.getElementById("particlesBg")
  const particleCount = 50

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div")
    particle.style.position = "absolute"
    particle.style.width = Math.random() * 3 + 1 + "px"
    particle.style.height = particle.style.width
    particle.style.background = "var(--accent)"
    particle.style.borderRadius = "50%"
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = Math.random() * 100 + "%"
    particle.style.opacity = Math.random() * 0.5 + 0.2
    particle.style.animation = `float ${Math.random() * 10 + 5}s ease-in-out infinite`
    particle.style.animationDelay = Math.random() * 5 + "s"
    particlesBg.appendChild(particle)
  }
}

const style = document.createElement("style")
style.textContent = `
  @keyframes float {
    0%, 100% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(20px, -20px);
    }
    50% {
      transform: translate(-20px, 20px);
    }
    75% {
      transform: translate(20px, 20px);
    }
  }
`
document.head.appendChild(style)

createParticles()

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("mainNav")
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.2)"
  } else {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
  }
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight
      const targetPosition = target.offsetTop - navbarHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })

      // Close mobile menu if open
      const navbarCollapse = document.querySelector(".navbar-collapse")
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show")
      }
    }
  })
})

// Active navigation link highlighting
const sections = document.querySelectorAll("section[id]")
const navLinks = document.querySelectorAll(".nav-link")

function highlightNavigation() {
  const scrollPosition = window.scrollY + 100

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active")
        }
      })
    }
  })
}

window.addEventListener("scroll", highlightNavigation)

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".service-card, .project-card-new, .contact-card-new, .tool-item")

  animatedElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(element)
  })
})

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.boxShadow = "0 20px 50px rgba(0, 217, 255, 0.3)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.boxShadow = "none"
  })
})

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroContent = document.querySelector(".hero-content")
  const heroImage = document.querySelector(".hero-image-wrapper")

  if (heroContent && scrolled < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`
    heroContent.style.opacity = 1 - scrolled / 500
  }

  if (heroImage && scrolled < window.innerHeight) {
    heroImage.style.transform = `translateY(${scrolled * 0.2}px)`
  }
})

document.querySelectorAll(".skill-tag").forEach((tag) => {
  tag.addEventListener("click", function () {
    this.style.animation = "pulse 0.5s ease"
    setTimeout(() => {
      this.style.animation = ""
    }, 500)
  })
})

const pulseStyle = document.createElement("style")
pulseStyle.textContent = `
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
`
document.head.appendChild(pulseStyle)

console.log("%c👋 Welcome to Mackinon's Portfolio!", "color: #ffa500; font-size: 20px; font-weight: bold;")
console.log("%cLet's build something amazing together!", "color: #2d5f4f; font-size: 14px;")
