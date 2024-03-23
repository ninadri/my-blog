const blogs = JSON.parse(localStorage.getItem('blogs')) || []
const blogContainer = document.getElementById("blog-container")

for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i]
    console.log (blog)
    const blogEl = document.createElement("div")
    blogEl.classList.add("blog")

    const usernameEl = document.createElement("p")
    usernameEl.textContent = "username: " + blog.username
    usernameEl.classList.add("text")
    blogEl.appendChild(usernameEl)

    const titleEl = document.createElement("p")
    titleEl.textContent = "title: " + blog.title
    titleEl.classList.add("text")
    blogEl.appendChild(titleEl)

    const contentEl = document.createElement("p")
    contentEl.textContent = "content: " + blog.content
    contentEl.classList.add("text")
    blogEl.appendChild(contentEl)

    blogContainer.appendChild(blogEl)
}
const backButton = document.getElementById("backButton");

backButton.addEventListener("click", function() {
    window.history.back();
});