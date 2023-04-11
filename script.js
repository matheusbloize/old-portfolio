// Header
const header = document.querySelector(".header")
header.style.backgroundColor = "transparent"

document.addEventListener("scroll", () => {
  if(scrollY > 20) {
    header.style.backgroundColor = "#1afeba"
    header.querySelector(".clock").style.color = "#001912"
    header.querySelector(".clock").style.textShadow = "2px 2px 1px #b2ffe8"
    header.querySelectorAll("a")[0].style.color = "#001912"
    header.querySelectorAll("a")[1].style.color = "#001912"
    header.querySelectorAll("a")[2].style.color = "#001912"
    header.querySelectorAll("a")[3].style.color = "#001912"
    header.querySelectorAll("a")[4].style.color = "#001912"
  } else {
    header.style.backgroundColor = "transparent"
    header.querySelector(".clock").style.color = "#b2ffe8"
    header.querySelector(".clock").style.textShadow = "2px 2px 1px #001912"
    header.querySelectorAll("a")[0].style.color = "#1afeba"
    header.querySelectorAll("a")[1].style.color = "#1afeba"
    header.querySelectorAll("a")[2].style.color = "#1afeba"
    header.querySelectorAll("a")[3].style.color = "#1afeba"
    header.querySelectorAll("a")[4].style.color = "#1afeba"
  }
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