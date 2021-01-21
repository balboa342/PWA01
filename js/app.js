const container = document.querySelector(".container")
const birds = [
  { name: "California Gull", image: "images/CaliGull.png" },
  { name: "Cardinal", image: "images/Cardinal.png" },
  { name: "Chicken", image: "images/Chicken.png" },
  { name: "Meadowlark", image: "images/Meadowlark.png" },
  { name: "Mockingbird", image: "images/Mockingbird.png" }
]

const showBirds = () => {
  let output = ""
  birds.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Larger</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showBirds);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

