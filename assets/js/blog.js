// Get values from local storage and display on page

/* How do i get this to keep the script as the bottom element? 
seems clunky to have to create element and then append element as 2 different
things. how can i combine create element, add class list and append into 1?*/

// let blogPagePost = document.createElement("div");
// document.body.appendChild(blogPagePost);
// blogPagePost.appendChild(blogPagePost.createElement("h2").classList.add("blog-title"));
// blogPagePost.createElement("p").classList.add("blog-content");

//Define section that you want to append blog posts to
const mainContainer = document.querySelector("main .container");

// Get array of objects 
const postsBlog = JSON.parse(localStorage.getItem('posts'));


//Append the main container that will hold each post with the title, content and username of each post
for (i=0; i < postsBlog.length; i++) {       
        let postsContainer = document.createElement("div")
        postsContainer.classList.add("posts-container");
        mainContainer.appendChild(postsContainer);
        
        //may be able to get rid of classes here
        let titleEl = document.createElement("h2");
        titleEl.classList.add("title-h2");
        titleEl.textContent = postsBlog[i].titleValue;
        postsContainer.appendChild(titleEl);
        
        let contentEl = document.createElement("p");
        contentEl.classList.add("content-p");
        contentEl.textContent = postsBlog[i].contentValue;
        postsContainer.appendChild(contentEl);
        
        let usernameEl = document.createElement("p");
        usernameEl.classList.add("username");
        usernameEl.textContent = `username: ${postsBlog[i].usernameValue}`;
        postsContainer.appendChild(usernameEl);
}

        
// function postBlogposts () {
//         document.createElement('div')

        



        




        //code not needed

        /* 
        
        // Retrieve data from local storage
        const username = localStorage.getItem("username");
        const title = localStorage.getItem("title");
        const post = localStorage.getItem("post");

        // Create blog post div dynamically
        const blogPostDiv = document.createElement("div");
        blogPostDiv.setAttribute("id", "blog-post");

        const heading = document.createElement("h2");
        heading.textContent = "Recent Post";
        blogPostDiv.appendChild(heading);

        const usernamePara = document.createElement("p");
        usernamePara.textContent = "Username: " + username;
        blogPostDiv.appendChild(usernamePara);

        const titlePara = document.createElement("p");
        titlePara.textContent = "Title: " + title;
        blogPostDiv.appendChild(titlePara);

        const postPara = document.createElement("p");
        postPara.textContent = "Blog Post:";
        blogPostDiv.appendChild(postPara);

        const postContent = document.createElement("p");
        postContent.textContent = post;
        blogPostDiv.appendChild(postContent);

        // Append the dynamically created div to the body
        document.body.appendChild(blogPostDiv);

        
        
        // localStorage.setItem('posts', JSON.stringify(posts));
        
        
          //JSON.parse(localStorage.getItem('posts'));
        
        
        
        
        
        
        
        */