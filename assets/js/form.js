//Make variables for elements on the page 
const blogForm = document.getElementById("submit-form")
const username = document.getElementById("username")
const title = document.getElementById("title")
const content = document.getElementById("blog-content")
const submitBtn = document.getElementById("blog-submit")

//Set posts equal to the array in local storage or empty
let posts = JSON.parse(localStorage.getItem('posts')) || [];

//Submit button to submit new post and save to local storage
submitBtn.addEventListener("click", function(e) {
    //Prevent default html form functionality
    e.preventDefault();

    //If field is left blank, alert user to enter information
    if (username.value == "" || title.value == "" || content.value == "") {
        let response = alert("Please complete the form. Press OK to try again." );
        return;
    }
      
    //Create object with stored data for each input
    const blogPostObject = {
        usernameValue: username.value,
        titleValue: title.value,
        contentValue: content.value,
    }

    //Push the new object on each click to an arry
    posts.push(blogPostObject);



    //Add the new array with new pushed object to local storage
    localStorage.setItem('posts', JSON.stringify(posts));

    //Clear input fields
    username.value = "";
    title.value = "";
    content.value = "";      

    //Redirect to blog page after submission
    window.location.assign("blog.html")              
});



