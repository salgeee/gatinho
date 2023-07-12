let generate_btn = document.getElementById("btn");

function fetchPics() {
  let catsImgDiv = document.querySelector(".catsImgDiv")
  catsImgDiv.innerHTML = ''



  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      let catsImgUrl = data[0].url

      let catsImgEl = document.createElement("img")
      catsImgEl.setAttribute('src', `${catsImgUrl}`)
      catsImgEl.classList.add("showcase")

      let catsImgDiv = document.querySelector(".catsImgDiv")
      catsImgDiv.appendChild(catsImgEl)

    });
}

generate_btn.addEventListener("click", fetchPics);
