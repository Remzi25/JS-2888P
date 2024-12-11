const cardRow = document.getElementById("cardRow");

async function fetchUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = await response.json();
    const userCard = users.map((user) => {
        const card = `<div class="card col-12 col-md-4 col-lg-3" style="width: 18rem;">
  <div class="card-body">
    <p class="card-text">Id: ${user.id}</p>
    <p class="card-text">Name: ${user.name}</p>
    <p class="card-text">Username: ${user.username}</p>
    <p class="card-text">City: ${user.address.city}</p>
    <p class="card-text">E-mail: ${user.email}</p>
    <p class="card-text">Company Name: ${user.company.name}</p>
    <a id="postButton" class="btn btn-secondary" href="post/post.html?postId=${user.id}">Posts</a>
  </div>
</div>`
cardRow.innerHTML += card;
    });

    console.log(users)
  } catch (error) {
    console.log(error);
  }
}

fetchUsers();


