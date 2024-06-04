const parentElement = document.body;

// Footer
const footer = document.createElement('footer');
footer.className = 'footer';
footer.textContent = 'This is the footer.';
parentElement.appendChild(footer);

let today = new Date();
let thisYear = today.getFullYear();

let copyright = document.createElement("p");
copyright.innerHTML = `Ivan &#169; ${thisYear}`;
footer.appendChild(copyright);

// Skills
const skills = ["React", "JavaScript", "Node.JS", "HTML", "CSS", "Git / GitHub / GitLab", "APIs", "SQL", "Linux", "jQuery"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector('ul');

for (const skillText of skills) {
    const skillElement = document.createElement('li');
    skillElement.innerText = skillText;
    skillsList.appendChild(skillElement);
}

// Handle Message Form Submit
const messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const usersName = messageForm.usersName.value;
    const usersEmail = messageForm.usersEmail.value;
    const usersMessage = messageForm.usersMessage.value;

    const messageSection = document.getElementById("messages");
    const messageList = document.querySelector("#messages ul");
    const newMessage = document.createElement("li");

    newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>: <span class="message-text">${usersMessage}</span>
    `;

    const editButton = document.createElement("button");
    editButton.innerText = "Edit the Message";
    editButton.type = "button";
    editButton.addEventListener("click", function() {
        const messageTextElement = newMessage.querySelector(".message-text");
        const newMessageText = prompt("Enter new message:", messageTextElement.textContent);
        if (newMessageText !== null) {
            messageTextElement.textContent = newMessageText;
        }
    });

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", function() {
        newMessage.remove();
        checkMessageList();
    });

    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
    checkMessageList();
});

function checkMessageList() {
    const messageList = document.querySelector("#messages ul");
    const messagesSection = document.getElementById("messages");

    if (messageList.children.length === 0) {
        messagesSection.style.display = "none";
    } else {
        messagesSection.style.display = "block";
    }
}

checkMessageList();




const githubUsername = 'ivanmarcelomatos';
const apiUrl = `https://api.github.com/users/${githubUsername}/repos`;
// const apiUrl = `https://api.github.com/users/${githubUsername}/simulatedError`;

fetch(apiUrl)
    .then(response => response.json())
    .then(repositories => {
        
        console.log("Array? " + Array.isArray(repositories)); 
        console.log(repositories);
        

        // Step 2: Display Repositories in List
        const projectSection = document.getElementById('Projects');
        const projectList = projectSection.querySelector('ul');

        for (const repo of repositories) {
            const project = document.createElement('li');
            project.innerText = `${repo.name} \n ${repo.description} 
            \n`;
            projectList.appendChild(project);
        }
    })
    .catch(error => {
        console.error('Error fetching the repos:', error);
        const projectSection = document.getElementById('Projects');
        const errorMessage = document.createElement('p');
        errorMessage.innerText = 
        `There was an error fetching the repositories. Please try again later. \n
        ==> ${error}`;
        projectSection.appendChild(errorMessage);
    });


  // Function to toggle DarkMode
  function toggleDarkMode() 
{
    var body = document.body;
    body.classList.toggle("dark-mode");
}


