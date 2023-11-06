const searchButton = document.getElementById("searchID");
const container = document.getElementById("container");

const formSearch = document.getElementById("form");
const searchInput = document.getElementById("searchId");

const searchUser = async (e) => {
  e.preventDefault();

  try {
    const search = searchInput.value;
    const res = await axios.get(`https://api.github.com/users/${search}`);
    const user = res.data;
    console.log(user);
    showUser(user);
  } catch (error) {
    console.log(error);
  }
};

const showUser = (user) => {
  container.innerHTML = `
    <p>Name: ${user.name}</p>
    <p>Number of repositories: ${user.public_repos}</p>
    <img src ="${user.avatar_url}" / >
    `;
};

formSearch.addEventListener("submit", searchUser);
