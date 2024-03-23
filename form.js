    const blogForm = document.getElementById("submit-form")
    const username = document.getElementById("username")
    const title = document.getElementById("title")
    const blogContent = document.getElementById("blog-content")



    blogForm.addEventListener("click", function(e) {
        e.preventDefault();
        usernameValue = username.value;
        titleValue = title.value;
        blogContentValue = blogContent.value;
        localStorage.setItem('username', usernameValue);
        localStorage.setItem('title', titleValue);
        localStorage.setItem('blog_content', blogContentValue);
        console.log(usernameValue + titleValue + blogContentValue)
        // window.location.assign("blog.html");

        
});

        