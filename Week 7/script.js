function addPost() {
  const input = document.getElementById("postInput");
  const postContent = input.value.trim();

  if (postContent === "") return;

  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.push(postContent);
  localStorage.setItem("posts", JSON.stringify(posts));
  input.value = "";

  renderPosts();
}

function renderPosts() {
  const postList = document.getElementById("postList");
  postList.innerHTML = "";

  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  posts.forEach((post, index) => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
      ${post}
      <button onclick="deletePost(${index})">Delete</button>
    `;
    postList.appendChild(div);
  });
}

function deletePost(index) {
  const posts = JSON.parse(localStorage.getItem("posts"));
  posts.splice(index, 1);
  localStorage.setItem("posts", JSON.stringify(posts));
  renderPosts();
}

window.onload = renderPosts;
