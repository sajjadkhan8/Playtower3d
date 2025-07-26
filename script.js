// Games data
const games = [
  {
    name: "Coin Rainbow: Lucky Dozer",
    image: "https://play-lh.googleusercontent.com/23xYqagumAaUwJqiyI1JHya4ZjyJR-QkeDgjUTXa8TYru2JUcQ0ebvRFwMo29tUKmkQ=w832-h470-rw",
    description: "Push coins and collect treasures in this exciting dozer game with rainbow rewards and lucky bonuses!",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.red3games.coin.rainbow.lucky.dozer",
    featured: true,
  },
  {
    name: "Christmas Coin Dozer Pusher",
    image: "https://play-lh.googleusercontent.com/K4jYEFUtrsKy3ITfSuNVk-SFtLEvDNi69-A4WX3bzNr_w41lV6SDZZSqfC20W-s1hSXM=w832-h470-rw",
    description:
      "Celebrate the holidays with festive coin-pushing action and Christmas-themed rewards and decorations.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.red3games.coins.dozer.christmas.special",
    featured: false,
  },
  {
    name: "Frozen Coin Dozer Jackpots",
    image: "https://play-lh.googleusercontent.com/R2A85xj6e17INJim_xjD0ZLBn5YRAYU9JXF99jaBkfUzWNZkK8pGbIdarplfrx3qGPA=w832-h470-rw",
    description: "Climb the mysterious zombie tree while avoiding dangers in this unique survival climbing simulator.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.playtower3d.coin.frozen.dozer",
    featured: true,
  },
  {
    name: "Dash Ball Up Impossible",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDbvj6Xarr6TG4FHrQUydJrL10ogyHzDcVg&s",
    description: "Test your reflexes in this challenging ball-bouncing game with impossible levels and endless fun.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.playtower3d.dashballup",
    featured: false,
  },
  {
    name: "Even Odd Balloons",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDbvj6Xarr6TG4FHrQUydJrL10ogyHzDcVg&s",
    description: "Pop balloons while solving math puzzles in this educational and entertaining number-based game.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.playtower3d.evenoddballoons",
    featured: false,
  },
  {
    name: "Penguin Cliff Dive",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDbvj6Xarr6TG4FHrQUydJrL10ogyHzDcVg&s",
    description: "Help brave penguins dive from icy cliffs in this thrilling arctic adventure with stunning visuals.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.playtower3d.penguincliffdive",
    featured: false,
  },
  {
    name: "Snow Moto Racer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDbvj6Xarr6TG4FHrQUydJrL10ogyHzDcVg&s",
    description: "Race through snowy landscapes on powerful snowmobiles in this high-speed winter racing game.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.playtower3d.snowmotoracer",
    featured: false,
  },
  {
    name: "Yellow Fish Twins",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDbvj6Xarr6TG4FHrQUydJrL10ogyHzDcVg&s",
    description: "Guide twin fish through underwater adventures in this charming aquatic puzzle-adventure game.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.playtower3d.yellowfishtwins",
    featured: false,
  },
]

// Initialize the website
document.addEventListener("DOMContentLoaded", () => {
  loadGames()
  setCurrentYear()
  initializeAnimations()
})

// Load games into the grid
function loadGames() {
  const gamesGrid = document.getElementById("gamesGrid")

  games.forEach((game) => {
    const gameCard = createGameCard(game)
    gamesGrid.appendChild(gameCard)
  })
}

// Create a game card element
function createGameCard(game) {
  const card = document.createElement("div")
  card.className = `game-card ${game.featured ? "featured" : ""}`

  card.innerHTML = `
        <div class="game-image">
            <img src="${game.image}" alt="${game.name}" loading="lazy">
            ${game.featured ? '<div class="featured-badge"><i class="fas fa-star"></i> Featured</div>' : ""}
        </div>
        <div class="game-content">
            <h3 class="game-title">${game.name}</h3>
            <p class="game-description">${game.description}</p>
            <div class="store-buttons">
                <a href="${game.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="store-btn google-play-btn">
                    <img src="assets/img/googleplay.jpg" alt="Google Play" class="store-icon" />
                </a>
                <a href="${game.appStoreUrl || '#'}" target="_blank" rel="noopener noreferrer" class="store-btn app-store-btn">
                    <img src="assets/img/appstore.jpg" alt="App Store" class="store-icon" />
                </a>
            </div>
        </div>
    `

  return card
}

// Set current year in footer
function setCurrentYear() {
  const yearElement = document.getElementById("currentYear")
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear()
  }
}

// Initialize animations and interactions
function initializeAnimations() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add scroll animations
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

  // Observe game cards for animation
  document.querySelectorAll(".game-card").forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
  })
}

// Mobile menu toggle
function toggleMobileMenu() {
  const nav = document.querySelector(".nav")
  const menuBtn = document.querySelector(".mobile-menu-btn i")

  if (nav.style.display === "flex") {
    nav.style.display = "none"
    menuBtn.className = "fas fa-bars"
  } else {
    nav.style.display = "flex"
    nav.style.flexDirection = "column"
    nav.style.position = "absolute"
    nav.style.top = "100%"
    nav.style.left = "0"
    nav.style.right = "0"
    nav.style.background = "white"
    nav.style.padding = "20px"
    nav.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"
    menuBtn.className = "fas fa-times"
  }
}

// Game card click tracking
document.addEventListener("click", (e) => {
  if (e.target.closest(".download-btn")) {
    const gameCard = e.target.closest(".game-card")
    const gameTitle = gameCard.querySelector(".game-title").textContent

    // Track game download clicks (you can integrate with analytics here)
    console.log(`Download clicked for: ${gameTitle}`)

    // Optional: Add a small animation feedback
    const btn = e.target.closest(".download-btn")
    btn.style.transform = "scale(0.95)"
    setTimeout(() => {
      btn.style.transform = "scale(1)"
    }, 150)
  }
})

// Add loading states for images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img")

  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1"
    })

    img.addEventListener("error", function () {
      this.src = "https://via.placeholder.com/300x200/E5E7EB/9CA3AF?text=Game+Image"
    })

    // Set initial opacity for smooth loading
    img.style.opacity = "0"
    img.style.transition = "opacity 0.3s ease"
  })
})
