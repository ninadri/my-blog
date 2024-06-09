const userNameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const formInput = document.getElementById("form");

// Creating blog form
function createAndRenderBlog(event) {
  event.preventDefault();
  const blog = {
    username: userNameInput.value,
    title: titleInput.value,
    content: contentInput.value,
  };

  console.log(blog);
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  location.href = "blog.html";
}

formInput.addEventListener("submit", createAndRenderBlog);
