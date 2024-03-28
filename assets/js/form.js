//Make variables for elements on the page 

//when you put the value here, it was always empty since nothing is type on pageload
const blogForm = document.getElementById("submit-form")
const username = document.getElementById("username")
const title = document.getElementById("title")
const content = document.getElementById("blog-content")
const submitBtn = document.getElementById("blog-submit")

let posts = JSON.parse(localStorage.getItem('posts')) || [];

console.log(blogForm);


    submitBtn.addEventListener("click", function(e) {
        // See what this does
        e.preventDefault();

       

        //Create function to add each without resetting
       // function enterPosts() {
            //Create object with storied data for each input
            const blogPostObject = {
                usernameValue: username.value,
                titleValue: title.value,
                contentValue: content.value,
            }

//Push the new object on each click to an arry
posts.push(blogPostObject);

//Add the new object to the array and post the updated array
localStorage.setItem('posts', JSON.stringify(posts));

//Clear input fields
username.value = "";
title.value = "";
content.value = "";

// enterPosts();


//         }
        
    
        

      

        window.location.assign("blog.html")
        

      
        // console.log(usernameValue + titleValue + blogContentValue);
              
});



// };

// enterBlogPosts();
//dont need this code for now

// window.location.assign("blog.html");  
// 



// this was towards top

/* i thought this could another way to write: let posts = JSON.parse(localStorage.getItem('posts')) || []; */
//  if (posts = JSON.parse(localStorage.getItem('posts'))) {
//     const posts = JSON.parse(localStorage.getItem('posts'))
//  }

//  else {
//     const posts = []
//  }

//const postsBlog = JSON.parse(localStorage.getItem('posts'));
// function enterBlogPosts () {
//Set to blank array to push to
// let posts = [];

//Click on submit button, save the value of all input fields into local storage

/* need to think about this. 1. how can you use things like get and post
to do this instead. 2. what is difference between input type submit and input type
button. 3. can you define the value of everything in local scope above. 
will that recognize it when you submit or before? in other words is it getting
the value before you type anything in?
 */