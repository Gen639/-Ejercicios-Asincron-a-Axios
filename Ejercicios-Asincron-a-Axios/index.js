let users = [];
const getDataButton = document.getElementById("getData");

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    const { data } = res;
    users = data;
    console.log(users);
    users.forEach((user) => console.log(user.name));
  })
  .catch((err) => console.error(err));

function mostrarUsers() {
  console.log(users);
  users.forEach((user) => {
    container.innerHTML += `
        <h1>${user.name}</h1>
        `;
  });
}

getDataButton.addEventListener("click", mostrarUsers);
