const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
const blogContainer = document.getElementById("blog-container");

for (let i = 0; i < blogs.length; i++) {
  const blog = blogs[i];
  console.log(blog);
  const blogEl = document.createElement("div");
  blogEl.classList.add("blog");

  const titleEl = document.createElement("p");
  titleEl.textContent = " " + blog.title;
  titleEl.classList.add("text", "title");
  blogEl.appendChild(titleEl);

  const contentEl = document.createElement("p");
  contentEl.textContent = " " + blog.content;
  contentEl.classList.add("text");
  blogEl.appendChild(contentEl);

  const usernameEl = document.createElement("p");
  usernameEl.textContent = "Posted By: " + blog.username;
  usernameEl.classList.add("text", "posted-by");
  blogEl.appendChild(usernameEl);

  // Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");

  // Event listener to delete button
  deleteButton.addEventListener("click", function () {
    blogs.splice(i, 1);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    blogContainer.removeChild(blogEl);
  });
  blogEl.appendChild(deleteButton);

  blogContainer.appendChild(blogEl);
}

const backButton = document.getElementById("backButton");

backButton.addEventListener("click", function () {
  window.history.back();
});
