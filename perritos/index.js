const getAllBreedsButton = document.getElementById("getAllBreeds");
const getRandomPicButton = document.getElementById("getRandomPic");
const getPicsByBreedButton = document.getElementById("getPicsByBreed");
const container = document.getElementById("container");
const inputText = document.getElementById("inputText");

let doggies = [];

function getAllBreeds(e) {
  e.preventDefault();
  axios
    .get("https://dog.ceo/api/breeds/list/all")
    .then((res) => {
      const { data } = res;
      console.log(data.message);

      doggies = Object.keys(data.message);

      console.log(doggies);

      container.innerHTML = "";
      doggies.forEach((dog) => {
        container.innerHTML += `
        <p class="col">${dog}</p>
        `;
      });
    })
    .catch((err) => console.error(err));
}

function getRandomPic(e) {
  e.preventDefault();
  axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      const { data } = res;
      const url = data.message;
      console.log(url);

      container.innerHTML = "";
      container.innerHTML = `<img style="max-width: 60vw; max-height:80vh" src=${url}>`;
    })
    .catch((err) => console.error(err));
}

function getPicsByBreed(e) {
  e.preventDefault();
  const breed = inputText.value;

  axios
    .get(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((res) => {
      const { data } = res;
      console.log(data);

      const url = data.message;
      console.log(url);

      container.innerHTML = "";

      if (data.status === "error") {
        console.log("big error");
        container.innerHTML =
          "<p>There was an error. Please check the breed.</p>";
      } else {
        container.innerHTML = `<img src=${url} style="max-width: 60vw; max-height:80vh">`;
      }
    })
    .catch((err) => console.error(err));
}

getAllBreedsButton.addEventListener("click", getAllBreeds);
getRandomPicButton.addEventListener("click", getRandomPic);
getPicsByBreedButton.addEventListener("click", getPicsByBreed);
