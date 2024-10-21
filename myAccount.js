/* Back to home function */


function backHome() {
    window.location = "index.html";
}


/* Setting username to TestUser123- in the future, users can create their own account. */ 
const username = "TestUser123";

function displayUsername() {
    var message = `Welcome, ${username}!`;
    var paragraph = document.getElementById("username");

    paragraph.innerHTML = message;
}

window.addEventListener('DOMContentLoaded', 
    function() { 
        document.getElementById('defaultOpen').click();
    }
);


/* Code for tabs */
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

/* Allowing users to change the biography on their profile */
const ogBio = document.createElement('p');
ogBio.textContent = "Welcome to your Planterium home page!<br>Let others know about you by adding a biography- just hit the 'Edit Bio' button below!<br>Your biography will be visible to anyone who visits your page, and can be edited any time.<br>";

if(!localStorage.getItem("bio")) {
    localStorage.setItem("bio",ogBio.textContent);
}

function displayBio() {
    var bio = document.getElementById("bio_text");
    bio.innerHTML = localStorage.getItem("bio");
}

function editBio() {

    var newBio = document.createElement('p');
    newBio.textContent = prompt("Enter your new biography here:");

    if (newBio.textContent != '') {
        var currentBio = document.getElementById("bio_text");
        currentBio.innerHTML = newBio.innerHTML;

        localStorage.setItem("bio",newBio.textContent);
    }
}

function launchModal() {

}

function removeBio() {
    localStorage.removeItem("bio");
    location.reload();
}

function pageDNE() {
    location.href="under_construction.html";
}

function logIn() {
    location.href="Planterium_LoggedIn.html";
}

/* Allowing users to comment */

// function comment {

//     var comment = document.createElement('p');
//     comment.textContent = prompt("what would you like to comment:");

//     if (comment.textContent != '') {
//         var currentBio = document.getElementById("bio_text");
//         comment.innerHTML = newBio.innerHTML;

//         localStorage.setItem("bio",newBio.textContent);
//     }
// }

