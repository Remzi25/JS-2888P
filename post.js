const fetchPost = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("postId");

  const postRow = document.getElementById("postRow");

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const data = await response.json();
    console.log(data);

    const card = `<div class="card col-12" style="width: 18rem;">
  <div class="card-body">
    <p class="card-text">${data.title}</p>
    <p class="card-text">${data.body}</p>
  </div>
</div>`;

    postRow.innerHTML = card;
  } catch (error) {
    console.log(error);
  }
};

fetchPost();
