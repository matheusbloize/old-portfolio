// Header
const header = document.querySelector(".header")
header.style.backgroundColor = "transparent"

document.addEventListener("scroll", () => {
  scrollY > 20 ? header.style.backgroundColor = "#1afeba" : header.style.backgroundColor = "transparent"
})

const headerAs = document.querySelectorAll(".header ul li a")

header.addEventListener("click", (e) => {
  if (e.target.nodeName === "A") {
    for (let i = 0; i < headerAs.length; i++) {
      headerAs[i].classList.remove("active")
      if (!e.target.classList.contains("active")) {
        e.target.classList.add("active")
      }
    }
  }
})

// Clock
const clock = document.querySelector(".clock")

function fixZero(number) {
  return number.length == 1 ? 0 + number : number
}

function setDate() {
  const now = new Date()
  const hour = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()
  clock.innerHTML = `${fixZero(hour.toString())}:${fixZero(minutes.toString())}:${fixZero(seconds.toString())}`
}

setDate()

setInterval(() => {
  setDate()
}, 1000)

// RD
const rd = document.querySelector(".rd")

rd.addEventListener("mouseenter", (e) => {
  if (e) {
    rd.children[0].src = "./assets/images/rd.png"
  }
})

rd.addEventListener("mouseleave", (e) => {
  if (e) {
    rd.children[0].src = "./assets/images/rd-alt.png"
  }
})

// Image to Gif
const projects = document.querySelectorAll(".project")

document.addEventListener("mouseover", (e) => {
  for (let i = 0; i < projects.length - 3; i++) {
    if (e.target === projects[i] || e.target === projects[i].children[0]) {
      projects[i].children[0].src = `./assets/gifs/project${i + 1}.gif`
    } else {
      projects[i].children[0].src = `./assets/images/project${i + 1}.png`
    }
  }
})